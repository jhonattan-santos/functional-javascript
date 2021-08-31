const path = require("path");
const fn = require("./functions");

const caminho = path.join(__dirname, "legendas");

fn.lerDiretorio(caminho);
