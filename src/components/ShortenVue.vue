<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class=" flex-col w-full max-w-lg bg-gray-200 shadow rounded-lg p-8 text-center">
      <h1 class="text-4xl font-bold mb-6">SHORTEN URL'S</h1>
      <div class="flex items-center gap-4 mb-4">
        <label
          class="text-lg font-medium text-slate-700 whitespace-nowrap"
          for="shorten-url"
        >
          URL a acortar:
        </label>
        <input
          id="shorten-url"
          v-model="longUrl"
          type="text"
          placeholder="Ingresa una URL para acortar"
          class="flex-1 border border-gray-700 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>
      <button
        type="button"
        class="mt-4 inline-flex items-center justify-center rounded-md bg-sky-600 px-6 py-3 text-base font-semibold text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        Acortar
      </button>
      
    </div>
  </div>

  <div class="mt-6 p-4 bg-slate-100 rounded-md text-left">
        <p class="text-sm font-medium text-slate-600 mb-2">URL ingresada:</p>
        <p class="text-base text-slate-800 break-all">
          {{ longUrl || "Ninguna URL ingresada" }}
        </p>
      </div>
</template>

<script setup>
import { ref } from "vue";
const longUrl = ref("");
</script>
