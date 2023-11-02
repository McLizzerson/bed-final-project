import { PrismaClient } from "@prisma/client";

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

  //    implement error handling
  // id not found
  if (!updatedHost || updatedHost.count === 0) {
    console.log("something went wrong!");
  }
  return {
    message: `Host with id: ${id}, was updated succesfully!`,
  };
};

export default updateHostById;
