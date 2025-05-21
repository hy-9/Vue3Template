<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

console.log(import.meta.env);
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
