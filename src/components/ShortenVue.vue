<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">
        Acortador de URL
      </h2>

      <form id="form" class="flex flex-col gap-4">
        <input
          id="urlInput"
          type="url"
          required
          placeholder="https://ejemplo.com"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          class="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Acortar
        </button>
      </form>

      <div class="mt-6 text-center">
  <p class="text-sm text-gray-500 mb-1">URL corta:</p>
  <p
    id="result"
    class="text-blue-600 font-medium break-words"
  ></p>
</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const form = document.getElementById("form");
  const input = document.getElementById("urlInput");
  const result = document.getElementById("result");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const url = input.value.trim();

    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    });

    const text = await response.text();

    if (!response.ok) {
      result.textContent = "Error: " + text;
      return;
    }

    const data = JSON.parse(text);

    if (data.shortURL) {
      result.innerHTML = `<a class="text-blue-600 underline" href="${data.shortURL}" target="_blank">${data.shortURL}</a>`;
    } else {
      result.textContent = text;
    }
  });
});
</script>