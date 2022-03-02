<template>
  <div>
    <h2>settings</h2>
    <p>user data from backend: {{ user }}</p>
  </div>
</template>

<script>
export default {
  name: 'SettingsView',
  props: {
    user: {
      type: [String, Object],
    },
  },
}
</script>

<style scoped></style>
