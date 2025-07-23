/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100425
 Source Host           : localhost:3306
 Source Schema         : website_thue_phong_moi

 Target Server Type    : MySQL
 Target Server Version : 100425
 File Encoding         : 65001

 Date: 15/06/2025 12:07:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for configs
-- ----------------------------
DROP TABLE IF EXISTS `configs`;
CREATE TABLE `configs`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of configs
-- ----------------------------
INSERT INTO `configs` VALUES (1, 'logo', 'assets\\images\\configs\\Birds_and_nest.gif', '0000-00-00 00:00:00', '2025-02-26 15:14:23', 'image');
INSERT INTO `configs` VALUES (2, 'logo_big', 'assets\\images\\configs\\small_business.png', '0000-00-00 00:00:00', '2025-02-26 15:16:24', 'image');
INSERT INTO `configs` VALUES (3, 'textDecription', 'I love creating websites for small businesses. Particularly for crafters, photographers, bakers, stay at home moms with their side hustles. Anything cute and fun. But, I understand that spending thousands on a custom website is unlikely to fit in the budget. I can offer deep discounts for those who are willing to give up the reins on the design decisions. You give me your content (photos, text, etc.) and I will build you a beautiful, custom website. Something that will make you stand out from the crowd. Get in touch to find out more.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (4, 'textTitle', 'look no farther!', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (5, 'linkfb', 'https://www.facebook.com/phongdayhocchothue.hoahoctro.danang/', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (6, 'linkMess', 'https://www.facebook.com/messages/t/392234097613470', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (7, 'linkYoutube', 'https://www.youtube.com/channel/UCOPijTagF3kOO9G7tXctp0w', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (8, 'imgContact', 'assets\\images\\configs\\contact.jpg', '0000-00-00 00:00:00', '2025-02-26 15:17:20', 'image');
INSERT INTO `configs` VALUES (9, 'nurseryImg', 'assets\\images\\configs\\F1AsDDdXsAsBZns.jpg', '0000-00-00 00:00:00', '2025-02-26 15:17:26', 'image');
INSERT INTO `configs` VALUES (10, 'nurseryTitle', 'Welcome to the Duchy of Cornwall Nursery, a place for one and all Welcome to the Duchy of Cornwall Nursery, a place for one and all', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (11, 'nameBrand', 'CHO THUÊ PHÒNG DẠY HỌC ĐÀ NẴNG HHT', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (12, 'address', '15 Đào Duy Anh - Đà Nẵng, 70 Phạm Văn Nghị - Đà Nẵng', '0000-00-00 00:00:00', '2025-03-19 15:03:43', 'text');
INSERT INTO `configs` VALUES (13, 'phone', '0913921920', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (14, 'email', 'trungtamhoahoctro@gmail.com', '0000-00-00 00:00:00', '2025-04-03 14:46:53', 'text');
INSERT INTO `configs` VALUES (15, 'zalo', 'https://zalo.me/0337165122', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (16, 'googleMap', 'https://maps.app.goo.gl/ws25eN2Tpeh9AwtS7', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (18, 'background', 'assets\\images\\configs\\F1AsDDdXsAsBZns.jpg', '2025-03-16 16:19:47', '2025-04-03 14:48:58', 'image');
INSERT INTO `configs` VALUES (19, 'linkNotication', '#', '2025-03-23 17:08:59', '2025-04-03 14:52:19', 'text');
INSERT INTO `configs` VALUES (20, 'textNotication', 'Join the mailing list to receive\r\noccasional updates about new\r\nfonts, giveaways, and sales!', '2025-03-23 17:08:59', '2025-04-03 14:52:02', 'text');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `note` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `student_number` int NULL DEFAULT NULL,
  `product_id` int NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT '2025-01-08 15:35:38',
  `subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product_id`(`product_id` ASC) USING BTREE,
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (1, 'bongiagia01@gmail.com', '0965840200', 'DIep', 'nnnnn', 12, 2, '2025-03-05 15:14:33', '', '2025-03-05 15:20:07', '2025-03-05 15:20:07');
INSERT INTO `orders` VALUES (2, 'bongiagia01@gmail.com', '0965840200', 'Ngô Văn Điệp', 'abcd', 12, 6, '2025-03-10 15:07:21', '', '2025-03-10 15:55:33', '2025-03-10 15:55:33');
INSERT INTO `orders` VALUES (3, 'bongiagia01@gmail.com', '0965840200', 'Diep', 'qưqwq', 12, 4, '2025-03-18 16:18:18', 'Môn a', '2025-03-18 16:24:31', '2025-03-18 16:24:31');
INSERT INTO `orders` VALUES (4, 'bongiagia01@gmail.com', '0965840200', 'Diep', 'www', 2, 4, '2025-03-18 16:28:55', 'Mon a', '2025-03-18 16:29:11', '2025-03-18 16:29:11');
INSERT INTO `orders` VALUES (5, '', '0965840200', 'dsdsds', 'sdsds', 12, 5, '2025-03-23 16:25:27', 'wwww', '2025-03-23 16:25:45', '2025-03-23 16:25:45');
INSERT INTO `orders` VALUES (6, '', '0965840200', 'ddd', 'dsd', 12, 5, '2025-03-23 16:28:26', 'www', '2025-03-23 16:34:32', '2025-03-23 16:34:32');

-- ----------------------------
-- Table structure for product_images
-- ----------------------------
DROP TABLE IF EXISTS `product_images`;
CREATE TABLE `product_images`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_detail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `product_id` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product_id`(`product_id` ASC) USING BTREE,
  CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_images
-- ----------------------------
INSERT INTO `product_images` VALUES (1, 'assets\\images\\products-detail\\frederique-constant-business-timer-mens-watch-fc-270sw4p6_2 - Copy - Copy.jpg', 2, '2025-03-17 14:31:50', '2025-03-17 14:31:50');
INSERT INTO `product_images` VALUES (2, 'assets\\images\\products-detail\\frederique-constant-business-timer-mens-watch-fc-270sw4p6_2 - Copy (2).jpg', 2, '2025-03-17 14:31:50', '2025-03-17 14:31:50');
INSERT INTO `product_images` VALUES (7, 'assets\\images\\products-detail\\contact.jpg', 10, '2025-03-19 14:21:49', '2025-03-19 14:21:49');
INSERT INTO `product_images` VALUES (8, 'assets\\images\\products-detail\\F1AsDDdXsAsBZns.jpg', 10, '2025-03-19 14:21:49', '2025-03-19 14:21:49');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `equipment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `contains` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `capacity` int NOT NULL,
  `isSpecial` double NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (2, 'abd', '<p>aaaaa</p>', 'assets\\images\\products\\Screenshot 2024-11-11 205349.png', 0, '2025-01-08 15:48:44', '2025-03-18 16:18:38', '', '', 'aaaaaa', '121212', 0, 0);
INSERT INTO `products` VALUES (4, 'SP 2', '<p>ssss</p>', 'assets\\images\\products\\Screenshot 2024-11-23 204837.png', 0, '2025-01-08 15:50:10', '2025-03-18 16:24:31', '', '', 'ssss', '0', 0, 1);
INSERT INTO `products` VALUES (5, 'sp 3', 'dddd', 'assets\\images\\products\\Screenshot 2024-11-23 204837.png', 0, '2025-01-08 15:50:28', '2025-03-23 16:25:45', '', '', '', '0', 0, 0);
INSERT INTO `products` VALUES (6, 'SP 5', 'ssss', 'assets\\images\\products\\lap-trinh-web.jpg', 0, '2025-01-08 15:51:26', '2025-03-10 15:55:33', '', '', '', '0', 0, 0);
INSERT INTO `products` VALUES (7, 'SSSSSSSSS', 'swwwwww', 'assets\\images\\products\\5E5E6699-6851-4164-ABF4-A488C086CE47.jpg', 1, '2025-01-12 14:33:51', '2025-01-12 14:33:51', 'wwwwwwwww', 'sssdsds', 'xxxxxxxxxxxx', '12000', 0, 1);
INSERT INTO `products` VALUES (8, 'wwww', '<p>qwqwq</p>', 'assets\\images\\products\\183392423_Untitled-51.jpg', 1, '2025-03-18 15:54:13', '2025-03-18 15:54:13', 'wqw', '1wqqw', 'wwqwqw', '12w', 0, 0);
INSERT INTO `products` VALUES (9, 'wwww', '<p>qwqwq</p>', 'assets\\images\\products\\183392423_Untitled-51.jpg', 1, '2025-03-18 15:55:33', '2025-03-18 15:55:33', 'wwww', 'sasaee2', 'wqwqwq', '12', 0, 0);
INSERT INTO `products` VALUES (10, 'wwww', '<p>Phát biểu tại chương trình, Bí thư Thành ủy Nguyễn Văn Quảng cho biết, ra đời trong giai đoạn kháng chiến chống Mỹ đầy cam go và khó khăn, Mặt trận 44 Quảng Đà là lực lượng chủ lực trên chiến trường Quảng Nam - Đà Nẵng, trực tiếp đối mặt với quân địch đông đảo, tinh nhuệ, được trang bị vũ khí hiện đại. Nhưng với tinh thần “Trung dũng, kiên cường, đi đầu diệt Mỹ”, cán bộ, chiến sĩ Mặt trận 44 Quảng Đà đã vượt qua mọi khó khăn, gian khổ, mưu trí, dũng cảm, chiến đấu ngoan cường.</p><p>Qua đó, lập nên nhiều chiến công vang dội, góp phần quan trọng giải phóng thành phố Đà Nẵng và thắng lợi chung của cách mạng miền Nam, thống nhất đất nước.&nbsp;</p><p>Sau ngày đất nước thống nhất, các cựu chiến binh Mặt trận 44 Quảng Đà tiếp tục phát huy truyền thống “Bộ đội Cụ Hồ”, tích cực tham gia xây dựng quê hương, đất nước, giúp đỡ đồng đội, đóng góp vào sự phát triển chung của thành phố Đà Nẵng và cả nước.</p><p>Bí thư Thành ủy bày tỏ sự tri ân và lòng biết ơn sâu sắc đối với những cống hiến, hy sinh to lớn của những người đã không tiếc máu xương, chiến đấu vì độc lập, tự do của dân tộc và hạnh phúc của nhân dân.</p><p><span style=\"color: rgb(230, 0, 0);\"><img src=\"https://baodanang.vn/dataimages/202503/original/images1770114_IMG_7225.jpeg\"></span>Bí thư Thành ủy Nguyễn Văn Quảng (bên phải) tặng hoa chúc mừng Ban liên lạc Mặt trận 44 Quảng Đà. Ảnh: KHÁNH NGÂN</p><p><span style=\"color: rgb(230, 0, 0);\">﻿</span></p>', 'assets\\images\\products\\F1AsDDdXsAsBZns.jpg', 1, '2025-03-18 15:56:40', '2025-03-19 14:24:42', 'ccccc', '11111', 'cccc', '11111', 0, 1);

-- ----------------------------
-- Table structure for sliders
-- ----------------------------
DROP TABLE IF EXISTS `sliders`;
CREATE TABLE `sliders`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sliders
-- ----------------------------
INSERT INTO `sliders` VALUES (2, 'Slider 2', 'assets\\images\\sliders\\A58AED40-4421-4126-AE60-D17A27290AF4.jpg', '2025-01-16 16:12:32', '2025-01-16 16:12:32');
INSERT INTO `sliders` VALUES (3, 'Slider 1', 'assets\\images\\sliders\\nganh-lap-trinh-web-co-quotloi-thoiquot-trong-tuong-lai-20221102162400-623229.jpg', '2025-02-12 14:09:31', '2025-02-12 14:09:31');
INSERT INTO `sliders` VALUES (4, 'aaaa', 'assets\\images\\sliders\\D739C34A-6F38-4525-97B6-3144F61CDBB2.jpg', '2025-03-23 15:26:19', '2025-03-23 15:26:19');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Admin', 'admin@gmail.com', '$2a$10$hYHY9bhr8SKEScFL5l6H7.eCexKVOcdXScsqr00Enq0aiaHfwSTHK', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for visits
-- ----------------------------
DROP TABLE IF EXISTS `visits`;
CREATE TABLE `visits`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `visit_time` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 215 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of visits
-- ----------------------------
INSERT INTO `visits` VALUES (1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-26');
INSERT INTO `visits` VALUES (2, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-26');
INSERT INTO `visits` VALUES (3, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-26');
INSERT INTO `visits` VALUES (4, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (5, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (6, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (7, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (8, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (9, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (10, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (11, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (12, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (13, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (14, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (15, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (16, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (17, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (18, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (19, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (20, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (21, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (22, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (23, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (24, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (25, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (26, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (27, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (28, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (29, '::1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1', '2025-02-28');
INSERT INTO `visits` VALUES (30, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (31, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (32, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (33, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-28');
INSERT INTO `visits` VALUES (34, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (35, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (36, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (37, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (38, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (39, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (40, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (41, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (42, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (43, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (44, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (45, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (46, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-05');
INSERT INTO `visits` VALUES (47, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-10');
INSERT INTO `visits` VALUES (48, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-10');
INSERT INTO `visits` VALUES (49, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-10');
INSERT INTO `visits` VALUES (50, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-10');
INSERT INTO `visits` VALUES (51, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-10');
INSERT INTO `visits` VALUES (52, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-10');
INSERT INTO `visits` VALUES (53, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-10');
INSERT INTO `visits` VALUES (54, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-10');
INSERT INTO `visits` VALUES (55, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-10');
INSERT INTO `visits` VALUES (56, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-03-10');
INSERT INTO `visits` VALUES (57, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (58, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (59, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (60, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (61, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (62, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (63, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (64, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (65, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (66, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (67, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (68, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (69, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (70, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (71, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (72, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (73, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (74, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (75, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (76, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-16');
INSERT INTO `visits` VALUES (77, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (78, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (79, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (80, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (81, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (82, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (83, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (84, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (85, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (86, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (87, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (88, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (89, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (90, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (91, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (92, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (93, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (94, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (95, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (96, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (97, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (98, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (99, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (100, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (101, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (102, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (103, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (104, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (105, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (106, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (107, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (108, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (109, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (110, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-17');
INSERT INTO `visits` VALUES (111, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (112, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (113, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (114, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (115, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (116, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (117, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (118, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (119, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (120, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (121, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (122, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (123, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (124, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (125, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (126, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (127, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (128, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (129, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (130, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-18');
INSERT INTO `visits` VALUES (131, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (132, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (133, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (134, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (135, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (136, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (137, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (138, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (139, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (140, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (141, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (142, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (143, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (144, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (145, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (146, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (147, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (148, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (149, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (150, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (151, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (152, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-19');
INSERT INTO `visits` VALUES (153, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (154, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (155, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (156, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (157, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (158, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (159, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (160, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (161, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (162, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (163, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (164, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (165, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (166, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (167, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (168, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (169, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (170, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (171, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (172, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (173, '::1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (174, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (175, '::1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (176, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (177, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (178, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (179, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (180, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (181, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (182, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (183, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (184, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (185, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (186, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (187, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (188, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-03-23');
INSERT INTO `visits` VALUES (189, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (190, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (191, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (192, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (193, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (194, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (195, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (196, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (197, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (198, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (199, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (200, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (201, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (202, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (203, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (204, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (205, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (206, '::1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (207, '::1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1', '2025-04-03');
INSERT INTO `visits` VALUES (208, '::1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1', '2025-04-03');
INSERT INTO `visits` VALUES (209, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (210, '::1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15', '2025-04-03');
INSERT INTO `visits` VALUES (211, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (212, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (213, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');
INSERT INTO `visits` VALUES (214, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', '2025-04-03');

SET FOREIGN_KEY_CHECKS = 1;
