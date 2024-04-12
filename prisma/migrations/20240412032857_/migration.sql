/*
  Warnings:

  - You are about to drop the column `icon` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Group` DROP COLUMN `icon`,
    ADD COLUMN `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `icon`,
    ADD COLUMN `image` VARCHAR(191) NULL;
