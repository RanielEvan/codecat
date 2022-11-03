import ExecutionContext from "src/data/context";

export function checkCondition(ctx, codeReturn) {
  const code = ctx.getters["getCode"];
  return ctx.rootState.miaw.levelObj.goalCondition(code, codeReturn);
}

export function executeCode(ctx) {
  ctx.commit("setSideContainer", true);

  const code = ctx.getters["getCode"];
  return ExecutionContext.executeCode(code);
}

export function resetCode(ctx) {
  if (ctx.rootState.miaw.levelObj) {
    ctx.commit("setCode", ctx.rootState.miaw.levelObj.initialCode);
  }
}
