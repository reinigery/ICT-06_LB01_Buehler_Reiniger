<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Animal Name</th>
          <th>Species</th>
          <th>Year of Birth</th>
          <th>Castrated</th>
          <th>Character</th>          
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.animalName }}</td>
          <td>{{ item.animalSpecies }}</td>
          <td>{{ item.animalYearofbirth }}</td>
          <td>{{ item.animalCastrated }}</td>
          <td>{{ item.animalCharacter }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.id } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteAnimal(item.id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AnimalList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getAnimals();
  },
 
  methods: {
    // Get All Animals
    async getAnimals() {
      try {
        const response = await axios.get("http://localhost:5000/animals");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Animal
    async deleteAnimal(id) {
      try {
        await axios.delete(`http://localhost:5000/animals/${id}`);
        this.getAnimals();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>