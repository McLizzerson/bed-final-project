import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import getProperties from "../services/properties/getProperties.js";
import createProperty from "../services/properties/createproperty.js";
import getPropertyById from "../services/properties/getpropertyById.js";
import updatePropertyById from "../services/properties/updatepropertyById.js";
import deleteProperty from "../services/properties/deleteproperty.js";

const propertyRouter = express.Router();

propertyRouter.get("/", async (req, res, next) => {
  try {
    const { location, pricePerNight } = req.query;
    const properties = await getProperties(location, pricePerNight);
    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
});

propertyRouter.post("/", authMiddleware, async (req, res, next) => {
  try {
    const {
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating,
    } = req.body;
    const newProperty = await createProperty(
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating
    );
    res.status(201).json(newProperty);
  } catch (error) {
    next(error);
  }
});

propertyRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const property = await getPropertyById(id);
    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
});

propertyRouter.put("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating,
    } = req.body;
    const updatedProperty = await updatePropertyById(
      id,
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating
    );
    res.status(200).json(updatedProperty);
  } catch (error) {
    next(error);
  }
});

propertyRouter.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProperty = await deleteProperty(id);
    res.status(200).json({
      message: `property with id:${deletedProperty}, has been deleted succesfully!`,
    });
  } catch (error) {
    next(error);
  }
});

export default propertyRouter;
