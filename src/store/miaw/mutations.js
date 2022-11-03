import LevelsData from "src/data/levels";

export function setMiawChangeInstance(state, changeInstanceFn) {
  state.changeInstance = changeInstanceFn;
}

export function setText(state, text) {
  state.text = text;
  state.showText = true;
}

export function setShowText(state, value) {
  state.showText = value;
}

export function setLevel(state, level) {
  state.level = level;
}

export function loadLevel(state) {
  state.interaction = 0;
  state.levelObj = LevelsData.getLevel(state.level);
  setText(state, state.levelObj.miawTexts[0]);
}

export function interact(state, forward = true) {
  if (state.levelObj) {
    if (forward && state.interaction < state.levelObj.miawTexts.length - 1) {
      state.interaction++;
    } else if (!forward && state.interaction > 0) {
      state.interaction--;
    }

    setText(state, state.levelObj.miawTexts[state.interaction]);
  }
}
