// import connection
import db from "../config/database.js";
 
// Get All Animals
export const getAnimals = (result) => {
    db.query("SELECT * FROM animals", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Animal
export const getAnimalById = (id, result) => {
    db.query("SELECT * FROM animals WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Animal to Database
export const insertAnimal = (data, result) => {
    db.query("INSERT INTO animals SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Animal to Database
export const updateAnimalById = (data, id, result) => {
    db.query("UPDATE animals SET animalName = ?, animalSpecies = ?, animalYearofbirth = ?, animalCastrated = ?, animalCharacter = ? WHERE id = ?", [data.animalName, data.animalSpecies, data.animalYearofbirth, data.animalCastrated, data.animalCharacter, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Animal to Database
export const deleteAnimalById = (id, result) => {
    db.query("DELETE FROM animals WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
