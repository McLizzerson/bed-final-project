import { PrismaClient } from "@prisma/client";

const deleteUser = async (id) => {
  const prisma = new PrismaClient();

  const deletedUser = await prisma.user.deleteMany({
    where: {
      id: id,
    },
  });

  if (!deletedUser || deletedUser.count === 0) {
    console.log("oops user not found?");
  }
  return id;
};

export default deleteUser;
