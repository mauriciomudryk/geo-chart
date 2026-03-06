// postbuild.js
const fs = require("fs");
const path = require("path");

// Lê a versão atual do package.json
const pkg = require("./package.json");
const version = pkg.version;

// Caminho onde o arquivo version será criado
const dir = path.join(__dirname, "docs", "examples");

// Cria a pasta se não existir
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Caminho do arquivo 'version'
const versionFilePath = path.join(dir, "version");

// Lê versão atual do arquivo version (se existir)
let currentVersion = null;
if (fs.existsSync(versionFilePath)) {
  try {
    const data = fs.readFileSync(versionFilePath, "utf-8");
    const obj = JSON.parse(data);
    currentVersion = obj.version;
  } catch (err) {
    console.warn(
      "Não foi possível ler o arquivo version existente, irá atualizar:",
      err,
    );
  }
}

// Só atualiza se a versão for diferente
if (currentVersion !== version) {
  // Atualiza o arquivo version
  const versionObject = { version };
  fs.writeFileSync(versionFilePath, JSON.stringify(versionObject, null, 2));
  console.log(
    `Arquivo version atualizado em ${versionFilePath} com versão: ${version}`,
  );

  // Atualiza os HTMLs
  updateHtmlFiles(dir);
} else {
  console.log(
    "Versão do package.json igual ao arquivo version, nada a atualizar.",
  );
}

// Função para atualizar arquivos HTML
function updateHtmlFiles(dir) {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recurse em subpastas
      updateHtmlFiles(filePath);
    } else if (file.endsWith(".html")) {
      let content = fs.readFileSync(filePath, "utf-8");

      // Substitui a versão na URL
      const regex =
        /https:\/\/unpkg\.com\/geo-chart@[\d.]+\/dist\/geo-chart\.js/g;
      const newContent = content.replace(
        regex,
        `https://unpkg.com/geo-chart@${version}/dist/geo-chart.js`,
      );

      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, "utf-8");
        console.log(`Atualizado ${filePath}`);
      }
    }
  }
}
