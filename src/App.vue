<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

console.log(import.meta.env);
</script>

<template>
	<el-button> Default </el-button>
	<div>
		<nav>
			<RouterLink class="hover:text-blue-500" to="/"> Home </RouterLink>
		</nav>
	</div>
	<RouterView />
</template>

<style scoped></style>
