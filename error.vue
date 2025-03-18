<template>
  <NuxtLayout>
    <main class="mx-auto flex w-full container flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
      <template v-if="error.statusCode === 404">
        <p class="text-base/8 font-semibold text-indigo-600">404!</p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl">Dang</h1>
        <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          {{ error.message }}
        </p>
      </template>

      <template v-else>
        <p class="text-base/8 font-semibold text-indigo-600">404</p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl">Dang</h1>
        <p class="mt-6 text-lg text-medium text-pretty text-gray-500 sm:text-xl/8">
          {{ error.message }}
        </p>
      </template>
      <div class="mt-10">
        <a @click="handleError" class="text-sm/7 font-semibold text-indigo-600"><span aria-hidden="true">&larr;</span>
          Back to home</a>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>