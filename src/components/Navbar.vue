<template>
  <header class="app-header">
    <img
      src="../assets/conecta-suite-logo.svg"
      alt="Conecta SaaS Logo"
      class="logo"
    />

    <nav class="nav-links">
      <button class="nav-button">Soluções</button>
      <button class="nav-button">Sobre</button>
      <button class="nav-button">Planos</button>
      <button class="nav-button">Blog</button>
      <button class="nav-button">Materiais</button>
      <button class="nav-button">Contato</button>
    </nav>

    <div class="spacer"></div>

    <div class="auth-buttons">
      <button class="demo-button">Solicitar demo</button>
      <button class="nav-button login">Login</button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 32px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
}

.logo {
  height: 30px;
  margin-right: 16px; /* mr-4 (assuming 4 units = 16px) */
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px 16px; /* mx-2 (assuming 2 units = 8px padding on each side) */
  margin: 0 8px; /* mx-2 */
  font-weight: 400;
  color: inherit; /* Inherit text color */
  transition: color 0.3s ease;
}

.nav-button:hover {
  color: #613fc8; /* Example hover effect */
}

.login {
  text-decoration: underline;
  text-decoration-color: #613fc8;
}

.spacer {
  flex-grow: 1; /* v-spacer */
}

.auth-buttons {
  display: flex;
  align-items: center;
}

.demo-button {
  background-color: #613fc8; /* color="#613FC8" */
  color: white; /* white--text */
  border: none;
  border-radius: 4px; /* Example border-radius */
  padding: 8px 16px; /* mx-1 (assuming 1 unit = 4px padding, but using 8px 16px for better button size) */
  margin: 0 4px; /* mx-1 */
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500; /* Example font-weight */
  transition: background-color 0.3s ease;
}

.demo-button:hover {
  background-color: #331d6e; /* Example hover effect */
}

.main-content {
  flex-grow: 1;
  padding-top: 100px; /* Add padding to account for fixed header */
}

.main-background {
  background-color: #ffffff;
  min-height: calc(100vh - 100px); /* Adjust min-height */
}

.container {
  width: 100%;
  padding: 20px; /* Add some padding */
  /* fluid container might not need max-width */
}
</style>
