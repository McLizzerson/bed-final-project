import { PrismaClient } from "@prisma/client";

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

  console.log(updatedUser);

  //    implement error handling
  // id not found
  if (!updatedUser || updatedUser.count === 0) {
    console.log("something went wrong!");
  }
  return {
    message: `User with id: ${id}, was updated succesfully!`,
  };
};

export default updateUserById;
