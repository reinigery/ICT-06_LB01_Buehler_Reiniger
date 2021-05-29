<template>
  <div>

    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="animal name"
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
          placeholder="cat or dog"
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
      <button class="button is-success" @click="updateAnimal">UPDATE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditAnimal",
  data() {
    return {
      animalName: "",
      animalSpecies: "",
      animalYearofbirth: "",
      animalCastrated: "",
      animalCharacter: ""
    };
  },
  created: function () {
    this.getAnimalById();
  },
  methods: {
    // Get Animal By Id
    async getAnimaltById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/animals/${this.$route.params.id}`
        );
        this.animalName = response.data.animal_name;
        this.animalSpecies = response.data.animal_species;
        this.animalYearofbirth = response.data.animal_yearofbirth;
        this.animalCastrated = response.data.animal_castrated;
        this.animalCharacter = response.data.animal_character;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update animal
    async updateAnimal() {
      try {
        await axios.put(
          `http://localhost:5000/animals/${this.$route.params.id}`,
          {
            animalName: this.animalName,
            animalSpecies: this.animalSpecies,
            animalYearofbirth: this.animalYearofbirth,
            animalCastrated: this.animalCastrated,
            animalCharacter: this.animalCharacter,
          }
        );
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
