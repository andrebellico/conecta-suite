<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header class="app-header">
    <router-link to="/">
      <img
        src="../assets/conecta-suite-logo.svg"
        alt="Conecta SaaS Logo"
        class="logo"
      />
    </router-link>

    <button class="menu-toggle" @click="toggleMobileMenu">
      <span class="hamburger-icon"></span>
    </button>

    <div class="spacer"></div>

    <div :class="['mobile-menu', { 'is-open': isMobileMenuOpen }]">
      <div class="auth-buttons">
        <button class="demo-button">Solicitar demo</button>
        <button class="nav-button login">Login</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 32px; /* Adjusted padding */
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  position: relative; /* Needed for absolute positioning of mobile menu */
}

.logo {
  height: 30px;
  margin-right: 16px;
}

.spacer {
  flex-grow: 1;
}

.menu-toggle {
  display: none; /* Hidden by default */
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 100; /* Ensure it's above other content */
}

.hamburger-icon {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #333;
  position: relative;
  transition: background-color 0.3s ease;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: "";
  display: block;
  width: 25px;
  height: 3px;
  background-color: #333;
  position: absolute;
  transition: transform 0.3s ease;
}

.hamburger-icon::before {
  top: -8px;
}

.hamburger-icon::after {
  top: 8px;
}

/* Animation for hamburger icon */
.menu-toggle.is-open .hamburger-icon {
  background-color: transparent;
}

.menu-toggle.is-open .hamburger-icon::before {
  transform: translateY(8px) rotate(45deg);
}

.menu-toggle.is-open .hamburger-icon::after {
  transform: translateY(-8px) rotate(-45deg);
}

.mobile-menu {
  display: flex; /* Flex by default for larger screens */
  align-items: center;
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

/* Responsive styles */
@media (max-width: 768px) {
  .app-header {
    padding: 0 16px; /* Adjusted padding for smaller screens */
  }

  .menu-toggle {
    display: block; /* Show hamburger on small screens */
  }

  .mobile-menu {
    display: none; /* Hide menu by default on small screens */
    flex-direction: column;
    position: absolute;
    top: 100px; /* Position below the header */
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 50;
  }

  .mobile-menu.is-open {
    display: flex; /* Show menu when open */
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  }

  .nav-button {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  .auth-buttons {
    flex-direction: column;
    width: 100%;
  }

  .demo-button,
  .nav-button.login {
    margin: 5px 0;
    width: 100%;
    text-align: center;
  }
}
</style>
