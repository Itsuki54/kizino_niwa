/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `token` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_token_key` ON `User`(`token`);
