import express from "express";
import getAmenities from "../services/amenities/getAmenities.js";
import createAmenity from "../services/amenities/createAmenity.js";
import getAmenityById from "../services/amenities/getAmenityById.js";
import updateAmenityById from "../services/amenities/updateAmenityById.js";
import deleteAmenity from "../services/amenities/deleteAmenity.js";

const amenityRouter = express.Router();

amenityRouter.get("/", async (req, res, next) => {
  try {
    const amenities = await getAmenities();
    res.status(200).json(amenities);
  } catch (error) {
    next(error);
  }
});

amenityRouter.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    const newAmenity = await createAmenity(name);
    res.status(201).json(newAmenity);
  } catch (error) {
    next(error);
  }
});

amenityRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const amenity = await getAmenityById(id);
    res.status(200).json(amenity);
  } catch (error) {
    next(error);
  }
});

amenityRouter.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedAmenity = await updateAmenityById(id, name);
    res.status(200).json(updatedAmenity);
  } catch (error) {
    next(error);
  }
});

amenityRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAmenity = await deleteAmenity(id);
    res.status(200).json({
      message: `Amenity with id:${deletedAmenity}, has been deleted succesfully!`,
    });
  } catch (error) {
    next(error);
  }
});

export default amenityRouter;
