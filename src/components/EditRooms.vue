<template>
  <b-card>
    <p>Po wpisaniu numeru postaw przecinek, aby zatwierdzić</p>
    <div class="justify-content-center">
      <div class="inline">
        <div
          class="room m-1 pt-1 pb-1"
          v-for="(room, index) in rooms(this.index)"
          :key="index"
          variant="primary"
        >
          {{ room }}
          <b-icon-x
            @click="deleteRoom(room)"
            variant="danger"
            class="align-middle font-weight-bold"
            font-scale="1.3"
          ></b-icon-x>
        </div>
        <input
          ref="room"
          @input="handleInput"
          class="m-1 room-input"
          v-model="room"
          placeholder="nr"
        />
      </div>
      <b-row class="justify-content-end">
        <b-button @click="saveRooms" class="mt-2 mr-2">Zapisz</b-button>
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
    ...mapMutations(["addEditedRoom", "saveEditedRooms", "filterEditedRooms"]),
    handleInput: function() {
      if (this.room.includes(",")) {
        this.addEditedRoom({
          index: this.index,
          room: this.room.replace(",", ""),
        });
        this.room = "";
      }
    },
    saveRooms: function() {
      this.$root.$emit("bv::toggle::collapse", `${this.index}`);
      setTimeout(() => this.saveEditedRooms(this.index), 1000);
    },
    deleteRoom: function(room) {
      this.filterEditedRooms({ index: this.index, room: room });
    },
  },
};
</script>
<style>
.inline {
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .inline {
    width: 768px;
  }
}

.room {
  width: 80px;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  font-size: 1em;
}

.room-input {
  border: 0;
  border-bottom: 2px solid var(--success);
  width: 60px;
  outline: none;
  text-align: center;
}
</style>
