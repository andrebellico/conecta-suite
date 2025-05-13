import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Definindo a interface para um plano para melhor tipagem (opcional, mas recomendado com TypeScript)
interface Plan {
  id: number;
  name: string;
  price: number;
  features: string[];
}

interface State {
  plans: Plan[];
  selectedPlan: Plan | null;
  currentStep: number;
  additionalServicePrice: number;
  showAdditionalService: boolean;
  total: number;
  loading: boolean; // Adicionar estado de loading para a confirmação
}

export default new Vuex.Store<State>({
  state: {
    plans: [],
    selectedPlan: null,
    currentStep: 1,
    additionalServicePrice: 50, // Preço do serviço adicional
    showAdditionalService: false,
    total: 0, // O total será calculado com base no plano e serviço
    loading: false,
  },
  getters: {
    allPlans: (state) => state.plans,
    currentSelectedPlan: (state) => state.selectedPlan,
    getCurrentStep: (state) => state.currentStep,
    getAdditionalServicePrice: (state) => state.additionalServicePrice,
    getShowAdditionalService: (state) => state.showAdditionalService,
    getTotal: (state) => state.total,
    isLoading: (state) => state.loading,
    // Getter para encontrar um plano pelo ID
    findPlanById: (state) => (planId: number) => {
      return state.plans.find(plan => plan.id === planId) || null;
    },
  },
  mutations: {
    setPlans(state, plans: Plan[]) {
      state.plans = plans;
    },
    setSelectedPlan(state, plan: Plan | null) {
      state.selectedPlan = plan;
      // Recalcular o total ao selecionar um plano
      state.total = plan ? plan.price + (state.showAdditionalService ? state.additionalServicePrice : 0) : 0;
    },
    setCurrentStep(state, step: number) {
      state.currentStep = step;
    },
    setShowAdditionalService(state, show: boolean) {
      state.showAdditionalService = show;
      // Recalcular o total ao adicionar/remover serviço
      state.total = (state.selectedPlan ? state.selectedPlan.price : 0) + (show ? state.additionalServicePrice : 0);
    },
    setLoading(state, loading: boolean) {
      state.loading = loading;
    },
  },
  actions: {
    fetchPlans({ commit }) {
      const plansData: Plan[] = [
        {
          id: 1,
          name: "Básico",
          price: 49.9,
          features: [
            "Acesso a recursos básicos",
            "Até 3 usuários",
            "Suporte por email",
            "5GB de armazenamento",
          ],
        },
        {
          id: 2,
          name: "Profissional",
          price: 99.9,
          features: [
            "Todos os recursos do plano Básico",
            "Até 10 usuários",
            "20GB de armazenamento",
            "Relatórios avançados",
          ],
        },
        {
          id: 3,
          name: "Empresarial",
          price: 199.9,
          features: [
            "Todos os recursos do plano Profissional",
            "Usuários ilimitados",
            "100GB de armazenamento",
            "API completa",
            "Personalização avançada",
          ],
        },
      ];
      commit("setPlans", plansData);
    },
    selectPlan({ commit }, plan: Plan | null) {
      commit("setSelectedPlan", plan);
    },
    updateStep({ commit }, step: number) {
      commit("setCurrentStep", step);
    },
    // Action para adicionar o serviço adicional
    addAdditionalService({ commit, state }) {
      if (!state.showAdditionalService) {
        commit("setShowAdditionalService", true);
      }
    },
    // Action para remover o serviço adicional
    removeAdditionalService({ commit, state }) {
      if (state.showAdditionalService) {
        commit("setShowAdditionalService", false);
      }
    },
    // Action para lidar com a confirmação (simulando um processo assíncrono)
    async confirmSelection({ commit, state, getters }, router) {
      commit("setLoading", true);
      // Simular um delay de 2 segundos para a "confirmação"
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Após a "confirmação", navegar para a página de finalização
      // Passando os dados necessários via params (ou acessando diretamente do store na página de destino)
      router.push({
        name: "finish",
        params: {
          planId: state.selectedPlan?.id,
          total: state.total,
          showService: state.showAdditionalService,
        },
      });

      commit("setLoading", false);
    },
  },
  modules: {},
});
