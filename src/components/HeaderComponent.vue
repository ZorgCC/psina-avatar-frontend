<template>
  <b-navbar transparent shadow active>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ name: 'home' }" class="p-0">
        <img src="../assets/dog.png" alt="psina" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item
        v-if="auth"
        class="is-link"
        exact-active-class="home-active"
        tag="router-link"
        :to="{ name: 'home' }"
        onclick="this.blur()"
      >
        Home
      </b-navbar-item>
      <b-navbar-item
        href="https://github.com/ZorgCC/psina-avatar-server/wiki"
        rel="noopener noreferrer"
        target="_blank"
        onclick="this.blur()"
      >
        Docs
      </b-navbar-item>
      <b-navbar-item
        href="https://github.com/ZorgCC/psina-avatar-server"
        rel="noopener noreferrer"
        target="_blank"
        onclick="this.blur()"
      >
        Source</b-navbar-item
      >
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link
            v-if="auth"
            class="button is-light is-rounded"
            active-class="home-active"
            :to="{ name: 'settings' }"
          >
            <b-icon icon="cog"></b-icon>
          </router-link>
          <b-button
            v-if="auth"
            class="button is-light is-rounded"
            @click="$emit('logOut')"
          >
            Log out
          </b-button>
          <router-link
            v-else
            class="button is-light is-rounded"
            active-class="login-active"
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
  props: {
    auth: Boolean,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.home-active {
  color: orange !important;
}
.login-active {
  border-color: orange !important;
}
</style>
