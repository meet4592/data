-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "rollNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students_rollNumber_key" ON "students"("rollNumber");
