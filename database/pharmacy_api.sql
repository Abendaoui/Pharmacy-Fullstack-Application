-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 22, 2024 at 10:41 PM
-- Server version: 8.0.31
-- PHP Version: 8.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pharmacy_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `street_address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zip_code` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `user_id`, `street_address`, `city`, `state`, `zip_code`, `deleted`, `created_at`, `updated_at`) VALUES
(2, 2, 'GH 26 IMM 175 APPT 06', 'Tamesna', 'Temara-Sekhirat', '12120', 0, '2024-05-18 18:43:16', '2024-05-18 18:43:16'),
(3, 8, 'Rue Hay Nahda', 'Rabat', 'Rabat-Sale-Kenitra', '12125', 0, '2024-05-19 21:21:55', '2024-05-19 21:21:55'),
(4, 8, 'Annajah 01', 'Tamesna', 'Temara-Sekhirat', '12120', 0, '2024-05-19 21:23:17', '2024-05-19 21:23:17'),
(5, 7, 'Old  Street', 'Fes', 'Fes-Meknes', '14520', 0, '2024-05-20 03:34:52', '2024-05-20 03:34:52');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint UNSIGNED NOT NULL,
  `brand_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand_desc` longtext COLLATE utf8mb4_unicode_ci,
  `brand_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `brand_name`, `brand_desc`, `brand_image`, `deleted`, `created_at`, `updated_at`) VALUES
(11, 'sanofi', 'Sanofi', '1716125750.jpg', 0, '2024-05-19 12:35:50', '2024-05-19 12:35:50'),
(12, 'johnson&johnson', 'johnson and johnson', '1716125784.png', 0, '2024-05-19 12:36:24', '2024-05-19 12:36:24'),
(14, 'novartis', 'Novartis', '1716125824.png', 0, '2024-05-19 12:37:04', '2024-05-19 12:37:04'),
(15, 'cerave', 'Cerave', '1716125840.png', 0, '2024-05-19 12:37:20', '2024-05-19 12:37:20'),
(16, 'merck', 'Merck', '1716125855.png', 0, '2024-05-19 12:37:35', '2024-05-19 12:37:35'),
(17, 'pfizer', 'Pfizer', '1716125872.png', 0, '2024-05-19 12:37:52', '2024-05-19 12:37:52'),
(18, 'gsk', 'GSK', '1716125890.png', 0, '2024-05-19 12:38:10', '2024-05-19 12:38:10'),
(19, 'nestle', 'Nestle', '1716126006.png', 0, '2024-05-19 12:40:06', '2024-05-19 12:40:06');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `medecine_id` bigint UNSIGNED NOT NULL,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `deleted`, `created_at`, `updated_at`) VALUES
(1, 'Baby Food', 'Food For Kids', 0, '2024-05-18 21:52:26', '2024-05-18 21:52:26'),
(2, 'skincare', 'skincare Medecines', 0, '2024-05-18 22:20:53', '2024-05-18 22:20:53'),
(3, 'cardiology', 'cardiology', 0, '2024-05-18 22:30:52', '2024-05-18 22:30:52'),
(4, 'neurology', 'neurology', 0, '2024-05-18 22:31:38', '2024-05-18 22:31:38'),
(5, 'pediatrics', 'pediatrics', 0, '2024-05-18 22:32:05', '2024-05-18 22:32:05'),
(6, 'nephrology', 'nephrology', 0, '2024-05-18 22:32:28', '2024-05-18 22:32:28'),
(7, 'urology', 'urology', 0, '2024-05-18 22:32:46', '2024-05-18 22:32:46'),
(8, 'orthopedics', 'orthopedics', 0, '2024-05-18 22:33:11', '2024-05-18 22:33:11'),
(9, 'vitamin', 'Vitamin', 0, '2024-05-18 22:33:37', '2024-05-18 22:33:37');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `medecine_id` bigint UNSIGNED NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `medecines`
--

CREATE TABLE `medecines` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `brand_id` bigint UNSIGNED NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `medecine_image` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medecines`
--

INSERT INTO `medecines` (`id`, `name`, `slug`, `category_id`, `brand_id`, `description`, `price`, `medecine_image`, `quantity`, `deleted`, `created_at`, `updated_at`) VALUES
(5, 'cerave oil', 'cerave-oil', 2, 15, 'Cerave Oil', '100.00', '1716126067.webp', 48, 0, '2024-05-19 12:41:07', '2024-05-19 12:41:07'),
(6, 'cerave acne', 'cerave-acne', 2, 15, 'Cerave Acne', '300.00', '1716126113.jpg', 20, 0, '2024-05-19 12:41:53', '2024-05-19 12:41:53'),
(7, 'cerave blue', 'cerave-blue', 2, 15, 'Cerave Blue', '400.00', '1716126154.WEB', 30, 0, '2024-05-19 12:42:34', '2024-05-19 12:42:34'),
(8, 'cerave gel', 'cerave-gel', 2, 15, 'Cerave Gel', '600.00', '1716126183.webp', 20, 0, '2024-05-19 12:43:03', '2024-05-19 12:43:03'),
(9, 'cerave cream', 'cerave-cream', 2, 15, 'Cerave Cream', '200.00', '1716126235.webp', 0, 0, '2024-05-19 12:43:55', '2024-05-19 12:43:55'),
(10, 'cerave cleanser', 'cerave-cleanser', 2, 15, 'cerave cleanser', '499.00', '1716126283.webp', 50, 0, '2024-05-19 12:44:43', '2024-05-19 12:44:43'),
(11, 'cerave reniewing', 'cerave-reniewing', 2, 15, 'cerave reniewing', '399.00', '1716126334.jpeg', 40, 0, '2024-05-19 12:45:34', '2024-05-19 12:45:34'),
(12, 'cerave blue cream', 'cerave-blue-cream', 2, 15, 'cerave blue cream', '160.00', '1716126395.jpeg', 15, 0, '2024-05-19 12:46:35', '2024-05-19 12:46:35'),
(13, 'cerelac', 'cerelac', 1, 19, 'Cerelac', '100.00', '1716127513.jpg', 0, 0, '2024-05-19 13:05:13', '2024-05-19 13:05:13'),
(14, 'nido', 'nido', 1, 19, 'Nido', '150.00', '1716127552.jpg', 120, 0, '2024-05-19 13:05:52', '2024-05-19 13:05:52'),
(15, 'mini cerelac', 'mini-cerelac', 1, 19, 'Mini Cerelac', '50.00', '1716127628.jpg', 250, 0, '2024-05-19 13:07:08', '2024-05-19 13:07:08'),
(16, 'cookie crisp', 'cookie-crisp', 1, 19, 'cookie crisp', '60.00', '1716127671.jpeg', 100, 0, '2024-05-19 13:07:51', '2024-05-19 13:07:51'),
(17, 'cookie crisp milk', 'cookie-crisp-milk', 1, 19, 'cookie crisp milk flavor', '40.00', '1716127786.jpg', 100, 0, '2024-05-19 13:09:46', '2024-05-19 13:09:46'),
(18, 'nestum', 'nestum', 1, 19, 'Nestum Nestle', '120.00', '1716127823.webp', 10, 0, '2024-05-19 13:10:23', '2024-05-19 13:10:23'),
(19, 'nestum avena', 'nestum-avena', 1, 19, 'nestum avena', '80.00', '1716127873.webp', 0, 0, '2024-05-19 13:11:13', '2024-05-19 13:11:13'),
(20, 'ramadan nestle', 'ramadan-nestle', 1, 19, 'Ramadan Nestle', '150.00', '1716127907.jpg', 10, 0, '2024-05-19 13:11:47', '2024-05-19 13:11:47'),
(21, 'multiple vitamin', 'multiple-vitamin', 9, 11, 'multiple vitamin', '100.00', '1716127970.jpg', 25, 0, '2024-05-19 13:12:50', '2024-05-19 13:12:50'),
(22, 'anti-fatigue vitamin', 'anti-fatigue-vitamin', 9, 12, 'anti-fatigue vitamin', '200.00', '1716128019.jpg', 10, 0, '2024-05-19 13:13:39', '2024-05-19 13:13:39'),
(23, 'biotin', 'biotin', 9, 14, 'Biotin', '150.00', '1716128050.jpg', 20, 0, '2024-05-19 13:14:10', '2024-05-19 13:14:10'),
(24, 'evo biotin', 'evo-biotin', 9, 16, 'evo biotin', '140.00', '1716128082.jpg', 10, 0, '2024-05-19 13:14:42', '2024-05-19 13:14:42'),
(25, 'size up vitamin', 'size-up-vitamin', 9, 17, 'size up vitamin', '150.00', '1716128111.webp', 20, 0, '2024-05-19 13:15:11', '2024-05-19 13:15:11'),
(26, 'golden biotin', 'golden-biotin', 9, 18, 'golden biotin', '399.00', '1716128148.webp', 5, 0, '2024-05-19 13:15:48', '2024-05-19 13:15:48'),
(27, 'zinga vita biotin', 'zinga-vita-biotin', 3, 17, 'zinga vita biotin', '550.00', '1716128202.webp', 10, 0, '2024-05-19 13:16:42', '2024-05-19 13:16:42');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_05_06_121441_create_personal_access_tokens_table', 1),
(5, '2024_05_15_065940_create_addresses_table', 1),
(6, '2024_05_15_071152_create_brands_table', 1),
(7, '2024_05_15_071246_create_categories_table', 1),
(8, '2024_05_15_071359_create_medecines_table', 1),
(9, '2024_05_15_071809_create_orders_table', 1),
(10, '2024_05_15_072253_create_order_details_table', 1),
(11, '2024_05_15_073209_create_favorites_table', 1),
(12, '2024_05_15_073822_create_carts_table', 1),
(13, '2024_05_15_074005_create_shippings_table', 1),
(14, '2024_05_15_074330_create_returns_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `address_id` bigint UNSIGNED NOT NULL,
  `order_date` datetime NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `order_status` enum('pending','accepted','shipped','canceled','returned','delivered','paid') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `payment_method` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `address_id`, `order_date`, `total_price`, `order_status`, `payment_method`, `deleted`, `created_at`, `updated_at`) VALUES
(1, 8, 4, '2024-05-19 22:43:28', '1997.00', 'delivered', 'paypal', 0, '2024-05-19 21:43:28', '2024-05-19 21:43:28'),
(2, 7, 5, '2024-05-20 04:36:49', '330.00', 'canceled', 'card', 0, '2024-05-20 03:36:49', '2024-05-22 15:57:32'),
(3, 8, 3, '2024-05-20 04:43:42', '560.00', 'accepted', 'paypal', 0, '2024-05-20 03:43:42', '2024-05-20 03:43:42'),
(4, 8, 4, '2024-05-20 04:53:52', '240.00', 'canceled', 'paypal', 0, '2024-05-20 03:53:52', '2024-05-20 03:53:52'),
(5, 8, 3, '2024-05-20 04:54:33', '1050.00', 'returned', 'paypal', 0, '2024-05-20 03:54:33', '2024-05-20 03:54:33'),
(6, 8, 3, '2024-05-20 05:25:28', '200.00', 'delivered', 'card', 0, '2024-05-20 04:25:28', '2024-05-20 04:25:28'),
(7, 7, 5, '2024-05-22 14:32:53', '200.00', 'returned', 'paypal', 0, '2024-05-22 13:32:53', '2024-05-22 16:20:47'),
(8, 7, 5, '2024-05-22 16:58:35', '549.00', 'canceled', 'card', 0, '2024-05-22 15:58:35', '2024-05-22 16:00:19'),
(9, 7, 5, '2024-05-22 17:22:37', '1309.00', 'accepted', 'paypal', 0, '2024-05-22 16:22:37', '2024-05-22 21:37:42');

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `medecine_id` bigint UNSIGNED NOT NULL,
  `quantity` int NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `order_id`, `medecine_id`, `quantity`, `price`, `deleted`, `created_at`, `updated_at`) VALUES
(1, 1, 26, 1, '399.00', 0, '2024-05-19 21:43:28', '2024-05-19 21:43:28'),
(2, 1, 11, 2, '399.00', 0, '2024-05-19 21:43:28', '2024-05-19 21:43:28'),
(3, 1, 8, 1, '600.00', 0, '2024-05-19 21:43:28', '2024-05-19 21:43:28'),
(4, 1, 20, 1, '150.00', 0, '2024-05-19 21:43:28', '2024-05-19 21:43:28'),
(5, 2, 12, 1, '160.00', 0, '2024-05-20 03:36:49', '2024-05-20 03:36:49'),
(6, 2, 18, 1, '120.00', 0, '2024-05-20 03:36:49', '2024-05-20 03:36:49'),
(7, 3, 19, 2, '80.00', 0, '2024-05-20 03:43:42', '2024-05-20 03:43:42'),
(8, 3, 15, 1, '50.00', 0, '2024-05-20 03:43:42', '2024-05-20 03:43:42'),
(9, 3, 6, 1, '300.00', 0, '2024-05-20 03:43:42', '2024-05-20 03:43:42'),
(10, 4, 17, 1, '40.00', 0, '2024-05-20 03:53:52', '2024-05-20 03:53:52'),
(11, 4, 23, 1, '150.00', 0, '2024-05-20 03:53:52', '2024-05-20 03:53:52'),
(12, 5, 7, 1, '400.00', 0, '2024-05-20 03:54:33', '2024-05-20 03:54:33'),
(13, 5, 8, 1, '600.00', 0, '2024-05-20 03:54:33', '2024-05-20 03:54:33'),
(14, 6, 14, 1, '150.00', 0, '2024-05-20 04:25:28', '2024-05-20 04:25:28'),
(15, 7, 20, 1, '150.00', 0, '2024-05-22 13:32:53', '2024-05-22 13:32:53'),
(16, 8, 10, 1, '499.00', 0, '2024-05-22 15:58:35', '2024-05-22 15:58:35'),
(17, 9, 26, 1, '399.00', 0, '2024-05-22 16:22:37', '2024-05-22 16:22:37'),
(18, 9, 7, 2, '400.00', 0, '2024-05-22 16:22:37', '2024-05-22 16:22:37'),
(19, 9, 16, 1, '60.00', 0, '2024-05-22 16:22:37', '2024-05-22 16:22:37');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', '8d1f305f8793d8d1971752d6e196718c9f98659cb2ca0945d2eae56759fdcb4b', '[\"*\"]', '2024-05-18 18:40:19', NULL, '2024-05-18 18:27:35', '2024-05-18 18:40:19'),
(2, 'App\\Models\\User', 1, 'auth_token', '94bdcca4d7256b17fabb69505304befeff4aa92825e6f64f0b7c2e5ae3fe067d', '[\"*\"]', '2024-05-18 18:41:27', NULL, '2024-05-18 18:29:57', '2024-05-18 18:41:27'),
(3, 'App\\Models\\User', 2, 'auth_token', '27b71e1abfd8663be7d03be3f0a6a1cf6acac5254ef99674d1879c3b50cc8871', '[\"*\"]', '2024-05-18 18:43:20', NULL, '2024-05-18 18:42:37', '2024-05-18 18:43:20'),
(5, 'App\\Models\\User', 3, 'auth_token', '5202e1f51378c82681ad4525f02fe5e8cea94d0d6a6132622dbcc9096f92176c', '[\"*\"]', '2024-05-19 11:12:11', NULL, '2024-05-18 19:33:59', '2024-05-19 11:12:11'),
(21, 'App\\Models\\User', 2, 'auth_token', '379a1434e62aa86b91697e5a00021a46e4f243e05d34280d5b476c21142917d8', '[\"*\"]', '2024-05-22 21:00:50', NULL, '2024-05-22 14:24:04', '2024-05-22 21:00:50');

-- --------------------------------------------------------

--
-- Table structure for table `returns`
--

CREATE TABLE `returns` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `return_date` datetime NOT NULL,
  `reason` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `returns`
--

INSERT INTO `returns` (`id`, `order_id`, `user_id`, `return_date`, `reason`, `deleted`, `created_at`, `updated_at`) VALUES
(1, 7, 7, '2024-05-22 17:20:47', '[object Object]', 0, '2024-05-22 16:20:47', '2024-05-22 16:20:47');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shippings`
--

CREATE TABLE `shippings` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `address_id` bigint UNSIGNED NOT NULL,
  `shipping_method` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_status` enum('pending','accepted','canceled','returned','delivered') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `shipping_date` datetime DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('customer','admin') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `email_verified_at`, `password`, `phone`, `role`, `deleted`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Admin Admin', 'admin@gmail.com', NULL, '$2y$12$6mC88TFi6Zuy72nAFBkHiOePeidzDcSs6KZeZaGUqrRTGgmQIJB/2', '+212 784956220', 'admin', 0, NULL, '2024-05-18 18:42:37', '2024-05-18 18:42:37'),
(3, 'Test Admin', 'admintest@gmail.com', NULL, '$2y$12$aiwpeKotHLEqzjR4VeOYBeZC/xCPgT3KRPbH9jB7doBhjLsZpN2pm', '+212 641296176', 'admin', 0, NULL, '2024-05-18 19:33:59', '2024-05-18 19:33:59'),
(4, 'New Admin', 'newadmin@gmail.com', NULL, '$2y$12$cEZbGk89NMZog/Zb1Nt39elyANHREMkM3SS6VuebAhq7bSi8vxg9.', '+212651264875', 'admin', 0, NULL, '2024-05-18 21:10:50', '2024-05-18 21:10:50'),
(5, 'Eren Yeger', 'erenyeger@gmail.com', NULL, '$2y$12$THq/.o5xwPQJvZrCOKa8HuGf7.q7R3TIinY0x9/ITPOOPC9KgSifK', '+212785941565', 'admin', 0, NULL, '2024-05-18 21:12:16', '2024-05-18 21:12:16'),
(6, 'Guest Admin', 'guest@gmail.com', NULL, '$2y$12$A5oODf920WCb/HEAgxXce.YtRB1wxf.BanLLHMtomUybWvJDtp88C', '+212756947512', 'admin', 0, NULL, '2024-05-18 21:13:48', '2024-05-18 21:13:48'),
(7, 'User One', 'userone@gmail.com', NULL, '$2y$12$/gtEQ3XN1Cgn2aJDVOD4g.kabiXu3EE9TGu4Q1HGy3YZp6zl5k/RK', '+212752614296', 'customer', 0, NULL, '2024-05-18 21:24:15', '2024-05-18 21:24:15'),
(8, 'User Two', 'usertwo@gmail.com', NULL, '$2y$12$2UpG9FQleIYSrzeWnkGOe.0l4G0N2rhzDOaX16J5eHExwG4g2Ab0G', NULL, 'customer', 0, NULL, '2024-05-18 21:24:31', '2024-05-18 21:24:31'),
(9, 'User Three', 'userthree@gmail.com', NULL, '$2y$12$xvegcszBLVwzXhsnfhYVE.MH.qKKb3N3Wc/SGeZp676uqq4kvaVw.', NULL, 'customer', 0, NULL, '2024-05-18 21:24:41', '2024-05-18 21:24:41'),
(10, 'User Four', 'userfour@gmail.com', NULL, '$2y$12$9/6EXWhGDZBmrMWBYp9eeuR/qonagu20cfMSjEkyxfsctyKCwR4gG', NULL, 'customer', 0, NULL, '2024-05-18 21:24:53', '2024-05-18 21:24:53'),
(11, 'User Five', 'userfive@gmail.com', NULL, '$2y$12$/N8Di5yZzdJjMudHZqFmR.m4LRzwEwtY0ssHKmuTFgtfv7aGvkoYS', NULL, 'customer', 0, NULL, '2024-05-18 21:25:04', '2024-05-18 21:25:04'),
(12, 'User Six', 'usersix@gmail.com', NULL, '$2y$12$Yu4DRO96EvJ2uFHG7YnOHeprOGA1uSf.F9T1wZqZsyrJ4i8dY6032', NULL, 'customer', 0, NULL, '2024-05-18 21:25:19', '2024-05-18 21:25:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `addresses_user_id_foreign` (`user_id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_user_id_foreign` (`user_id`),
  ADD KEY `carts_medecine_id_foreign` (`medecine_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `favorites_user_id_foreign` (`user_id`),
  ADD KEY `favorites_medecine_id_foreign` (`medecine_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medecines`
--
ALTER TABLE `medecines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `medecines_category_id_foreign` (`category_id`),
  ADD KEY `medecines_brand_id_foreign` (`brand_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`),
  ADD KEY `orders_address_id_foreign` (`address_id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_details_order_id_foreign` (`order_id`),
  ADD KEY `order_details_medecine_id_foreign` (`medecine_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `returns`
--
ALTER TABLE `returns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `returns_order_id_foreign` (`order_id`),
  ADD KEY `returns_user_id_foreign` (`user_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `shippings`
--
ALTER TABLE `shippings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shippings_order_id_foreign` (`order_id`),
  ADD KEY `shippings_address_id_foreign` (`address_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medecines`
--
ALTER TABLE `medecines`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `returns`
--
ALTER TABLE `returns`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `shippings`
--
ALTER TABLE `shippings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_medecine_id_foreign` FOREIGN KEY (`medecine_id`) REFERENCES `medecines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_medecine_id_foreign` FOREIGN KEY (`medecine_id`) REFERENCES `medecines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favorites_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `medecines`
--
ALTER TABLE `medecines`
  ADD CONSTRAINT `medecines_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `medecines_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_medecine_id_foreign` FOREIGN KEY (`medecine_id`) REFERENCES `medecines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_details_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `returns`
--
ALTER TABLE `returns`
  ADD CONSTRAINT `returns_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `returns_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `shippings`
--
ALTER TABLE `shippings`
  ADD CONSTRAINT `shippings_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `shippings_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
