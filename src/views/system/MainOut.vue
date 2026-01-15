<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

// 缓存路由列表
const keepRouterList = computed(() =>
  useRouter()
    .getRoutes()
    .filter((item) => item.meta?.keepAlive)
    .map((item) => item.name?.toString() || ""),
);

console.log(keepRouterList.value);
</script>

<template>
  <div class="bg-accent flex h-dvh w-dvw flex-col overflow-hidden">
    <div class="navbar bg-base-100 mx-2 my-1 w-auto shadow-sm">
      <div class="flex-none">
        <RouterLink class="menu menu-horizontal text-xl" to="home"
          >Dome</RouterLink
        >
        <ul class="menu menu-horizontal px-1">
          <li>
            <RouterLink to="chart">图表</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="h-0 flex-1">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <keep-alive :include="keepRouterList">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
