<template>
  <div class="p-4 pt-8 max-w-screen-sm mx-auto">
    <div class="flex justify-center">
      <router-link
        :to="{ name: 'CreateNote' }"
        class="font-medium text-indigo-500 px-8 py-1 border-2 border-indigo-400 rounded-md text-base hover:bg-indigo-50  appearance-none focus:outline-none"
      >
        Take a note
      </router-link>
    </div>

    <div>
      <input type="text" v-model="keyword" placeholder="Search keyword.."
     

      />
        <label>

        </label>
       

    </div>
    <router-link
      class="block border-b py-4"
      :to="{ name: 'Note', params: { id: note.id } }"
      v-for="note in notes"
      :key="note.id"
      
    >
      <div>
        <header class="mb-2">
          <h3 class="text-xs text-indigo-500">
            {{ note.collection }}
          </h3>
          <h2 class="text-lg font-medium">{{ note.title }}</h2>
        </header>
        <p>{{ note.content }}</p>
        <p class="text-sm text-gray-400 mt-2 text-right">
          {{ new Date(note.createdAt).toLocaleDateString() }}
        </p>
        <button @click.prevent="deleteIt(note.id)"
          class="font-medium text-red-600 px-4 py-1 border-2 border-red-600 rounded-md text-base hover:bg-indigo-50  appearance-none focus:outline-none ml-8"
          >
          Delete
        </button>
      </div></router-link
    >
    <div class="flex mt-8 justify-end">
      <button @click="logout" class="text-sm hover:text-indigo-600">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Dashboard",
  data() {
    return {
      notes: [],
      keyword: ""
    };
  },
  computed: {
    searchKeyword() {
      return this.notes.filter(note =>
      {return note.content.includes(this.keyword)
      })
    }
  },

   mounted() {
    this.getNotes()
  },
  methods: {

  

    async deleteIt(id) {

              const response = await axios.delete(`http://localhost:3000/notes/${id}`);
              console.log(response);
              this.getNotes();
              
          },
    
    logout() {
      this.$store.commit("CLEAR");
      this.$router.push({ name: "Login" });
    },

    async getNotes() {
       
     const response = await axios.get("http://localhost:3000/notes");
    this.notes = response.data;
  },
    
  }, 
});
</script>
