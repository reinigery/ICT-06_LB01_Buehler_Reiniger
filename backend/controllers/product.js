// Import function from Animal Model
import { getAnimals, getAnimalById, insertAnimal, updateAnimalById, deleteAnimalById } from "../models/animalModel.js";
 
// Get All Animals
export const showAnimals = (req, res) => {
    getAnimals((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Animal 
export const showAnimalById = (req, res) => {
    getAnimaltById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Animal
export const createAnimal = (req, res) => {
    const data = req.body;
    insertAnimal(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Animal
export const updateAnimal = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateAnimalById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Animal
export const deleteAnimal = (req, res) => {
    const id = req.params.id;
    deleteAnimalById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
