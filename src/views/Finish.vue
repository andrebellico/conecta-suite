<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action } from "vuex-class"; // Importar decorators
import FinishCard from "../components/FinishCard.vue";

interface Plan {
  id: number;
  name: string;
  price: number;
  features: string[];
}

@Component({
  components: {
    FinishCard,
  },
})
export default class FinishView extends Vue {
  @State("selectedPlan") selectedPlan!: Plan | null;
  @State("showAdditionalService") showAdditionalService!: boolean;
  @Getter("getTotal") getTotal!: number;

  get planId(): number | undefined {
    const selectedPlan = this.$store.state.selectedPlan as Plan | null;
    return selectedPlan?.id;
  }
}
</script>

<template>
  <div>
    <FinishCard
      :selectedPlan="selectedPlan"
      :total="getTotal"
      :showService="showAdditionalService"
    />
  </div>
</template>
