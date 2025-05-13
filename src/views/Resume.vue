<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapGetters, mapActions } from "vuex";
import AdditionalService from "../components/AdditionalService.vue";
import { Route } from "vue-router"; // Importar Route para tipagem

interface Plan {
  id: number;
  name: string;
  price: number;
  features: string[];
}

@Component({
  components: {
    AdditionalService,
  },
  computed: {
    ...mapState(["selectedPlan", "showAdditionalService", "loading"]),
    ...mapGetters(["getTotal", "getAdditionalServicePrice"]),
  },
  methods: {
    ...mapActions([
      "addAdditionalService",
      "removeAdditionalService",
      "confirmSelection",
    ]),
  },
})
export default class ResumeView extends Vue {
  selectedPlan!: Plan | null;
  showAdditionalService!: boolean;
  loading!: boolean;
  getTotal!: number;
  getAdditionalServicePrice!: number;

  addAdditionalService!: () => void;
  removeAdditionalService!: () => void;
  confirmSelection!: (router: any) => Promise<void>;

  radios: string | null = null;

  onAddService() {
    this.addAdditionalService();
  }

  onRemoveService() {
    this.removeAdditionalService();
  }

  onConfirm() {
    this.confirmSelection(this.$router);
  }
}
</script>

<template>
  <div v-if="selectedPlan" class="section fade-in">
    <router-view></router-view>
    <div v-if="$route.name !== 'finish'">
      <h2 class="section-title">Resumo da contratação</h2>
      <p class="section-subtitle">
        Revise os detalhes da sua contratação antes de prosseguir
      </p>
      <div class="container">
        <AdditionalService
          @close="onAddService()"
          @removeService="onRemoveService()"
        />
        <div class="summary-container">
          <div class="summary-card">
            <div class="summary-header">
              <div class="summary-icon">📋</div>
              <h3>Detalhes do pedido</h3>
            </div>
            <div class="summary-content">
              <div class="summary-item">
                <span>Plano selecionado</span>
                <span class="summary-value">{{ selectedPlan.name }}</span>
              </div>
              <div class="summary-item">
                <span>Valor do plano</span>
                <span class="summary-value"
                  >R$ {{ selectedPlan.price.toFixed(2) }}/mês</span
                >
              </div>
              <div v-if="showAdditionalService" class="summary-item">
                <span>Adicional do Serviço</span>
                <span class="summary-value"
                  >R$ {{ getAdditionalServicePrice.toFixed(2) }}</span
                >
              </div>

              <div class="summary-divider"></div>
              <div class="payment-container">
                <label class="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Pix"
                    v-model="radios"
                  />
                  <div class="payment-container">
                    <div class="payment-icon">📱</div>
                    <strong class="success--text">Pix</strong>
                  </div>
                </label>
                <label class="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cartão de Crédito"
                    v-model="radios"
                  />
                  <div class="payment-container">
                    <div class="payment-icon">💳</div>
                    <strong class="primary--text">Cartão de credito</strong>
                  </div>
                </label>
              </div>
              <div class="summary-total">
                <span>Total</span>
                <span class="summary-value">R$ {{ getTotal.toFixed(2) }}</span>
              </div>
              <h3>Recursos:</h3>
              <ul>
                <li
                  v-for="(feature, index) in selectedPlan.features"
                  :key="index"
                >
                  {{ feature }}
                </li>
              </ul>
            </div>
            <button
              class="confirm-button"
              @click="onConfirm"
              :disabled="loading"
            >
              {{ loading ? "Carregando..." : "Confirmar" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="summary-container">
    <p>Nenhum plano selecionado.</p>
  </div>
</template>

<style scoped>
.confirm-button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #613fc8 0%, #331d6e 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(51, 29, 110, 0.2);
}
.confirm-button:hover {
  box-shadow: 0 6px 15px rgba(51, 29, 110, 0.3);
  transform: translateY(-2px);
}
.payment-option {
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
}
.payment-icon {
  font-size: 2rem;
}
input[type="radio"] {
  margin-right: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
}
.payment-option strong {
  font-size: 1rem;
  font-weight: 500;
}
.payment-option:hover {
  background-color: #f0f0f0;
  border-radius: 0.5rem;
}
.payment-option input:checked + .payment-container {
  border-color: #613fc8;
  background-color: #e9e6f7;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.payment-option input:checked {
  accent-color: #613fc8;
}
.payment-option input:checked + .payment-container .payment-icon {
  color: #613fc8;
}
.payment-option input:checked + .payment-container strong {
  color: #613fc8;
}
.radio-container {
  display: flex;
}
.payment-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
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
  margin-bottom: 2rem;
}

.summary-container {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
  gap: 12px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

.summary-card {
  background-color: #ffffff;
  color: #333;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  height: fit-content;
  width: 100%;
  font-family: "Arial", sans-serif;
}

.summary-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.summary-icon {
  font-size: 1.5rem;
  margin-right: 0.8rem;
}

.summary-header h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 0;
}

.summary-content {
  margin-bottom: 1.5rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

.summary-value {
  font-weight: bold;
  color: #613fc8;
}

.summary-divider {
  border-top: 1px solid #eee;
  margin: 1.5rem 0;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.info-icon {
  font-size: 1rem;
  margin-right: 0.5rem;
  color: #613fc8;
}

.summary-content h3 {
  color: #333;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  border-bottom: none;
  padding-bottom: 0;
}

.summary-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.summary-content li {
  background-color: #f9f9f9;
  border-left: 4px solid #613fc8;
  margin-bottom: 0.6rem;
  padding: 0.8rem 1rem;
  border-radius: 0.3rem;
  font-size: 1rem;
  line-height: 1.4;
}

.summary-content li:last-child {
  margin-bottom: 0;
}
</style>
