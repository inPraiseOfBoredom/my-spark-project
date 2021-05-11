<template>
  <div class="py-6 px-4 max-w-screen-sm mx-auto">
    <header class="mb-4">
      <h2 class="text-indigo-500 text-lg">{{ note.collection }}</h2>
      <h1 class="text-4xl font-medium">{{ note.title }}</h1>
    </header>
    <p class="leading-relaxed text-lg">{{ note.content }}</p>
    <div class="text-sm text-right text-gray-400 mt-4">
      {{ new Date(note.createdAt).toLocaleDateString() }}
    </div>

     <router-link
          class="font-medium text-indigo-500 px-8 py-1 border-2 border-indigo-400 rounded-md text-base hover:bg-indigo-50  appearance-none focus:outline-none"
          :to="{ 
            name: 'EditNote', 
            params: { 
              
            id: $route.params.id}
          }

          " 
        >
          Edit
        </router-link>

         <button @click="deleteIt"
          class="font-medium text-red-600 px-8 py-1 border-2 border-red-600 rounded-md text-base hover:bg-indigo-50  appearance-none focus:outline-none ml-8"
          >
          Delete
        </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      note: {},
    };
  },
  methods: {
    async deleteIt() {
          const id = this.$route.params.id;
              const response = await axios.delete("http://localhost:3000/notes/" + id)
              console.log(response);
                this.$router.push({ name: "Dashboard" });
          }
  },
  async mounted() {
    const id = this.$route.params.id;
    const response = await axios.get("http://localhost:3000/notes/" + id);
    this.note = response.data;
  },
});
</script>

<style scoped></style>
