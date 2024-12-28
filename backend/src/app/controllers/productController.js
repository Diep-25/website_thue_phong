
const productModel = require('../models/productModel');
const { mutipleConvertToObject } = require('../../util/convert');
const productImageModel = require('../models/productImageModel');

const { uploadFile } = require('../../util/upload-file')
class ProductController {

    async index(req, res) {
        try {
            const productData = await productModel.findAll({
                attributes: ['id', 'name', 'content', 'image'],
                include: [
                    {
                        model: productImageModel,
                        as: 'images'
                    },
                ],

            })
            const products = mutipleConvertToObject(productData);

            res.json({
                success: true,
                data: products
            }, 200)
        } catch (error) {
            res.json({
                success: false,
                message: 'Lấy data thất bại!'
            }, 404)
        }

    }

    async edit(req, res) {
        // const hashedPassword = await bcrypt.hash('Khongpass@123', 10);
        // console.log(hashedPassword);

        productModel.findOne({
            attributes: ['id', 'name', 'content', 'image'],
            include: [
                {
                    model: productImageModel,
                    as: 'images'
                },
            ],
            where: { id: req.params.id }
        })
            .then(product => {

                res.json({
                    success: true,
                    data: product.dataValues
                }, 200)
            })
            .catch(() => {
                res.json({
                    success: false,
                    message: 'Lấy data thất bại!'
                }, 404)
            })
    }

    async save(req, res) {

        const { image, image_detail } = req.files || {};

        const imagePatch = uploadFile(image, 'products', image.name)

        productModel.create({
            name: req.body.name,
            content: req.body.content,
            image: imagePatch
        }).then((data) => {
            if (image_detail && Array.isArray(image_detail) && image_detail.length) {
                image_detail.forEach(item => {
                    const imagePatchDetail = uploadFile(item, 'products-detail', item.name)
                    productImageModel.create({
                        product_id: data.id,
                        image_detail: imagePatchDetail,
                    });
                });
            }
            res.json({
                success: true,
                message: 'Thêm sản phẩm thành công!',
                data: data
            })
        }).catch(function (err) {
            res.json({
                success: false,
                message: 'Thêm sản phẩm thất bại!'
            })
        });
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, content } = req.body;
            const { image, image_detail } = req.files || {};

            const product = await productModel.findByPk(id);
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: 'Sản phẩm không tồn tại!'
                });
            }

            let imagePatch = product.image;
            if (image) {
                imagePatch = uploadFile(image, 'products', image.name);
            }

            await product.update({
                name,
                content,
                image: imagePatch,
            });

            if (image_detail) {
                await productImageModel.destroy({
                    where: { product_id: id },
                });

                if (image_detail) {
                    const details = Array.isArray(image_detail) ? image_detail : [image_detail];

                    for (const item of details) {
                        const imagePatchDetail = uploadFile(item, 'products-detail', item.name);
                        await productImageModel.create({
                            product_id: id,
                            image_detail: imagePatchDetail,
                        });
                    }
                }
            }

            return res.json({
                success: true,
                message: 'Cập nhật sản phẩm thành công!',
                data: product,
            });
        } catch (err) {

            return res.status(500).json({
                success: false,
                message: 'Cập nhật sản phẩm thất bại!',
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            await productImageModel.destroy({
                where: { product_id: id },
            });

            await productModel.destroy({
                where: { id: id },
            });

            return res.json({
                success: true,
                message: 'Xóa sản phẩm thành công!',
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Xóa sản phẩm thất bại!',
            });
        }
    }

}

module.exports = new ProductController;