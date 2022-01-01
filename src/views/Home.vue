<template>
  <div class="content" id="home">
      <div class="has-text-centered">
        <router-link :to="{ name: 'signup-form' }">
          <button class="button is-primary is-large">新規登録</button>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
