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
                rounded
                icon="account"
                value="johnsilver"
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
                rounded
                icon="lock"
                value="123"
                type="password"
                @focus="isValid = true"
              ></b-input>
            </b-field>
            <div class="buttons is-right">
              <b-button
                class="m-0"
                rounded
                onclick="this.blur()"
                @click.prevent="isValid = !isValid"
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
    }
  },
}
</script>

<style scoped lang="scss"></style>
