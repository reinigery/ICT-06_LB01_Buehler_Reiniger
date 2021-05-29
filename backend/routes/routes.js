// import express
import express from "express";

// import function from controller
import { showAnimals, showAnimalById, createAnimal, updateAnimal, deleteAnimal } from "../controllers/animal.js";

// init express router
const router = express.Router();

// Get All Animal
router.get('/animals', showAnimals);

// Get Single Animal
router.get('/animals/:id', showAnimalById);

// Create New Animal
router.post('/animals', createAnimal);

// Update Animal
router.put('/animals/:id', updateAnimal);

// Delete Animal
router.delete('/animals/:id', deleteAnimal);

// export default router
export default router;