/*
  Warnings:

  - You are about to drop the column `articleId` on the `Favorite` table. All the data in the column will be lost.
  - Added the required column `tagId` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Favorite` DROP FOREIGN KEY `Favorite_articleId_fkey`;

-- AlterTable
ALTER TABLE `Favorite` DROP COLUMN `articleId`,
    ADD COLUMN `tagId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
