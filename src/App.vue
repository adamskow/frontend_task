<template>
  <b-container class="p-0" fluid>
    <base-nav></base-nav>
    <b-col class="column col-sm-12 col-md-10 col-lg-10 mt-4">
      <base-header></base-header>
      <b-row class="justify-content-center">
        <floor-form></floor-form>
      </b-row>
    </b-col>
    <b-button
      size="lg sm"
      variant="success"
      class="fixed-button font-weight-bold m-4"
      >Dalej</b-button
    >
  </b-container>
</template>

<script>
import BaseNav from "./components/BaseNav";
import BaseHeader from "./components/BaseHeader";
import FloorForm from "./components/FloorForm";
import { BButton, BCol, BRow, BContainer } from "bootstrap-vue";

export default {
  name: "App",
  components: {
    BaseNav,
    BaseHeader,
    FloorForm,
    BButton,
    BCol,
    BRow,
    BContainer,
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
.container-fluid {
  height: 100%;
}
.fixed-button {
  position: fixed;
  bottom: 0;
  right: 0;
}
.column {
  background-color: var(--white);
  margin: 0 auto;
  height: 80%;
}
</style>
