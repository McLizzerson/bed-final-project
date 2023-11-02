import { PrismaClient } from "@prisma/client";

const getHostById = async (id) => {
  const prisma = new PrismaClient();

  const host = await prisma.host.findUnique({
    where: {
      id: id,
    },
  });

  //   implement error handling
  if (!host) {
    console.log("oops! user not found");
  }

  return host;
};

export default getHostById;
