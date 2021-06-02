<template>
  <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Animal Name"
          v-model="animalName"
        />
      </div>
    </div>  

     <div class="field">
      <label class="label">Species</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="dog or cat"
          v-model="animalSpecies"
        />
      </div>
    </div>  
 
 <div class="field">
      <label class="label">Year of Birth</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="jjjj"
          v-model="animalYearofbirth"
        />
      </div>
    </div>  

 <div class="field">
      <label class="label">Castrated</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="yes or no"
          v-model="animalCastrated"
        />
      </div>
    </div>  

    <div class="field">
      <label class="label">Character</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="describe here the animals character"
          v-model="animalCharacter"
        />
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="saveAnimal">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddAnimal",
  data() {
    return {
      animalName: "",
      animalSpecies: "",
      animalYearofbirth: "",
      animalCastrated: "",
      animalCharacter: "",
    };
  },
  methods: {
    // Add New Animal
    async saveAnimal() {
      try {
        await axios.post("http://localhost:5000/animals", {
          animalName: this.animalName,
          animalSpecies: this.animalSpecies,
          animalYearofbirth: this.animalYearofbirth,
          animalCastrated: this.animalCastrated,
          animalCharacter: this.animalCharacter,
        });
        this.animalName = "";
        this.animalSpecies = "";
        this.animalYearofbirth = "";
        this.animalCastrated = "";
        this.animalCharacter = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>