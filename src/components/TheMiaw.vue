<template>
  <div id="miawContainer" class="text-center">
    <transition
      appear
      v-show="showText"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div id="miawTextBox" class="text-subtitle1">
        <q-btn
          v-if="interaction > 0"
          size="xs"
          round
          color="primary"
          id="miawBackButton"
          icon="arrow_back"
          class="q-mx-sm"
          @click="onMiawBackClick"
        />

        <!-- Balao -->
        <span v-html="miawText" id="miawText" />
      </div>
    </transition>

    <canvas id="theMiaw" @mousedown="onMiawMouseDown"> </canvas>

    <!-- Sheet (hidden) -->
    <img id="miaw-sprite" :src="miawSprite" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      miawSprite: require("../assets/sprites/cat-400x200.png"),

      // Behaviour
      isIdle: true,
    };
  },

  computed: {
    ...mapGetters({
      miawText: "miaw/getText",
      showText: "miaw/getShowText",
      interaction: "miaw/getInteraction",
    }),
  },
  created() {
    this.loadLevel();
  },

  mounted() {
    setTimeout(() => {
      this.beIdle();
      // this.beRunning();
    }, 2000);
  },

  methods: {
    ...mapMutations({
      setMiawText: "miaw/setText",
      loadLevel: "miaw/loadLevel",
      miawInteract: "miaw/interact",
    }),

    onMiawMouseDown(event) {
      this.miawInteract();
    },

    onMiawBackClick() {
      this.miawInteract(false);
    },

    hideMiawText(timeout) {
      setTimeout(() => {
        this.showMiawText = false;
      }, timeout);
    },

    // Stances
    beIdle() {
      this.$miaw.changeInstance("Idle");
      this.isIdle = true;
    },
    beWalking() {
      this.$miaw.changeInstance("Walk");
      this.isIdle = false;
    },
    beRunning() {
      this.$miaw.changeInstance("Run");
      this.isIdle = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#miawContainer {
  position: fixed;
  bottom: 0;
  right: 3em;
  z-index: 10;
}

#theMiaw {
  cursor: pointer;
}

#miaw-sprite {
  display: none;
}

#miawTextBox {
  position: absolute;
  top: -3em;
  right: 0;
  left: 0;
  color: white;
  background-color: RGBA(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.8em;
}

// #miawBackButton {
//   position: absolute;
//   top: 0.8em;
//   left: 1em;
// }

.box-pointer {
  width: 0;
  height: 0;
  border-left: 2vh solid transparent;
  border-right: 2vh solid transparent;
  border-top: 10vh solid var(--main-light-color);
  position: absolute;
  top: 45%;
  right: -10%;
  transform: rotate(-60deg);
}
</style>
