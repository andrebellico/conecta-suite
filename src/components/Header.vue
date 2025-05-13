<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop()
  msg!: string;
}
</script>

<style scoped>
h1 {
  color: #000000;
  text-align: center;
  margin-top: 20px;
}
</style>
