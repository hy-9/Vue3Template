<script setup lang="ts">
import fetchTool from "@/request/fetchTool";
import type { dome } from "@/type/dome";
import { ref } from "vue";

const dome = ref<dome>();

let res = await fetchTool.request<dome>({
	method: "POST",
	url: "/user/login",
});
console.log(res);
</script>

<template>
	<div
		class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg"
	>
		<div class="shrink-0">
			<img
				class="size-12"
				src="..\..\public\favicon.ico"
				alt="ChitChat Logo"
			/>
		</div>
		<div>
			<div class="text-xl font-medium text-black">ChitChat</div>
			<p class="text-slate-500">You have a new message!</p>
		</div>
	</div>
</template>
<style></style>
