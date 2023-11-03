import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const updateHostById = async (
  id,
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture,
  aboutMe
) => {
  const prisma = new PrismaClient();

  const updatedHost = await prisma.host.updateMany({
    where: {
      id: id,
    },
    data: {
      name,
      username,
      password,
      email,
      phoneNumber,
      profilePicture,
      aboutMe,
    },
  });

  if (!updatedHost || updatedHost.count === 0) {
    throw new NotFoundError("host", id);
  }
  return {
    message: `Host with id: ${id}, was updated succesfully!`,
  };
};

export default updateHostById;
