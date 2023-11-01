/*
  Warnings:

  - You are about to drop the `Amenitiy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AmenitiyToProperty` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Amenitiy`;

-- DropTable
DROP TABLE `_AmenitiyToProperty`;

-- CreateTable
CREATE TABLE `Amenity` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AmenityToProperty` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AmenityToProperty_AB_unique`(`A`, `B`),
    INDEX `_AmenityToProperty_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
