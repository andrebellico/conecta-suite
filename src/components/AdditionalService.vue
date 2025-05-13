<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action } from "vuex-class";

@Component
export default class AdditionalService extends Vue {
  @State("showAdditionalService") showAdditionalService!: boolean;
  @Getter("getAdditionalServicePrice") additionalServicePrice!: number;

  @Action("addAdditionalService") addAdditionalServiceAction!: () => void;
  @Action("removeAdditionalService") removeAdditionalServiceAction!: () => void;

  onClick() {
    this.addAdditionalServiceAction();
  }

  onRemove() {
    this.removeAdditionalServiceAction();
  }
}
</script>

<template>
  <div class="section fade-in">
    <div class="deployment-container">
      <div class="deployment-card">
        <div class="deployment-badge">Recomendado</div>
        <div class="deployment-content">
          <div class="deployment-header">
            <div class="deployment-icon">🚀</div>
            <h3>Implantação Profissional + Suporte Prioritário</h3>
          </div>
          <p>
            Nossa equipe especializada configura tudo para você, garantindo uma
            transição suave e sem complicações.
          </p>
          <ul>
            <li>
              <span class="feature-icon">✓</span> Configuração completa do
              ambiente
            </li>
            <li>
              <span class="feature-icon">✓</span> Migração de dados existentes
            </li>
            <li>
              <span class="feature-icon">✓</span> Treinamento da sua equipe
            </li>
            <li>
              <span class="feature-icon">✓</span> Suporte prioritário por 30
              dias
            </li>
          </ul>
          <div class="deployment-price-container">
            <div class="deployment-price">
              <span class="currency">R$</span>
              <span class="amount">{{
                additionalServicePrice.toFixed(2)
              }}</span>
            </div>
            <div class="deployment-selected">
              <div v-if="showAdditionalService">
                <v-btn @click="onRemove()">Remover Serviço</v-btn>
              </div>
              <div v-else>
                <v-btn @click="onClick()" color="primary">Adicionar</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #331d6e;
  text-align: center;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6e6e8f;
  text-align: center;
  margin-bottom: 3rem;
}

.deployment-container {
  max-width: 800px;
  margin: 0 auto 3rem;
}

.deployment-card {
  border: 2px solid #e2e8f0;
  border-radius: 1rem;
  padding: 2.5rem;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.deployment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(51, 29, 110, 0.1);
}

.deployment-badge {
  position: absolute;
  top: -12px;
  right: 30px;
  background: linear-gradient(90deg, #f6ad55 0%, #f59e0b 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(245, 158, 11, 0.2);
}

.deployment-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.deployment-icon {
  font-size: 2rem;
}

.deployment-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #331d6e;
}

.deployment-content p {
  margin-bottom: 1.5rem;
  color: #4a4a68;
  line-height: 1.6;
}

.deployment-content ul {
  list-style-type: none;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.75rem;
}

.deployment-content li {
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

.deployment-price-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
}

.deployment-price {
  display: flex;
  align-items: baseline;
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

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }

  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
}
</style>
