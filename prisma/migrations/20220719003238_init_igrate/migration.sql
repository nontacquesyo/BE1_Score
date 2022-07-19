-- CreateTable
CREATE TABLE "Score" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);
