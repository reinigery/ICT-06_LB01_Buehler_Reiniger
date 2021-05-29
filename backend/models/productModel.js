// import connection
import db from "../config/database.js";
 
// Get All Animals
export const getAnimals = (result) => {
    db.query("SELECT * FROM animal", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Animal
export const getAnimaltById = (id, result) => {
    db.query("SELECT * FROM animal WHERE animal_id = ?", [id], (err, results) => {             
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
    db.query("INSERT INTO Animal SET ?", [data], (err, results) => {             
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
    db.query("UPDATE animal SET animal_name = ?, animal_price = ? WHERE animal_id = ?", [data.animal_name, data.animal_price, id], (err, results) => {             
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
    db.query("DELETE FROM animal WHERE animal_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
