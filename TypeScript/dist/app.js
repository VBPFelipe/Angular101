"use strict";
var ola = function (nome, sobrenome) {
    console.log("Olá " + nome + sobrenome);
};
ola("Felipe", "Vanderlei");
/**
 * Passo seguinte é gerar o arquivo tsconfig.json
 *
 * 1 - abrir terminal e navegar até o diretório do projeto
 * 2 - inserir o comando: tsc -init
 * *********************************************************
 *
 * Próximo passo
 *
 * 1 - abrir o tsconfig.json
 * 2 - ir até o comando comentado "outdir" (próximo de "module": "commonjs")
 * 3 - descomentar o comando "outdir" e adicionar ao atributo um novo diretório
 *      EX.: "oudir": "./dist",
 * 4 - Executar terminal, o comando: tsc -w
 * 5 - diretório dist será criado e o processo de compilação está 'ouvindo' quaisquer alterações.
 *
 * */
