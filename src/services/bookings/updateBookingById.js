import { PrismaClient } from "@prisma/client";

const updateBookingById = async (
  id,
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  const prisma = new PrismaClient();

  const updatedBooking = await prisma.booking.updateMany({
    where: {
      id: id,
    },
    data: {
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus,
    },
  });

  //   implement error handling
  if (!updatedBooking || updatedBooking.count === 0) {
    console.log("couldn't find this booking");
  }

  return {
    message: `Booking with id: ${id}, was updated succesfully!`,
  };
};

export default updateBookingById;
