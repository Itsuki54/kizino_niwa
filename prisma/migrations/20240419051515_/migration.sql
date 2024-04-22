/*
  Warnings:

  - You are about to drop the `_ArticleToBookmark` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ArticleToTag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bookmarkId` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tagId` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_ArticleToBookmark` DROP FOREIGN KEY `_ArticleToBookmark_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ArticleToBookmark` DROP FOREIGN KEY `_ArticleToBookmark_B_fkey`;

-- DropForeignKey
ALTER TABLE `_ArticleToTag` DROP FOREIGN KEY `_ArticleToTag_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ArticleToTag` DROP FOREIGN KEY `_ArticleToTag_B_fkey`;

-- AlterTable
ALTER TABLE `Article` ADD COLUMN `bookmarkId` VARCHAR(191) NOT NULL,
    ADD COLUMN `tagId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_ArticleToBookmark`;

-- DropTable
DROP TABLE `_ArticleToTag`;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_bookmarkId_fkey` FOREIGN KEY (`bookmarkId`) REFERENCES `Bookmark`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
