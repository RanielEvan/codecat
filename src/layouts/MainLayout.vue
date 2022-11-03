<template>
  <q-layout id="wholeAppContainer">
    <q-page-container>
      <q-page>
        <div id="home-canvas">
          <TheEditor class="q-pa-lg" />
          <TheMiaw />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import TheEditor from "../components/TheEditor";
import TheMiaw from "../components/TheMiaw";

export default {
  name: "HomePage",
  components: {
    TheEditor,
    TheMiaw,
  },

  // computed: {
  //   isDesktop() {
  //     return this.$q.screen.gt("md");
  //   },
  // },

  // mounted() {
  //   if (!this.isDesktop) {
  //     this.showDesktopAlert();
  //   }
  // },
  // watch: {
  //   isDesktop(val) {
  //     if (!val) {
  //       this.showDesktopAlert();
  //     }
  //   },
  // },

  // methods: {
  //   showDesktopAlert() {
  //     this.$q.dialog({
  //       title: "Opss..",
  //       message: "Com a tela desse tamanho fica meio bugado as coisas aqui",
  //     });
  //   },
  // },
};
</script>

<style lang="scss">
#wholeAppContainer {
  background-image: linear-gradient(#150050, #000000);
  // background-color: RGB(19, 19, 39);
}
</style>
