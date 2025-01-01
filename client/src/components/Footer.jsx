 
const Footer = () => {  
    return (  
        <footer className="bg-blue-800 mx-auto text-white py-10">  
            <div className="container text-left grid grid-cols-1 md:grid-cols-3 gap-10 px-4">  
                <div>  
                    <h2 className="text-lg font-bold mb-4">LIÊN HỆ</h2>  
                    <p className="font-bold">TRUNG TÂM GIA SƯ HÓA HỌC TRỜ</p>  
                    <p>15 Lê Đồ, Đà Nẵng</p>  
                    <p>Phone: 0913921920</p>  
                    <p>Email: <a href="mailto:trungtamhoahoctro@gmail.com" className="underline">trungtamhoahoctro@gmail.com</a></p>  
                </div>  
                <div>  
                    <h2 className="text-lg font-bold mb-4">VỀ CHÚNG TÔI</h2>  
                    <ul>  
                        <li><a href="#" className="hover:underline">Trung tâm gia sư Đà Nẵng</a></li>  
                        <li><a href="#" className="hover:underline">Giới thiệu</a></li>  
                        <li><a href="#" className="hover:underline">Hoạt động</a></li>  
                        <li><a href="#" className="hover:underline">Tuyển dụng</a></li>  
                    </ul>  
                </div>  
                <div>  
                    <h2 className="text-lg font-bold mb-4">THỐNG KÊ TRUY CẬP</h2>  
                    <ul>  
                        <li>Truy cập trong ngày: 12</li>  
                        <li>Truy cập trong tháng: 322</li>  
                        <li>Truy cập trong năm: 960</li>  
                        <li>Tổng lượt truy cập: 2630</li>  
                    </ul>  
                </div>  
            </div>  
            <div className="text-center py-4">  
                <p className="text-sm">Kết nối với chúng tôi</p>  
            </div>  
        </footer>  
    );  
};  

export default Footer;  