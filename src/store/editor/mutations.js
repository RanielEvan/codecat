export function setCode(state, code) {
  state.code = code;
}
export function setTypeCount(state, typeCount) {
  state.typeCount = typeCount;
}

export function toggleSideContainer(state) {
  state.showSideContainer = !state.showSideContainer;
}
export function setSideContainer(state, value) {
  state.showSideContainer = value;
}
