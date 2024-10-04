
# 🚀 Material UI Template

## 📝 Descripción
Este proyecto es una plantilla base de React con Material UI, diseñada para servir como punto de partida para desarrollar aplicaciones web modernas. Incluye un `Header` responsive con un menú de navegación, una estructura de páginas predeterminada (`Home`, `About Me`, `Projects`, `Contact`), y un sistema de theming configurado con `createTheme` para facilitar la personalización de colores y tipografía.

### ✨ Características principales:
- 💻 **React con React Router**: Navegación de rutas con un diseño SPA.
- 🎨 **Material UI**: Barra de navegación (`AppBar`), botones y componentes listos para usar.
- 📱 **Diseño responsivo**: El `Header` se colapsa en un menú de hamburguesa en dispositivos móviles.
- 🎨 **Configuración de tema**: Tema centralizado en `theme.js` para fácil personalización.
- 🔠 **Tipografía moderna**: Configurado con la fuente `Poppins` para una apariencia moderna.

## 🗂️ Estructura del Proyecto
```
material-ui-template/
├── public/                 # Archivos públicos
├── src/                    # Código fuente principal
│   ├── components/         # Componentes reutilizables (Header, Footer, etc.)
│   ├── pages/              # Páginas de la aplicación (Home, AboutMe, Projects, Contact)
│   ├── theme/              # Configuración de Material UI Theme
│   │   └── theme.js        # Tema global de Material UI
│   ├── App.jsx             # Componente principal con rutas y lógica de la aplicación
│   ├── index.jsx           # Punto de entrada de React
│   └── index.css           # Estilos globales (opcional)
├── .gitignore              # Archivos y carpetas ignorados por Git
├── package.json            # Dependencias del proyecto
├── README.md               # Este archivo
```

## 🚀 Instalación y Uso
Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. 🧬 Clonar el repositorio
Primero, clona el repositorio en tu máquina local usando Git:

```bash
git clone https://github.com/tu-usuario/material-ui-template.git
```

### 2. 📂 Navegar a la carpeta del proyecto
Cambia al directorio del proyecto clonado:

```bash
cd material-ui-template
```

### 3. 📦 Instalar las dependencias
Instala las dependencias necesarias usando `npm` o `yarn`:

```bash
npm install
# o con yarn
yarn install
```

### 4. 🏃 Ejecutar el servidor de desarrollo
Inicia el servidor de desarrollo para ver la aplicación en acción:

```bash
npm start
# o con yarn
yarn start
```

Esto abrirá la aplicación en el navegador en `http://localhost:3000`.

## 🎨 Personalización del Tema
Puedes personalizar la apariencia y la tipografía global del proyecto editando el archivo `src/theme/theme.js`. Algunos elementos que puedes modificar son:

- **Colores** (`palette.primary.main`, `palette.secondary.main`).
- **Tipografía** (`fontFamily`, `h1`, `body1`).
- **Estilos de componentes** (`MuiButton`, `MuiAppBar`, etc.).

```jsx
// src/theme/theme.js
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});
```

## ➕ Agregar Nuevas Páginas
Puedes agregar nuevas páginas creando componentes en la carpeta `src/pages/` y luego añadirlas al archivo de rutas en `src/App.jsx` usando `React Router`.

```jsx
// src/pages/NewPage.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const NewPage = () => {
  return (
    <Container>
      <Typography variant="h3">This is a New Page</Typography>
      <Typography variant="body1">You can add content here.</Typography>
    </Container>
  );
};

export default NewPage;
```

### Luego, añade la ruta en `src/App.jsx`:

```jsx
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import NewPage from './pages/NewPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
```

## 🤝 Contribuir
Si deseas contribuir a este proyecto, puedes hacerlo a través de **Pull Requests**. Por favor, sigue estos pasos:

1. **Clona el repositorio** y crea una nueva rama.
2. Realiza los cambios y haz `commit`.
3. Envía una **Pull Request** describiendo los cambios realizados.

## 📜 Licencia
Este proyecto está bajo la **Licencia MIT**, lo que significa que puedes utilizarlo, modificarlo y distribuirlo libremente.
