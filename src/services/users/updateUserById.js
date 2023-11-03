import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const updateUserById = async (
  id,
  username,
  password,
  name,
  email,
  phoneNumber,
  profilePicture
) => {
  const prisma = new PrismaClient();

  const updatedUser = await prisma.user.updateMany({
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
    },
  });

  if (!updatedUser || updatedUser.count === 0) {
    throw new NotFoundError("user", id);
  }
  return {
    message: `User with id: ${id}, was updated succesfully!`,
  };
};

export default updateUserById;
