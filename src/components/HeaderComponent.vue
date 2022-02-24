<template>
  <b-navbar transparent shadow active>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ name: 'home' }" class="p-0">
        <img src="../assets/dog.png" alt="psina" width="50" height="50" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item class="is-link" tag="router-link" :to="{ name: 'home' }">
        Home
      </b-navbar-item>
      <b-navbar-item href="#"> Docs</b-navbar-item>
      <b-navbar-item href="#"> Source</b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link
            class="button is-light is-rounded"
            :to="{ name: 'login' }"
          >
            Log in
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: 'HeaderComponent',
}
</script>
<style lang="scss"></style>
