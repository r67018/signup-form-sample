import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        confirmationPassword: ""
      }
    }
  },
  mutations: {
    setUser(state, newUser) {
      state.user = newUser
    }
  },
  plugins: [createPersistedState(
    {
      paths: [
        'user'
      ],
      storage: window.sessionStorage
    }
  )]
})

export default store
