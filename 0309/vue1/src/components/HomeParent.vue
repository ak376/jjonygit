<template>
  <div>
    <h1>아빠</h1>
    {{ halbaeData }}
    {{ halbaeData2 }}
    <button @click="changeHalbaeData">변경</button>
    <ParentChild
      :halbaeData="halbaeData"
      @changeHalbaeDataFromGrandChild="changeHalbaeDataFromGrandChild"
    />
  </div>
</template>

<script>
import ParentChild from "./ParentChild.vue";
export default {
  components: {
    ParentChild,
  },

  props: ["halbaeData", "halbaeData2"],
  methods: {
    changeHalbaeData() {
      this.$emit("changeHalbaeData", "ㅋㅋㅋ");
    },
    changeHalbaeDataFromGrandChild(text) {
      this.$emit("changeHalbaeData", text);
    },
  },
};
</script>
