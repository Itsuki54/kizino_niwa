/*
  Warnings:

  - You are about to drop the `FavoriteTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `FavoriteTag` DROP FOREIGN KEY `FavoriteTag_tagId_fkey`;

-- DropForeignKey
ALTER TABLE `FavoriteTag` DROP FOREIGN KEY `FavoriteTag_userId_fkey`;

-- DropTable
DROP TABLE `FavoriteTag`;
