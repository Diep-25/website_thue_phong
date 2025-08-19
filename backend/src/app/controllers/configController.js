require("dotenv").config();
const db = require("../../config/db");
const configModel = require("../models/configModel");
const { uploadFile } = require("../../util/upload-file");
const { mutipleConvertToObject } = require("../../util/convert");
const { isNil } = require("lodash");

class ConfigController {
  async index(req, res, next) {
    try {
      const configData = await configModel.findAll({
        attributes: ["key", "content", "type"],
      });
      const configs = mutipleConvertToObject(configData);

      if (isNil(configs)) {
        return res.json(
          {
            success: false,
            message: "Lấy data thất bại!",
          },
          500
        );
      }

      return res.json(
        {
          success: true,
          message: "Lấy data thành công!",
          data: configs,
        },
        200
      );
    } catch (error) {
      return res.json(
        {
          success: false,
          message: "Lấy data thất bại!",
        },
        500
      );
    }
  }

  async update(req, res, next) {
    const { key } = req.params;
    const { content, type } = req.body;
    const { content: image } = req.files || {};

    try {
      const config = await configModel.findOne({
        attributes: ["id", "key", "content"],
        where: { key: key },
      });

      if (!config) {
        return res.status(404).json({
          success: false,
          message: "Config không tồn tại!",
        });
      }

      let content_new = content;

      if (type == "image") {
        content_new = config.content;
        if (image) {
          content_new = uploadFile(image, "configs", image.name);
        }
      }

      await config.update({
        content: content_new,
      });

      return res.json({
        success: true,
        message: "Cập nhật config thành công!",
      });
    } catch (error) {
      return res.json(
        {
          success: false,
          message: "Lấy data thất bại!",
        },
        500
      );
    }
  }
}

module.exports = new ConfigController();
