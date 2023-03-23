<template>
  <div>
    <h1>Detail</h1>
    <div>{{orderId}}번 메뉴 디테일 페이지입니다.</div>
    <b-card
      v-if="src"
      :title="data.name"
      :img-src="setImage()"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2 detail-card"
    >
      <b-card-text>
        {{ data.description }}
      </b-card-text>
      

      <div v-if="$route.params.id">
        <div>주문 수량: <input v-model="name" type="text" /></div>
        <div>상세 주문내용: <input v-model="description" type="text" /></div>
        <button @click="create">주문 추가하기</button>
      </div>

    </b-card>
  </div>
</template>

<script>
import { api } from "@/utils/axios"
export default {
  data(){
    return{
      orderId: -1,
      quantity: null,
      request_detail: null,
      data: {},
      src:"",
    }
  },
  async created(){
    
    const result = await api.menus.findOne(this.$route.params.id);
    
    this.data = result.data;
    this.orderId = result.data.id;
    this.src=result.data.image_src;
    
  },

  methods:{
    setImage() {
      return `http://15.164.251.60:8080/${this.data.image_src}`;
    },
    async create() {
      if (!this.$route.params.id || !this.quantity || !this.request_detail) {
        alert("빈 값이 있습니다 내용을 전부 작성해주세요");
      }
      const result = await api.orders.Ocreate(
        this.$route.params.id ,
        this.quantity,
        this.request_detail
      );
      console.log(result);
      // 요청 성공
      if (result.data.success) {
        alert(result.data.message);
        this.$router.push("/admin/orders");
      }
      // 요청 실패
      if (!result.data.success) {
        alert(result.data.message);
      }
    },
  }

}
</script>

<style scoped>

</style>