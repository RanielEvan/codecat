import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import createPersistedState from "vuex-persistedstate";
// import VuexPersist from "vuex-persist";
// import SecureLS from "secure-ls";
// const ls = new SecureLS({ isCompression: false });

import miaw from "./miaw";
import editor from "./editor";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  // const vxPersist = new VuexPersist({
  //   key: "lover-ls",
  //   storage: window.localStorage,
  //   // {
  //   //   getItem: (key) => ls.get(key),
  //   //   setItem: (key, value) => ls.set(key, value),
  //   //   removeItem: (key) => ls.remove(key),
  //   // },
  // });

  const persistPlugin = createPersistedState({
    paths: [
      "miaw.interaction",
      "miaw.level",
      "editor.code",
      "editor.level",
      "editor.typeCount",
    ],
  });

  const Store = createStore({
    modules: {
      miaw,
      editor,
    },

    plugins: [persistPlugin],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
