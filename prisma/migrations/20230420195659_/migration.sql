-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "discount" DECIMAL NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
