const levels = [
  {
    level: 0,
    miawTexts: ["Acho q vc zerou, mas não tenho ctz... &#128569;"],
    objective: "Sem objetivos.",

    initialCode:
      "// Para reiniciar execute o método 'reiniciarNiveis'" +
      "\n\n// Para interagir com o Miaw use a variavel 'miaw'\n// miaw.andar();\n// miaw.parar()\n// miaw.correr()" +
      "\n\nfunction olaMundo() {\n\treturn 'Olá mundo';\n}\nolaMundo();",

    goalCondition: (inputCode, codeReturn) => {
      const cond = inputCode.includes("reiniciarNiveis()");
      console.log("PASSOU DO NIVEL 0?", cond);
      return cond;
    },
  },

  {
    level: 1,
    miawTexts: [
      "Oi, que bom que está aqui! &#128571;",
      "Muito prazer em te conhecer, sou Miaw!",
      "Meu dono me meteu nessa de escrever código, mas tô perdido...",
      "Pode me ajudar? Talvez aprendamos juntos! &#128568;",
      "Pra completar esse código, o que devemos escrever?",
    ],
    objective: 'Faça essa função retornar "Olá mundo"',

    initialCode: 'function olaMundo() {\n\treturn "";\n}\nolaMundo();',

    goalCondition: (inputCode, codeReturn) => {
      inputCode = inputCode.replaceAll('"', "'");
      const cond = inputCode.toLowerCase().includes("return 'olá mundo'");
      return cond;
    },
  },

  {
    level: 2,
    miawTexts: [
      "Massa! É isso!",
      "Mas... agora apareceu outro código...",
      "O que fazer aqui?",
    ],

    objective: "Complete a função com a soma das propriedades",

    initialCode:
      "function somarNumeros(numero1, numero2) {\n\treturn ;\n}\nsomarNumeros(2,3);",

    goalCondition: (inputCode, codeReturn) => {
      const cond1 =
        inputCode.includes("return numero1 + numero2") ||
        inputCode.includes("return numero1+numero2");
      const cond2 = inputCode.includes("somarNumeros");

      return cond1 && cond2;
    },
  },

  {
    level: 3,
    miawTexts: [
      "Conseguimos!! Estamos subindo a escada em",
      "E se agora mudarmos a função para <b>multiplicarNumeros</b>",
      "Será que é só colocar um '<b>*</b>' em vez de '<b>+</b>'?",
    ],

    objective:
      "Ajuste o nome da função e realize a multiplicação das propriedades",

    initialCode:
      "function somarNumeros(numero1, numero2) {\n\treturn numero1 + numero2;\n}\nsomarNumeros(2,3);",

    goalCondition: (inputCode, codeReturn) => {
      const cond1 =
        inputCode.includes("return numero1 * numero2") ||
        inputCode.includes("return numero1*numero2");
      const cond2 = inputCode.includes("multiplicarNumeros");

      return cond1 && cond2;
    },
  },

  {
    level: 4,
    miawTexts: [
      "Tá... acho que vc já pegou o jeito!",
      "Agora eu quero ver... &#128569;",
      "Lembre-se, ao escrever uma <b>função</b>, vc também precisa <b>executa-la</b>",
    ],

    objective: "Escreva uma função que retorne um numero e a execute",

    initialCode: "",

    goalCondition: (inputCode, codeReturn) => {
      const cond1 =
        inputCode.includes("function") && inputCode.includes("return");
      const cond2 = !isNaN(Number(codeReturn));

      return cond1 && cond2;
    },
  },

  {
    level: 5,
    miawTexts: [
      "Perfeito!",
      "Obrigado por me ajudar tanto... de verdade!",
      "Queria aproveitar pra te contar uma história...",
      "Escreve uma função pra contar historias, vai?",
    ],

    objective:
      "Esse gato... Escreva e execute uma função que retorne um texto com duas palavras ou mais.",

    initialCode: "'era uma vez um gato miaw...'",

    goalCondition: (inputCode, codeReturn) => {
      const cond1 =
        inputCode.includes("function") && inputCode.includes("return");
      const cond2 = codeReturn?.split(" ")?.length >= 2;

      return cond1 && cond2;
    },
  },

  {
    level: 6,
    miawTexts: [
      "Que maravilha!!! &#128571;",
      "Sabia que vc pode me controlar?",
      "Não tudo, mas algumas coisinhas...",
      "Que tal executar <b>miaw</b> ?",
      "Mostrará o <b>objeto</b> que me representa",
      "Você pode acessar minhas propriedades com um 'ponto'",
      "Por exemplo... <b>miaw.nome</b>",
      "Faz uma <b>função</b> que retorne minha idade",
    ],

    objective:
      "Não sei o que esse gato quer... Já não basta quebrar as telhas dos outros... Veja com ele",

    initialCode: "miaw",

    goalCondition: (inputCode, codeReturn) => {
      const cond1 =
        inputCode.includes("function") &&
        inputCode.includes("return miaw.idade");
      return cond1;
    },
  },

  {
    level: 7,
    miawTexts: [
      "Certo!",
      "O objeto <b>miaw</b> também tem funções",
      "posso <b>parar</b>, <b>andar</b>, <b>correr</b>...",
      "Me ajude a ser mais fitness!",
    ],

    objective: "Faça ele correr, ele só quer ser fitness...",

    initialCode: "miaw.parar()",

    goalCondition: (inputCode, codeReturn) => {
      const cond1 = inputCode.includes("miaw.correr()");
      return cond1;
    },
  },

  {
    level: 8,
    miawTexts: [
      "Ufa!!",
      "Ei.. eu ia te contar uma historia..",
      "Lembrei que tenho uma função <b>contarHistoria</b>...",
      "Mas primeiro, me ajude a <b>parar</b>!!",
    ],

    objective: "Faça ele parar e contar logo essa história...",

    initialCode: "miaw",

    goalCondition: (inputCode, codeReturn) => {
      const cond1 = inputCode.includes("miaw.parar");
      const cond2 = inputCode.includes("miaw.contarHistoria");
      return cond1 && cond2;
    },
  },

  {
    level: 9,
    miawTexts: [
      "Era uma vez... um gato preto, diferente",
      "Esse gato era muito inseguro",
      "Até que achou quem se tornou dona dele",
      "Ele a amou de verdade, ela também",
      "Esse gato sempre estava no pé da dona",
      "Movido pelo amor, esse gato resolveu fazer algo...",
      "Mesmo no meio do caos",
      "Ele conseguiu fazer algo extraordinário pra ela",
      "Uma prova de amor",
      "[...]",
      "Se quiser saber uma coisa, execute <b>miaw.contarHistoria(true)</b>",
    ],

    objective: "Esse gato tem cada coisa...",

    initialCode: "miaw",

    goalCondition: (inputCode, codeReturn) => {
      const cond1 = inputCode.includes("miaw.contarHistoria(true)");
      return cond1;
    },
  },

  {
    level: 10,
    miawTexts: [
      "Isso é vdd &#128150;",
      "Bom... Obrigado!",
      "Fiz isso por você e para você",
      "E isso ficou incrível!!",
      "Execute <b>finalizar()</b>",
    ],

    objective: "É, esse gato realmente gosta de vc. Vou ficar até calado..",

    initialCode: "",

    goalCondition: (inputCode, codeReturn) => {
      const cond1 = inputCode.includes("finalizar()");
      return cond1;
    },
  },
];

export default {
  getLevelsCount: () => {
    return levels.length;
  },

  getLevel: (level) => {
    const lvlFind = levels.find((lv) => {
      return lv.level == level;
    });

    if (!lvlFind) return levels[0];

    return lvlFind;
  },
};
