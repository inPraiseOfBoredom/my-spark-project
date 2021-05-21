<template>
    <div>
    <div class="flex justify-center space-x-4 fixed bg-yellow-100 border-b-2 border-red-300 w-screen left-0 top-0 p-4 ">

      <router-link
        :to="{ name: 'Dashboard' }"
        v-if="showDashboardButton"
        class="font-medium text-gray-700 px-1 py-3  text-base hover:underline appearance-none focus:outline-none"
      >
        Back to dashboard
      </router-link>

      <router-link
        :to="{ name: 'CreateNote' }"
        class="font-medium text-gray-700 px-1 py-3  text-base hover:underline appearance-none focus:outline-none"
      >
        Take a note
      </router-link>

      <div class="text-gray-700 px-1 py-3  text-base hover:underline appearance-none focus:outline-none">
      <button @click="logout" class="font-medium">
        Logout
      </button>
    </div>

    </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Navigation", 
        data() {
            return {
               
            }
        },
       props: {
           showDashboardButton: {
                type: Boolean,
                default: true


           }
       },
        
        
        methods: {
            logout() {
      this.$store.commit("CLEAR");
      this.$router.push({ name: "Login" });
    },

    
        }
        
    })
</script>

<style scoped>

</style>