<template>
  <div id="editorArea">
    <!-- O EDITOR -->
    <CodeEditor
      id="theEditor"
      v-model="textCode"
      class="github_dark"
      autofocus
      spellcheck="false"
      width="100%"
      height="100%"
      :hide_header="true"
      :wrap_code="true"
    />

    <!-- AÇÕES DO EDITOR -->
    <div id="editorActions" clkass>
      <div class="q-gutter-md">
        <q-btn
          size="sm"
          round
          icon="refresh"
          color="secondary"
          @click="resetAll"
        >
          <q-tooltip transition-show="scale" transition-hide="scale">
            Redefinir
          </q-tooltip>
        </q-btn>

        <q-btn
          round
          size="lg"
          icon="play_arrow"
          color="primary"
          @click="triggerVerifyCode"
        >
          <q-tooltip
            class="q-pl-sm"
            anchor="center right"
            self="center middle"
            :offset="[40, 0]"
            transition-show="scale"
            transition-hide="scale"
          >
            Executar
          </q-tooltip>
        </q-btn>
      </div>
    </div>

    <!-- RESULTADOS E OBJETIVO -->
    <div id="sideContainerWrapper">
      <q-btn
        size="sm"
        round
        color="primary"
        id="sideContainerToggle"
        icon="expand_more"
        class="q-ma-sm"
        @click="toggleSideContainer"
      />

      <transition
        appear
        v-show="showSideContainer"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div id="sideContainer">
          <div>
            <div class="text-subtitle2">
              <div>
                <span class="text-caption">Objetivo:</span><br />
                <b>{{ levelObjective }}</b>
              </div>
            </div>

            <div class="text-subtitle2 q-mt-lg">
              <span class="text-caption">Execução do código: </span>
              <div id="codeReturn">{{ codeReturn }}</div>
            </div>

            <!-- <div class="q-mt-md text-subtitle2">
                    <div>
                      <span class="text-caption">Qtd. digitada: </span>
                      <b>{{ typeCount }} </b>
                    </div>
                  </div> -->
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CodeEditor from "simple-code-editor";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    CodeEditor,
  },

  data() {
    return {
      textCode: "",
      typeCount: 0,
      codeReturn: ".",
    };
  },

  computed: {
    ...mapGetters({
      storedCode: "editor/getCode",
      editorTypeCount: "editor/getTypeCount",
      levelObj: "miaw/getLevelObj",
      showSideContainer: "editor/showSideContainer",
    }),

    levelObjective() {
      return this.levelObj ? this.levelObj.objective : "Sem objetivo.";
    },
  },

  watch: {
    textCode() {
      this.typeCount++;
      this.setCode(this.textCode);
      this.setTypeCount(this.typeCount);
    },
  },

  mounted() {
    if (!this.storedCode.trim()) {
      this.resetCode();
    }
    this.textCode = this.storedCode;
    this.typeCount = this.editorTypeCount;
  },

  methods: {
    ...mapMutations({
      setCode: "editor/setCode",
      setLevel: "editor/setLevel",
      setTypeCount: "editor/setTypeCount",
      toggleSideContainer: "editor/toggleSideContainer",
    }),
    ...mapActions({
      resetCode: "editor/resetCode",
      executeCode: "editor/executeCode",
      checkCondition: "editor/checkCondition",

      miawNewLevel: "miaw/newLevel",
    }),

    triggerVerifyCode() {
      this.setCode(this.textCode);
      this.setTypeCount(this.typeCount);

      this.executeCode().then(({ codeReturn, success }) => {
        this.codeReturn = codeReturn;

        if (success) {
          this.checkCondition(codeReturn).then((conditionCheck) => {
            if (conditionCheck) {
              this.miawNewLevel();
              this.resetAll();
            }
          });
        }
      });
    },

    resetAll() {
      this.resetCode();
      this.textCode = this.storedCode;
      // this.$nextTick(() => {
      //   this.typeCount = 0;
      //   this.setTypeCount(this.typeCount);
      // });
    },
  },
};
</script>

<style lang="scss">
#editorArea {
  width: 100%;
  height: 100vh;
  z-index: 0;
}

.hide_header.scroll > .code_area {
  height: 90% !important;
  border-bottom: solid 1px #999;
  border-radius: 0px !important;
}

#editorActions {
  position: fixed;
  left: 4em;
  bottom: 2.8em;
  z-index: 20;
}

#sideContainerWrapper {
  position: fixed;
  right: 3em;
  top: 4em;
  z-index: 20;
  max-width: 40%;
}
#sideContainerToggle {
  position: fixed;
  right: inherit;
  top: inherit;
  z-index: 21;
}
#sideContainer {
  background-color: RGBA(255, 255, 255, 0.7);
  padding: 2em;
  border-radius: 10px;
}

#codeReturn {
  color: white;
  background-color: rgb(0 0 0 / 75%);
  padding: 0.4em;
  border-radius: 3px;
}

// SCROLL DIFERENCIADO
/* width */
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
