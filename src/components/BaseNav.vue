<template>
  <b-navbar collapse variant="success">
    <b-navbar-brand class="text-white font-weight-bold " href="#"
      ><b-icon-chevron-left class="align-middle" font-scale="2" /> Piętra,
      numery pokojów
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
import Vue from "vue";
import { NavbarPlugin, BIconChevronLeft } from "bootstrap-vue";
Vue.use(NavbarPlugin);

export default {
  name: "BaseNav",
  components: { BIconChevronLeft },
};
</script>
