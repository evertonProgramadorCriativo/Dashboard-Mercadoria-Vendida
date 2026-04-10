import { createGlobalStyle } from "styled-components";

// GlobalStyle — define CSS vars e reset global
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
// CSS vars para cores, fontes e outros estilos globais
  :root {
    --bg-primary:   #080c18;
    --bg-card:      #111827;
    --accent-cyan:  #00f5c4;
    --accent-blue:  #3b82f6;
    --accent-red:   #ef4444;
    --accent-orange:#f97316;
    --text-primary: #f0f4ff;
    --text-muted:   #4a5568;
    --border:       #1e2d4a;
    --font-mono:    'Space Mono', monospace;
    --font-display: 'Syne', sans-serif;
    --radius:       12px;
  }
      html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }
// Estilos globais para body e outros elementos
  body {
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: var(--font-display);
    min-height: 100vh;

      /* scrollbar customizada */
  ::-webkit-scrollbar       { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg-primary); }
  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 3px;
    &:hover { background: var(--accent-cyan); }
  }
  }
`;

export default GlobalStyle;
