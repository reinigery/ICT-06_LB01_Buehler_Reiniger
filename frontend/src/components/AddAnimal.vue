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
    <label class="label">Choose a species</label>
      <div class="control">
      <select class="input">
        <option value="dog">dog</option>
        <option value="cat">cat</option>
      </select>
      </div>
    </div>
 
    <div class="field">
      <label class="label">Year of Birth</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Year of Birth"
          v-model="yearofbirth"
        />
      </div>
    </div>

    <div class="field">
    <label class="label">Castrated</label>
      <div class="control">
      <select class="input">
        <option value="dog">Yes</option>
        <option value="cat">No</option>
      </select>
      </div>
    </div>

    <div class="field">
      <label class="label">Character</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Character"
          v-model="animalCharacter"
        />
      </div>
    </div>
 
    <div class="control">
      <button class="button is-success" @click="saveProduct">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddProduct",
  data() {
    return {
      productName: "",
      productPrice: "",
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/products", {
          product_name: this.productName,
          product_price: this.productPrice,
        });
        this.productName = "";
        this.productPrice = "";
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