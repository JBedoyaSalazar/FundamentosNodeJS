# Fundamentos de Node.js 🚀

![Node.js](https://img.shields.io/badge/Node.js-LTS-green?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Learning-yellow?style=for-the-badge)

Este repositorio contiene una colección de ejemplos prácticos y ejercicios sobre los fundamentos de **Node.js**. Desde el manejo del sistema de archivos hasta la integración con APIs modernas como Google Gemini.

## 📁 Estructura del Proyecto

El código fuente se encuentra en la carpeta `src/` y está organizado por módulos temáticos:

| Archivo | Descripción |
| :--- | :--- |
| `buffers.js` | Manipulación de datos binarios y uso de la clase `Buffer`. |
| `streams.js` | Lectura y escritura eficiente de archivos grandes mediante flujos de datos. |
| `server.js` | Creación de un servidor HTTP básico desde cero. |
| `fs.js` / `fs-gemini.js` | Interacción con el sistema de archivos e integración con AI. |
| `process.js` | Manejo de argumentos de línea de comandos y variables de entorno. |
| `os.js` | Información sobre el sistema operativo (memoria, CPU, etc.). |
| `crypto.js` | Ejemplos de encriptación y hashing. |
| `math.js` / `math.mjs` | Comparativa entre módulos CommonJS y ES Modules. |
| `timers.js` | Uso de `setTimeout`, `setInterval` y `setImmediate`. |

## 🛠️ Instalación y Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/JBedoyaSalazar/FundamentosNodeJS.git
cd FundamentosNodeJS
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto y añade tu API KEY de Google Gemini (si planeas usar los módulos de IA):
```env
GEMINI_API_KEY=tu_api_key_aqui
```

### 4. Ejecutar ejemplos
Puedes ejecutar cualquier archivo de la carpeta `src/` usando Node:
```bash
node src/streams.js
node src/server.js
```

O usar el script de inicio configurado:
```bash
npm start
```

## 🧪 Temas Cubiertos
- **Core Modules**: `fs`, `path`, `http`, `os`, `crypto`, `process`.
- **Global Objects**: `Buffer`, `__dirname`, `__filename`.
- **Asincronía**: Callbacks, Promesas y Event Loop.
- **Streams**: `createReadStream` y `createWriteStream`.
- **Integraciones**: Conexión con modelos de lenguaje (Gemini AI).

## 👤 Autor
**Jefred Bedoya**
- Email: [jefred03salazar@gmail.com](mailto:jefred03salazar@gmail.com)
- GitHub: [@JBedoyaSalazar](https://github.com/JBedoyaSalazar)

---
*Este proyecto es parte del aprendizaje en el curso de Fundamentos de Node.js de Platzi.*
