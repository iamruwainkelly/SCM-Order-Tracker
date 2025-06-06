<template>
  <div id="app" class="min-h-screen bg-dark-bg">
    <router-view />
  </div>
</template>

<script setup>
// Main App component for SCM Order Tracker
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #0F0F0F;
  color: #E5E5E5;
}
</style>
