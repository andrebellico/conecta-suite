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
  margin-right: 16px;
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
  padding: 8px 16px;
  margin: 0 8px;
  font-weight: 400;
  color: inherit;
  transition: color 0.3s ease;
}

.nav-button:hover {
  color: #613fc8;
}

.login {
  text-decoration: underline;
  text-decoration-color: #613fc8;
}

.spacer {
  flex-grow: 1;
}

.auth-buttons {
  display: flex;
  align-items: center;
}

.demo-button {
  background-color: #613fc8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.demo-button:hover {
  background-color: #331d6e;
}

.main-content {
  flex-grow: 1;
  padding-top: 100px;
}

.main-background {
  background-color: #ffffff;
  min-height: calc(100vh - 100px);
}

.container {
  width: 100%;
  padding: 20px;
}
</style>
