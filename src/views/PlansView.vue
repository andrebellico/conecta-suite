<script lang="ts">
import Cards from "@/components/Cards.vue";
import Header from "@/components/Header.vue";
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapGetters, mapActions } from "vuex";

@Component({
  components: {
    Header,
    Cards,
  },
  computed: {
    ...mapState(["plans", "selectedPlan", "currentStep"]),
  },
  methods: {
    ...mapActions(["fetchPlans", "selectPlan", "updateStep"]),
  },
})
export default class PlansView extends Vue {
  plans!: { id: number; name: string; price: number; features: string[] }[];
  selectedPlan!: {
    id: number;
    name: string;
    price: number;
    features: string[];
  } | null;
  currentStep!: number;
  fetchPlans!: () => Promise<void>;
  selectPlan!: (
    plan: { id: number; name: string; price: number; features: string[] } | null
  ) => void;
  updateStep!: (step: number) => void;

  mounted() {
    this.fetchPlans();
  }
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
