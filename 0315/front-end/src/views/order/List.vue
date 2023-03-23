<template>
  <div>
    <h1>home</h1>
    
    <ul v-if="orders.length">
      <li v-for="order in orders" :key="order.id">

        <div class="order-name" @click="goDetail(order.id)">주문메뉴:{{order.name}}</div>

        <div>주문설명:{{order.description}}</div>
        <hr>
      </li>
    </ul>
    <div v-else>
      <b-spinner variant="success" label="Spinning"></b-spinner>
      
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/axios";

export default {
   data(){
    return{
      orders:[],
      
    }
  },
  async created(){
    this.$store.commit("SET_TITLE", "주문 목록");
    const result = await api.orders.OfindAll();
    console.log(result);
    this.orders = result.data;
    
  },
  methods:{
    goDetail(id){
      this.$router.push(`/detail/${id}`);
      

    }
  }
};
</script>

<style scoped>

</style>