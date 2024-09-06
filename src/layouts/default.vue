<script setup lang="ts">
</script>

<style>
@import url(../assets/styles/base.css);
@import url(../assets/fonts/fonts.css);

.layout-enter-active,
.layout-leave-active {
  transition: filter 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: blur(20px);
}
</style>

<template>
    <div class="pageWrapper">
        <slot />
    </div>
</template>

