<script setup>
import router from "@/router";
import { ref } from "vue";

const props = defineProps({
  selectedPlan: {
    type: Object,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  showService: {
    type: Boolean,
    required: true,
  },
});

console.log(props);

const nextBillingDate = ref(new Date());
nextBillingDate.value.setDate(nextBillingDate.value.getDate() + 30);
const formatDate = nextBillingDate.value.toLocaleString("pt-BR");

const backToHome = () => {
  router.push({ name: "home" });
};
</script>

<template>
  <div class="section confirmation-section fade-in">
    <div class="confirmation-container">
      <div class="success-icon">✓</div>
      <h2 class="confirmation-title">Compra realizada com sucesso!</h2>
      <p class="confirmation-message">
        Obrigado por escolher nossos serviços. Você receberá um e-mail com os
        detalhes da sua compra.
      </p>

      <div class="confirmation-details">
        <div class="confirmation-item">
          <span>Plano</span>
          <span class="confirmation-value">{{ props.selectedPlan.name }}</span>
        </div>
        <div class="confirmation-item">
          <span>Valor mensal</span>
          <span class="confirmation-value"
            >R$ {{ props.selectedPlan.price.toFixed(2) }}</span
          >
        </div>
        <div class="confirmation-item">
          <span>Total</span>
          <span class="confirmation-value"
            >R$ {{ props.total.toFixed(2) }}</span
          >
        </div>
        <div class="confirmation-item" v-if="props.showService">
          <span>Serviço de implantação</span>
          <span class="confirmation-value"
            >R$ {{ (props.total - props.selectedPlan.price).toFixed(2) }}</span
          >
        </div>
        <div class="confirmation-item">
          <span>Próxima cobrança</span>
          <span class="confirmation-value">{{ formatDate }}</span>
        </div>
      </div>

      <div class="confirmation-actions">
        <button class="dashboard-button">Acessar dashboard</button>
        <button class="home-button" @click="backToHome">
          Voltar ao início
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section {
  padding: 3rem;
}

.confirmation-section {
  padding: 4rem 2rem;
}

.confirmation-container {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.success-icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #613fc8 0%, #331d6e 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 20px rgba(51, 29, 110, 0.2);
}

.confirmation-title {
  color: #331d6e;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.confirmation-message {
  color: #4a4a68;
  font-size: 1.125rem;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.confirmation-details {
  background-color: #f1eeff;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 3rem;
  text-align: left;
  border: 1px solid rgba(97, 63, 200, 0.2);
}

.confirmation-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #4a4a68;
}

.confirmation-item:last-child {
  margin-bottom: 0;
}

.confirmation-value {
  font-weight: 600;
  color: #331d6e;
}

.confirmation-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.dashboard-button,
.home-button {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dashboard-button {
  background: linear-gradient(90deg, #613fc8 0%, #331d6e 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 10px rgba(51, 29, 110, 0.2);
}

.dashboard-button:hover {
  box-shadow: 0 6px 15px rgba(51, 29, 110, 0.3);
  transform: translateY(-2px);
}

.home-button {
  background-color: white;
  color: #613fc8;
  border: 2px solid #613fc8;
}

.home-button:hover {
  background-color: #f1eeff;
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 1.5rem;
  }

  .confirmation-actions {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
