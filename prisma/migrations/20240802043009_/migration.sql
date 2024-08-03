/*
  Warnings:

  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagArticle` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tags` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `TagArticle` DROP FOREIGN KEY `TagArticle_articleId_fkey`;

-- DropForeignKey
ALTER TABLE `TagArticle` DROP FOREIGN KEY `TagArticle_tagId_fkey`;

-- AlterTable
ALTER TABLE `Article` ADD COLUMN `tags` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Tag`;

-- DropTable
DROP TABLE `TagArticle`;
