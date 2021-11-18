<script>
export default {
  name: "input-component",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    inputText: {
      get() {
        return this.text;
      },
      set(val) {
        this.$emit("update:text", val);
      },
    },
  },
};
</script>

<template src="./template.html"></template>

<style scoped src="./style.css"></style>
