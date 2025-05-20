<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
const a = ref({ n: 1 });
const b = ref(1);
console.log(a);
console.log(b);
</script>

<template>
	<el-button>Default</el-button>
	<div>
		<nav>
			<RouterLink to="/"> Home </RouterLink>
		</nav>
	</div>
	<RouterView />
</template>

<style scoped></style>
