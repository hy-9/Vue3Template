<script setup lang="ts">
import Card from "@/components/ui/card/Card.vue";
import fetchTool from "@/request/fetchTool";
import type { dome } from "@/type/dome";
import { ref } from "vue";

const dome = ref<dome>();
async function login() {
	try {
		let res = await fetchTool.request<dome>({
			method: "POST",
			url: "/user/login",
		});
		console.log(res);
	} catch (error) {
		console.log(error);
		ElMessage.error("error");
	}
}

login();
</script>

<template>
	<Card :class="'mt-20 mr-auto ml-auto flex w-64 items-center gap-4 p-4'">
		<div class="shrink-0">
			<img
				class="size-12"
				src="..\..\public\favicon.ico"
				alt="ChitChat Logo"
			/>
		</div>
		<div>
			<div class="text-xl text-black">ChitChat</div>
			<p class="text-slate-500">
				<el-icon><Select /></el-icon>You have a new message!
			</p>
		</div>
	</Card>
</template>
<style></style>
