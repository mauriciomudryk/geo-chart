# Geo Chart

![npm](https://img.shields.io/npm/v/geo-chart)
![license](https://img.shields.io/npm/l/geo-chart)
![build](https://img.shields.io/badge/build-passing-brightgreen)
![threejs](https://img.shields.io/badge/three.js-webgl-blue)

Biblioteca JavaScript para criação de **gráficos 3D interativos** utilizando **WebGL**.

Construída sobre **Three.js**, a Geo Chart permite renderizar gráficos de **barras e linhas em 3D**, com suporte a **labels, eixos, animações e interação com mouse**.

---

# ✨ Recursos

- 📊 Gráficos **3D interativos**
- ⚡ Renderização acelerada por **WebGL**
- 🎯 Suporte a **Bar3D e Line3D**
- 🔍 Labels e eixos dinâmicos
- 🖱️ Interação com mouse
- 🎨 Materiais e cores configuráveis
- 📦 Fácil integração em projetos **JavaScript e TypeScript**
- 📉 Escala automática baseada nos dados

---

# 📸 Preview

![Geo Chart Demo](docs/demo.gif)

---

# 📦 Instalação

## Via NPM

```bash
npm install geo-chart
```

## Via Yarn

```bash
yarn add geo-chart
```

## Via Script

```html
<script src="geo-chart.js"></script>
```

---

# 🚀 Uso Básico

```javascript
import { GeoChart } from "../geo-chart.js";
import { ChartType } from "../geo-chart.js";

const dadosRandomicos = Array.from({ length: 10 }, () => ({
  value: Math.floor(Math.random() * 201) - 100,
}));

const chart = new GeoChart({
  map,
  data: [{ lat: graphLat, lng: graphLng, dados }],
  options: {
    type: ChartType.Bar3D,
    width: 250,
    height: 200,
    data: dadosRandomicos,
  },
});
```

---

# 📊 Tipos de Gráfico

## Bar3D

Gráfico de barras tridimensional.

```
ChartType.Bar3D
```

## Line3D

Gráfico de linhas tridimensional.

```
ChartType.Line3D
```

---

# ⚙️ Configuração

Exemplo de configuração completa:

```javascript
const options = {
  type: ChartType.Bar3D,
  width: 800,
  height: 600,
  scaleFactor: 0.2,

  data: [
    { label: "Produto A", value: 100 },
    { label: "Produto B", value: 200 },
    { label: "Produto C", value: 150 },
  ],
};
```

---

# 📚 API

## GeoChart(options)

Cria uma nova instância do gráfico.

| Propriedade | Tipo      | Descrição          |
| ----------- | --------- | ------------------ |
| type        | ChartType | Tipo do gráfico    |
| data        | array     | Lista de dados     |
| width       | number    | Largura do gráfico |
| height      | number    | Altura do gráfico  |
| scaleFactor | number    | Escala vertical    |

---

## chart.render(container)

Renderiza o gráfico dentro de um elemento HTML.

```
chart.render(container)
```

| Parâmetro | Tipo        | Descrição                                |
| --------- | ----------- | ---------------------------------------- |
| container | HTMLElement | Elemento onde o gráfico será renderizado |

---

# 🎨 Customização

Você pode alterar materiais, cores e transparência.

Exemplo:

```javascript
const material = new THREE.MeshStandardMaterial({
  color: 0x00aaff,
  transparent: true,
  opacity: 0.7,
});
```

---

# 🧩 Estrutura do Projeto

```
src/
 ├── charts
 │   ├── Bar3DChart.ts
 │   ├── Line3DChart.ts
 │
 ├── core
 │   ├── BaseChart.ts
 │
 ├── axis
 │   ├── AxisRenderer.ts
 │
 ├── labels
 │   ├── LabelRenderer.ts
 │
 ├── utils
 │   ├── MathUtils.ts
 │
 └── index.ts
```

---

# 🛠️ Desenvolvimento

Clone o projeto:

```bash
git clone https://github.com/mauriciomudryk/geo-chart.git
```

Entre na pasta:

```bash
cd geo-chart
```

Instale dependências:

```bash
npm install
```

---

# ⚡ Build

Para gerar o bundle da biblioteca:

```bash
npm run build
```

---

# 👀 Watch Mode (build automático)

```bash
npm run watch
```

Sempre que arquivos da pasta `src` forem alterados, o build será executado automaticamente.

---

# 🧪 Testes

```bash
npm run test
```

---

# 📦 Publicação no NPM

Atualizar versão:

```bash
npm version patch
```

Publicar:

```bash
npm publish
```

---

# 🧱 Tecnologias

- Three.js
- WebGL
- TypeScript
- Node.js
- Vite / Rollup

---

# 📈 Roadmap

Planejamento das próximas versões:

- [ ] Animações entre datasets
- [ ] Gráficos de área 3D
- [ ] Gráficos de pizza 3D
- [ ] Exportação para imagem
- [ ] Suporte a temas
- [ ] Tooltip interativo
- [ ] Zoom e rotação do gráfico

---

# 🤝 Contribuição

Contribuições são bem-vindas!

1. Fork do projeto
2. Crie uma branch

```
git checkout -b feature/nova-feature
```

3. Commit

```
git commit -m "feat: nova funcionalidade"
```

4. Push

```
git push origin feature/nova-feature
```

5. Abra um Pull Request

---

# 📄 Licença

MIT License.

---

# 👨‍💻 Autor

Maurício M.

---

# ⭐ Apoie o projeto

Se este projeto te ajudou, considere dar uma **estrela no GitHub** ⭐

# geo-chart

TypeScript-based geo visualization library that generates lightweight, CDN-ready JavaScript bundles.

# build

rm -rf dist
npm run build

# publish npm

npm version patch
npm publish --access public

# chokidar

npm run watch
