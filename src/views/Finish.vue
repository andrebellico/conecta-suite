<script setup>
import FinishCard from "../components/FinishCard.vue";
import { defineProps } from "vue";

const props = defineProps({
  planId: {
    type: [String, Number],
    required: true,
  },
  total: {
    type: [String, Number],
    required: true,
  },
  showService: {
    type: [Boolean, String],
    required: true,
  },
});
</script>

<template>
  <div>
    <FinishCard
      :planId="props.planId"
      :total="props.total"
      :showService="props.showService"
    />
  </div>
</template>
