<template>
  <b-card>
    <p>Po wpisaniu numeru postaw przecinek, aby zatwierdzić</p>
    <div class="justify-content-center">
      <div class="inline">
        <div
          class="room p-1 m-1"
          v-for="(room, index) in rooms(this.index)"
          :key="index"
          variant="primary"
        >
          {{room}}
          <b-icon-x
            @click="onDelete(room)"
            class="align-middle"
            font-scale="1.2"
            >X</b-icon-x
          >
        </div>
        <input
          ref="room"
          @input="checkForComma"
          class="p-1 m-1 room-input"
          v-model="room"
          placeholder="nr"
        />
      </div>
      <b-row class="justify-content-end">
        <b-button @click="onSave" class="mt-2 mr-2">Zapisz</b-button>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { BButton, BRow, BIconX, BCard } from "bootstrap-vue";
export default {
  name: "EditRooms",
  props: ["nr", "index"],
  components: {
    BButton,
    BRow,
    BIconX,
    BCard,
  },
  data() {
    return {
      room: "",
    };
  },
  computed: {
    ...mapGetters({
      rooms: "getEditedRooms",
    }),
  },
  methods: {
    ...mapMutations(["addEditedRoom","saveEditedRooms", "filterEditedRooms"]),
    checkForComma: function() {
      if (this.room.includes(",")) {
        this.addEditedRoom({
          index: this.index,
          room: this.room.replace(",", ""),
        });
        this.room = "";
      }
    },
    onSave: function() {
      this.$root.$emit("bv::toggle::collapse", `${this.index}`);
      setTimeout(() => this.saveEditedRooms(this.index), 1000);
    },
    onDelete: function(room) {
      this.filterEditedRooms({ index: this.index, room: room });
    },
  },
};
</script>
<style>
.inline {
  width:100%;
  display: flex;
  flex-wrap: wrap;
}
.room {
  width: 80px;
  border: 1px solid black;
  border-radius: 5px;
  text-align:center;
  font-size: 1.1em;
}
.room-input {
  border: 0;
  border-bottom: 2px solid var(--success);
  width: 60px;
  text-align: center;
}
</style>
