<template>
  <div>
    GrandChild

    <input v-model="name">
    <button @click="changeName"></button>
    <button @click="changeAge">나이변경</button>
  </div>
</template>

<script>
export default {
     data(){
      return{
        name:""
      }
     },
     methods:{
      changeName(){
        this.$store.commit("SET_MY_NAME", this.name)
        

      },
      changeAge(){
        this.$store.commit("SET_MY_AGE", 3000)
      }
      
     }
     
}
</script>

<style>

</style>