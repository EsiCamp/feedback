<template>
  <div :dir="direction">
    <NuxtPage />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale, locales } = useI18n();

const direction = computed(() => {
  const currentLocale = locales.value.find((l) => l.code === locale.value);
  return currentLocale?.dir || "ltr";
});
</script>
