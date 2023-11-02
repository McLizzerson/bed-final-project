import { PrismaClient } from "@prisma/client";

const deleteHost = async (id) => {
  const prisma = new PrismaClient();

  const deletedHost = await prisma.host.deleteMany({
    where: {
      id: id,
    },
  });

  //   implement error handling!
  if (!deletedHost || deletedHost.count === 0) {
    console.log("oops host not found?");
  }
  return id;
};

export default deleteHost;
