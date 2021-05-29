<template>
  <div>
    <div class="field">
      <label class="label">Animal Name</label>
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
      <label class="label">Price</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="animalPrice"
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
      animalPrice: "",
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
        this.animalPrice = response.data.animal_price;
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
            animal_name: this.animalName,
            animal_price: this.animalPrice,
          }
        );
        this.animalName = "";
        this.animalPrice = "";
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
