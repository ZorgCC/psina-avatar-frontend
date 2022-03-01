<template>
  <div class="columns is-centered">
    <div class="column is-two-fifths">
      <div class="hero is-fullheight-with-navbar">
        <div class="hero-body">
          <form
            class="content"
            style="width: 100%; transform: translateY(-50%)"
          >
            <p v-if="!isValid" class="has-text-danger has-text-centered">
              Incorrect username or password! Please try again!
            </p>
            <b-field
              label-position="on-border"
              :type="{ 'is-danger': !isValid }"
            >
              <template #label>
                <span class="has-text-grey">Username</span>
              </template>
              <b-input
                v-model="username"
                rounded
                icon="account"
                placeholder="username"
                @focus="isValid = true"
              ></b-input>
            </b-field>
            <b-field
              label-position="on-border"
              :type="{ 'is-danger': !isValid }"
            >
              <template #label>
                <span class="has-text-grey">Password</span>
              </template>
              <b-input
                v-model="password"
                rounded
                icon="lock"
                value="123"
                placeholder="password"
                @focus="isValid = true"
              ></b-input>
            </b-field>
            <div class="buttons is-right">
              <b-button
                class="m-0"
                rounded
                onclick="this.blur()"
                type="submit"
                @click.prevent="handleSubmit"
              >
                Log in
              </b-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      isValid: true,
      username: null,
      password: null,
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('loggedIn') // TODO убрать
      if (this.password.length > 0 && this.username.length > 0) {
        this.$http
          .post('https://avatars.zorg.cc/api/login', {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            // localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('jwt', response.data.jwt_token)
            if (localStorage.getItem('jwt') != null) {
              this.$emit('loggedIn')
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl)
              } else {
                this.$router.push('home')
              }
            }
          })
          .catch(function (error) {
            console.error(error.response)
          })
      }
    },
  },
}
</script>

<style scoped lang="scss"></style>
