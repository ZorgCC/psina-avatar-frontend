<template>
  <div id="app">
    <div class="container">
      <HeaderComponent @loggedOut="loggedOut" :auth="isAuth" :user="user" />
      <router-view @checkAuth="checkAuth" :user="user"></router-view>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'

export default {
  components: { HeaderComponent },
  data() {
    return {
      isAuth: null,
      user: '',
    }
  },
  methods: {
    loggedOut() {
      localStorage.removeItem('jwt')
      localStorage.removeItem('user')
      if (localStorage.getItem('jwt') == null) {
        this.checkAuth()
        this.$router.push('login')
      }
    },
    async checkAuth() {
      this.isAuth = localStorage.getItem('jwt') != null
      if (this.isAuth) {
        await this.$http
          .get('me', {
            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
          })
          .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data.user))
            this.user = response.data.user
          })
          .catch(function (error) {
            console.error(error.response)
          })
      }
    },
  },
  async mounted() {
    await this.checkAuth()
  },
}
</script>
