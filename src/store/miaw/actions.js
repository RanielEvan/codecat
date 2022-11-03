import LevelsData from "src/data/levels";

export function newLevel(ctx) {
  let newLevel = ctx.state.level + 1;

  // Caso já tenha completado todos os níveis
  if (newLevel >= LevelsData.getLevelsCount()) {
    // zera.
    newLevel = 0;
  }

  ctx.commit("setLevel", newLevel);
  ctx.commit("loadLevel");
}
