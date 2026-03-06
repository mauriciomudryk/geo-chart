// postbuild.js
const fs = require("fs");
const path = require("path");

// Lê a versão do package.json
const pkg = require("./package.json");
const version = pkg.version;

// Caminho onde o arquivo version será criado
const dir = path.join(__dirname, "docs", "examples");

// Cria a pasta se não existir
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Cria o objeto de versão
const versionObject = { version: version };

// Cria o arquivo 'version' com o conteúdo JSON
const versionFilePath = path.join(dir, "version");
fs.writeFileSync(versionFilePath, JSON.stringify(versionObject, null, 2));

console.log(
  `Arquivo version criado em ${versionFilePath} com o conteúdo: ${JSON.stringify(versionObject)}`,
);
