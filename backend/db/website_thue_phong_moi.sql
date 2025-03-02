-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th2 28, 2025 lúc 03:05 PM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `website_thue_phong_moi`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `configs`
--

CREATE TABLE `configs` (
  `id` int(11) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `configs`
--

INSERT INTO `configs` (`id`, `key`, `content`, `createdAt`, `updatedAt`, `type`) VALUES
(1, 'logo', 'assets\\images\\configs\\Birds_and_nest.gif', '0000-00-00 00:00:00', '2025-02-26 15:14:23', 'image'),
(2, 'logo_big', 'assets\\images\\configs\\small_business.png', '0000-00-00 00:00:00', '2025-02-26 15:16:24', 'image'),
(3, 'textDecription', 'I love creating websites for small businesses. Particularly for crafters, photographers, bakers, stay at home moms with their side hustles. Anything cute and fun. But, I understand that spending thousands on a custom website is unlikely to fit in the budget. I can offer deep discounts for those who are willing to give up the reins on the design decisions. You give me your content (photos, text, etc.) and I will build you a beautiful, custom website. Something that will make you stand out from the crowd. Get in touch to find out more.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text'),
(4, 'textTitle', 'look no farther!', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text'),
(5, 'linkfb', 'https://www.facebook.com/phongdayhocchothue.hoahoctro.danang/', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text'),
(6, 'linkMess', 'https://www.facebook.com/messages/t/392234097613470', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text'),
(7, 'linkYoutube', 'https://www.youtube.com/channel/UCOPijTagF3kOO9G7tXctp0w', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text'),
(8, 'imgContact', 'assets\\images\\configs\\contact.jpg', '0000-00-00 00:00:00', '2025-02-26 15:17:20', 'image'),
(9, 'nurseryImg', 'assets\\images\\configs\\F1AsDDdXsAsBZns.jpg', '0000-00-00 00:00:00', '2025-02-26 15:17:26', 'image'),
(10, 'nurseryTitle', 'Welcome to the Duchy of Cornwall Nursery, a place for one and all Welcome to the Duchy of Cornwall Nursery, a place for one and all', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text'),
(11, 'nameBrand', 'CHO THUÊ PHÒNG DẠY HỌC ĐÀ NẴNG HHT', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text'),
(12, 'address', '15 Đào Duy Anh - Đà Nẵng', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text'),
(13, 'phone', '0913921920', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text'),
(14, 'email', 'trungtamhoahoctro@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text'),
(15, 'zalo', 'https://zalo.me/0337165122', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text'),
(16, 'googleMap', 'https://maps.app.goo.gl/ws25eN2Tpeh9AwtS7', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `student_number` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `date` datetime DEFAULT '2025-01-08 15:35:38',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `equipment` varchar(255) NOT NULL,
  `contains` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `capacity` int(11) NOT NULL,
  `isSpecial` double NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `content`, `image`, `status`, `createdAt`, `updatedAt`, `equipment`, `contains`, `description`, `price`, `capacity`, `isSpecial`) VALUES
(2, 'abd', '<p>ABCS</p>', 'assets\\images\\products\\Screenshot 2024-11-11 205349.png', 1, '2025-01-08 15:48:44', '2025-02-12 15:26:28', '', '', '', 0, 0, 0),
(4, 'SP 2', 'ssss', 'assets\\images\\products\\Screenshot 2024-11-23 204837.png', 1, '2025-01-08 15:50:10', '2025-01-08 15:50:10', '', '', '', 0, 0, 0),
(5, 'sp 3', 'dddd', 'assets\\images\\products\\Screenshot 2024-11-23 204837.png', 1, '2025-01-08 15:50:28', '2025-01-08 15:50:28', '', '', '', 0, 0, 0),
(6, 'SP 5', 'ssss', 'assets\\images\\products\\lap-trinh-web.jpg', 0, '2025-01-08 15:51:26', '2025-01-11 10:29:37', '', '', '', 0, 0, 0),
(7, 'SSSSSSSSS', 'swwwwww', 'assets\\images\\products\\5E5E6699-6851-4164-ABF4-A488C086CE47.jpg', 1, '2025-01-12 14:33:51', '2025-01-12 14:33:51', 'wwwwwwwww', 'sssdsds', 'xxxxxxxxxxxx', 12000, 0, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_images`
--

CREATE TABLE `product_images` (
  `id` int(11) NOT NULL,
  `image_detail` varchar(255) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sliders`
--

CREATE TABLE `sliders` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sliders`
--

INSERT INTO `sliders` (`id`, `name`, `image`, `createdAt`, `updatedAt`) VALUES
(2, 'Slider 2', 'assets\\images\\sliders\\A58AED40-4421-4126-AE60-D17A27290AF4.jpg', '2025-01-16 16:12:32', '2025-01-16 16:12:32'),
(3, 'Slider 1', 'assets\\images\\sliders\\nganh-lap-trinh-web-co-quotloi-thoiquot-trong-tuong-lai-20221102162400-623229.jpg', '2025-02-12 14:09:31', '2025-02-12 14:09:31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', 'admin@gmail.com', '$2a$10$hYHY9bhr8SKEScFL5l6H7.eCexKVOcdXScsqr00Enq0aiaHfwSTHK', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `visits`
--

CREATE TABLE `visits` (
  `id` int(11) NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  `user_agent` text NOT NULL,
  `visit_time` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `visits`
--

INSERT INTO `visits` (`id`, `ip_address`, `user_agent`, `visit_time`) VALUES
(1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-26'),
(2, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-26'),
(3, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-26'),
(4, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `configs`
--
ALTER TABLE `configs`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `visits`
--
ALTER TABLE `visits`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `configs`
--
ALTER TABLE `configs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `visits`
--
ALTER TABLE `visits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
