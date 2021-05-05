<template>
  <div class="grid place-items-center min-h-screen  bg-gradient-to-b from-red-300 to-gray-400">
    <h1 class="text-6xl text-pink-50 font-normal underline">Spark</h1>
    <div class="bg-gray-400 uppercase text-pink-100 p-4 ring-pink-100 ring-4 hover:opacity-80">
      <button>Click me</button>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from "vue";

export default Vue.extend({
  name: "Dashboard",
});
</script>
