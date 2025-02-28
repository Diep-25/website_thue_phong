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

 Date: 26/02/2025 22:50:08
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
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

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
INSERT INTO `configs` VALUES (12, 'address', '15 Đào Duy Anh - Đà Nẵng', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (13, 'phone', '0913921920', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (14, 'email', 'trungtamhoahoctro@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (15, 'zalo', 'https://zalo.me/0337165122', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');
INSERT INTO `configs` VALUES (16, 'googleMap', 'https://maps.app.goo.gl/ws25eN2Tpeh9AwtS7', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'text');

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
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product_id`(`product_id` ASC) USING BTREE,
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_images
-- ----------------------------

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
  `price` int NOT NULL,
  `capacity` int NOT NULL,
  `isSpecial` double NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (2, 'abd', '<p>ABCS</p>', 'assets\\images\\products\\Screenshot 2024-11-11 205349.png', 1, '2025-01-08 15:48:44', '2025-02-12 15:26:28', '', '', '', 0, 0, 0);
INSERT INTO `products` VALUES (4, 'SP 2', 'ssss', 'assets\\images\\products\\Screenshot 2024-11-23 204837.png', 1, '2025-01-08 15:50:10', '2025-01-08 15:50:10', '', '', '', 0, 0, 0);
INSERT INTO `products` VALUES (5, 'sp 3', 'dddd', 'assets\\images\\products\\Screenshot 2024-11-23 204837.png', 1, '2025-01-08 15:50:28', '2025-01-08 15:50:28', '', '', '', 0, 0, 0);
INSERT INTO `products` VALUES (6, 'SP 5', 'ssss', 'assets\\images\\products\\lap-trinh-web.jpg', 0, '2025-01-08 15:51:26', '2025-01-11 10:29:37', '', '', '', 0, 0, 0);
INSERT INTO `products` VALUES (7, 'SSSSSSSSS', 'swwwwww', 'assets\\images\\products\\5E5E6699-6851-4164-ABF4-A488C086CE47.jpg', 1, '2025-01-12 14:33:51', '2025-01-12 14:33:51', 'wwwwwwwww', 'sssdsds', 'xxxxxxxxxxxx', 12000, 0, 1);

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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sliders
-- ----------------------------
INSERT INTO `sliders` VALUES (2, 'Slider 2', 'assets\\images\\sliders\\A58AED40-4421-4126-AE60-D17A27290AF4.jpg', '2025-01-16 16:12:32', '2025-01-16 16:12:32');
INSERT INTO `sliders` VALUES (3, 'Slider 1', 'assets\\images\\sliders\\nganh-lap-trinh-web-co-quotloi-thoiquot-trong-tuong-lai-20221102162400-623229.jpg', '2025-02-12 14:09:31', '2025-02-12 14:09:31');

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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of visits
-- ----------------------------
INSERT INTO `visits` VALUES (1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-26');
INSERT INTO `visits` VALUES (2, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-26');
INSERT INTO `visits` VALUES (3, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', '2025-02-26');

SET FOREIGN_KEY_CHECKS = 1;
