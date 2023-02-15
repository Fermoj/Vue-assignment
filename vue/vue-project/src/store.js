import { createStore } from "vuex";
const mutations = {
    increment(state) {
      state.counter += 1;
    },
  },
  state = { counter: 1099 };
export default createStore({ mutations, state, strict: true });
