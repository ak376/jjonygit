<template>
  <div>
    <h1>투두</h1>
  </div>
</template>

<script>

import {api} from "../../utils/api"
export default {

  async created() {
    const result = await api.jsonplaceholdler.findAll();
    console.log(result);

    this.$store.commit("SET_LOADING",false);
  }
}
</script>
import {api} from "../../utils/api"
0
<style>

</style>