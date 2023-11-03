import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const deleteHost = async (id) => {
  const prisma = new PrismaClient();

  const deletedHost = await prisma.host.deleteMany({
    where: {
      id: id,
    },
  });

  if (!deletedHost || deletedHost.count === 0) {
    throw new NotFoundError("host", id);
  }
  return id;
};

export default deleteHost;
