<script setup lang="ts">
import { ref } from "vue";

const btn = ref<InstanceType<(typeof import("element-plus"))["ElButton"]>>();
</script>

<template>
  <el-button ref="btn" type="primary" plain>Primary</el-button>
</template>

<style scoped></style>
