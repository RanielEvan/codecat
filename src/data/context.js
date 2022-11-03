import { miawObj } from "boot/miaw";

export default {
  executeCode(code) {
    // CONTEXTO DE EXECUCAO
    // code = code.replace(/\s/g, ""); // Remove Espaços
    // console.log("CODE EXECUTED:", code);

    // Variaveis
    const nome = "Miaw";

    // Metodos
    const reiniciarNiveis = () => {};
    const finalizar = () => {};

    const miaw = {
      nome: "Miaw",
      idade: 1,
      temperamento: "Manso",

      // Controla o miaw
      parar: () => {
        miawObj.changeInstance("Idle");
      },
      andar: () => {
        miawObj.changeInstance("Walk");
      },
      correr: () => {
        miawObj.changeInstance("Run");
      },
      contarHistoria: (revelar) => {
        if (revelar) {
          return "Eu te amo Liana";
        }
      },
    };

    // Execução do codigo
    try {
      const codeReturn = eval(code);
      return { codeReturn, success: true };
    } catch (er) {
      return { codeReturn: er, success: false };
    }
  },
};
