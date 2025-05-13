<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action } from "vuex-class"; // Importar decorators
import router from "@/router";

interface Plan {
  id: number;
  name: string;
  price: number;
  features: string[];
}

@Component
export default class Cards extends Vue {
  @State("plans") plans!: Plan[];
  @State("selectedPlan") selectedPlan!: Plan | null;

  @Action("selectPlan") selectPlanAction!: (plan: Plan | null) => void;

  handleSelectPlan(plan: Plan) {
    this.selectPlanAction(plan);
    router.push({ name: "resume", params: { planId: plan.id.toString() } });
  }
}
</script>

<template>
  <div class="section fade-in">
    <h2 class="section-title">Escolha seu plano ideal</h2>
    <p class="section-subtitle">
      Selecione o plano que melhor atende às suas necessidades
    </p>

    <div class="plans-container">
      <div
        v-for="plan in plans"
        :key="plan.id"
        class="plan-card"
        :class="{
          selected: selectedPlan && selectedPlan.id === plan.id,
          popular: plan.id === 2,
        }"
        @click="handleSelectPlan(plan)"
      >
        <div class="popular-badge" v-if="plan.id === 2">Mais popular</div>
        <div class="plan-header">
          <h3>{{ plan.name }}</h3>
          <div class="plan-price">
            <span class="currency">R$</span>
            <span class="amount">{{ plan.price.toFixed(0) }}</span>
            <span class="period">/mês</span>
          </div>
        </div>
        <div class="plan-features">
          <ul>
            <li v-for="(feature, index) in plan.features" :key="index">
              <span class="feature-icon">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
        <button class="select-button" @click="handleSelectPlan(plan)">
          Selecionar plano
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  color: #613fc8;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
}

.section-subtitle {
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 4rem;
}
.plans-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}
.plan-card {
  border: 2px solid #e2e8f0;
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
.plan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(51, 29, 110, 0.1);
  border-color: rgba(97, 63, 200, 0.3);
}

.plan-card.popular {
  border-color: #8b6fe3;
  transform: scale(1.05);
}
.plan-card.popular:hover {
  transform: scale(1.05) translateY(-5px);
}
.popular-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background: linear-gradient(90deg, #613fc8 0%, #331d6e 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(51, 29, 110, 0.2);
}
.plan-header {
  margin-bottom: 2rem;
  text-align: center;
}
.plan-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #331d6e;
}
.plan-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  color: #613fc8;
}
.currency {
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: 0.25rem;
}
.amount {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
}
.period {
  font-size: 1rem;
  color: #6e6e8f;
  margin-left: 0.25rem;
}
.plan-features {
  margin-bottom: 2rem;
}
.plan-features ul {
  list-style-type: none;
}
.plan-features li {
  padding: 0.75rem 0;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4a4a68;
}
.feature-icon {
  color: #613fc8;
  font-weight: bold;
}
.select-button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #613fc8 0%, #331d6e 100%);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(51, 29, 110, 0.2);
}
</style>
