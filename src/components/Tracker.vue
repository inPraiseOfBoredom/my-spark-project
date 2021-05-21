<template>
    <div class="mb-12 flex-col place-content-evenly">

     
         
         <div>
      <input 
      class="bg-transparent text-gray-600 border-b-2 border-gray-600 focus:outline-none "
      type="text" placeholder="Set Your goal" v-model="yourHabit
      " />
      <input
          class="bg-transparent text-gray-600 border-b-2 border-gray-600 focus:outline-none mb-8"
       type="number" placeholder="Number" v-model="number" />
       </div>

      <button class="font-mediumfont-medium text-blue-500 px-6 py-2 border-2 border-blue-400  text-base hover:bg-yellow-200  hover:bg-opacity-75  appearance-none focus:outline-none"
      
       @click="trackHabit"> Track your goal!

      </button>

      <div v-for="(habit, index) in habits" :key="index">
          <h4> {{habit.title}} ({{habit.number }})</h4>

       

          <button  @click="completeIt(habit)" v-show="!habit.finished"
          >
              Do it!
          </button>

          <div

              class="m-6" v-show="!habit.finished" >
              {{habit.complete}} / {{habit.initial}}
 

        
        <v-progress-linear value="15"></v-progress-linear>

          </div>
  
  

          
        

          <div v-show="habit.finished"> Complete! </div>
      </div>


    </div>
</template>

<script >
    import Vue from 'vue';
    

    export default Vue.extend({
        name: "Tracker",
        data() {
            return {
                habits: [],
                yourHabit: "",
                number: "",
                initial: 0,
                complete: 0,
                finished: false,  
}
            }
        ,
       methods: {
           trackHabit() {
                 
               if(this.yourHabit && this.number) {
                   this.habits.push({
                       title: this.yourHabit,
                       number: this.number,
                       initial: this.number,
                       complete: 0,
                       finished: false
                   });
                   
                   this.yourHabit = "";
                   this.number = "";
               }
           },

           completeIt(habit) {
               if (habit.number > 0) {
                   habit.number -= 1;
                   habit.complete +=1;

               }  if (habit.number === 0) {
                   habit.finished = true
               }
           }


}

    })
</script>

<style scoped>

</style>