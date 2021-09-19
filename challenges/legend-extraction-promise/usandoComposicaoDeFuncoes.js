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

fn.composicao(
	fn.lerDiretorio,
	fn.elementosTerminadosCom(".srt"),
	fn.lerArquivos,
	fn.mesclarElementos,
	fn.separarPor("\n"),
	fn.removerElementosSeVazio,
	fn.removerElementosSeIncluir("-->"),
	fn.removerElementosSeApenasNumeros,
	fn.removerSimbolos(simbolos),
	fn.mesclarElementos,
	fn.separarPor(" "),
	fn.removerElementosSeVazio,
	fn.removerElementosSeApenasNumeros,
	fn.agruparElementos,
	fn.ordenarPorAtribNumerico("qtde", "desc")
)(caminho).then(console.log);
