import { getField, updateField } from "vuex-map-fields";

const state = {
  floors: [
    {
      nr: "",
      rangeFrom: "",
      rangeTo: "",
      rooms: [],
      editedRooms: [],
    },
  ],
};

const getters = {
  getRooms: state => id => {
    return state.floors[id].rooms.slice().sort((a, b) => a - b);
  },
  getEditedRooms: state => id => {
    return [
      ...new Set(state.floors[id].editedRooms.slice().sort((a, b) => a - b)),
    ];
  },
  getField,
};

const mutations = {
  updateField,
  addFloor(state) {
    state.floors.push({
      nr: "",
      rangeFrom: "",
      rangeTo: "",
      rooms: [],
      editedRooms: [],
    });
  },
  addEditedRoom(state, { index, room }) {
    state.floors[index].editedRooms.push(parseInt(room));
  },
  addRooms(state, { index, rooms }) {
    state.floors[index].rooms = rooms;
  },
  addEditedRooms(state, { index, rooms }) {
    state.floors[index].editedRooms = rooms;
  },
  filterEditedRooms(state, { room, index }) {
    state.floors[index].editedRooms = state.floors[index].editedRooms.filter(
      _room => _room !== room
    );
  },
  saveEditedRooms(state, index) {
    state.floors[index].rooms = [...new Set(state.floors[index].editedRooms)];
    state.floors[index].editedRooms = [];
  },
  deleteFloor(state, index) {
    state.floors.splice(index, 1);
  },
};

export default {
  state,
  mutations,
  getters,
};
