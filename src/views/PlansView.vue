<script lang="ts">
import Cards from "@/components/Cards.vue";
import Header from "@/components/Header.vue";
import { Component, Vue } from "vue-property-decorator";

export const plans = [
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
@Component({
  components: {
    Header,
    Cards,
  },
})
export default class PlansView extends Vue {
  plans = plans;
  selectedPlan = null;
  currentStep = 1;
}
</script>

<template>
  <div class="home">
    <Cards
      :plans="plans"
      :selectedPlan="selectedPlan"
      :currentStep="currentStep"
    />
  </div>
</template>
