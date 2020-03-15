<template>
  <div>
    <div class="m-3" v-for="(floor, index) in floors" :key="index">
      <b-form inline class="justify-content-center">
        <div class="input-group">
          <label for="floor-nr" class="mr-4 input-label">Nr piętra:</label>
          <b-form-input
            class="nr-input mr-4"
            id="floor-nr"
            v-model="floor.nr"
            placeholder="nr"
          ></b-form-input>
        </div>
        <div class="input-group">
          <label for="nr-range-from" class="mr-4 input-label"
            >Numery pok./ap. od</label
          >
          <b-form-input
            class="range-input mr-4"
            id="nr-range-from"
            v-model="floor.rangeFrom"
            placeholder="nr"
          ></b-form-input>
        </div>
        <div class="input-group">
          <label for="nr-range-to" class="mr-4 input-label">do</label>
          <b-form-input
            class="range-input mr-3"
            id="nr-range-to"
            v-model="floor.rangeTo"
            @input="
              handleInput({
                index: index,
                rangeFrom: floor.rangeFrom,
                rangeTo: floor.rangeTo,
              })
            "
            placeholder="nr"
          ></b-form-input>
        </div>
        <b-icon-pencil
          font-scale="2"
          variant="success"
          @click="
            handleEditClick({
              nr: floor.nr,
              index,
              rangeFrom: floor.rangeFrom,
              rangeTo: floor.rangeTo,
            })
          "
        />
        <b-icon-x
          @click="deleteFloor(index)"
          variant="danger"
          font-scale="2"
        ></b-icon-x>
      </b-form>
      <b-row class="m-3 justify-content-center">
        <b-collapse :id="`${index}`">
          <edit-rooms :index="index" :nr="floor.nr"></edit-rooms>
        </b-collapse>
      </b-row>
    </div>
    <b-row class="mb-4 justify-content-center">
      <b-button variant="success" @click="addFloor">Dodaj nowe piętro</b-button>
    </b-row>
  </div>
</template>

<script>
import Vue from "vue";
import { mapMutations, mapGetters } from "vuex";
import { mapMultiRowFields } from "vuex-map-fields";
import {
  BFormInput,
  BButton,
  CollapsePlugin,
  BRow,
  BForm,
  BIconPencil,
  BIconX,
} from "bootstrap-vue";
import EditRooms from "./EditRooms";
Vue.use(CollapsePlugin);

export default {
  name: "FloorForm",
  components: {
    EditRooms,
    BButton,
    BFormInput,
    BRow,
    BForm,
    BIconPencil,
    BIconX,
  },
  computed: {
    ...mapMultiRowFields(["floors"]),
    ...mapGetters({
      rooms: "getRooms",
    }),
  },
  methods: {
    ...mapMutations(["addFloor", "addRooms", "addEditedRooms", "deleteFloor"]),
    handleEditClick: function({ index }) {
      this.$root.$emit("bv::toggle::collapse", `${index}`);
      this.addEditedRooms({
        index: index,
        rooms: this.rooms(index),
      });
    },
    handleInput: function({ index, rangeFrom, rangeTo }) {
      this.addRooms({
        index: index,
        rooms: this.generateRooms(rangeFrom, rangeTo),
      });
    },
    generateRooms: function(rangeFrom, rangeTo) {
      const end = parseInt(rangeTo);
      const start = parseInt(rangeFrom);
      if (start < end) {
        const roomNums = [];
        for (let i = start; i <= end; i++) {
          roomNums.push(i);
        }
        return roomNums;
      }
    },
  },
};
</script>
<style scoped>
.form-inline .nr-input {
  width: 50px;
}
.form-inline .range-input {
  width: 80px;
}
.input-label {
  font-size: 1.2em;
}
</style>
