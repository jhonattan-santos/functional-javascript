const path = require("path");
const fn = require("./functions");

const caminho = path.join(__dirname, "..", "legendas");

const simbolos = [
	".",
	"?",
	"-",
	",",
	'"',
	"_",
	"<i>",
	"</i>",
	"♪",
	"\r",
	"[",
	"]",
	"(",
	")",
];

const arquivos = fn
	.lerDiretorio(caminho)
	// .then(fn.elementosTerminadosCom(".srt"))
	// .then(fn.lerArquivos)
	// .then(fn.mesclarElementos)
	// .then(fn.separarPor("\n"))
	// .then(fn.removerElementosSeVazio)
	// .then(fn.removerElementosSeIncluir("-->"))
	// .then(fn.removerElementosSeApenasNumeros)
	// .then(fn.removerSimbolos(simbolos))
	// .then(fn.mesclarElementos)
	// .then(fn.separarPor(" "))
	// .then(fn.removerElementosSeVazio)
	// .then(fn.removerElementosSeApenasNumeros)
	// .then(fn.agruparElementos)
	// .then(fn.ordenarPorAtribNumerico("qtde", "desc"))
	.subscribe(console.log);
