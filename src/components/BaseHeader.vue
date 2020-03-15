<template>
  <div>
    <b-row class="mt-4 justify-content-center">
      <b-card style="border: 0;">
        <h5 class="font-weight-bold mb-3">
          Wpisz numery pięter i zakres numeracji pokojów / apartamentów, które
          na nich występują
        </h5>
        <h6>
          <b-icon-info class="align-middle" font-scale="2" /> Aby edytować
          zakres, lub wpisać poszczególne numery ręcznie, kliknij ikonę ołówka
        </h6>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import { BIconInfo, BCard, BRow } from "bootstrap-vue";

export default {
  name: "BaseHeader",
  components: { BIconInfo, BCard, BRow},
};
</script>
