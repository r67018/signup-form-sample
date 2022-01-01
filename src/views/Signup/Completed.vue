<template>
  <div class="content">
    <div class="columns is-mobile is-centered">
      <div class="column is-two-thirds">
        <div class="box">
          <p>以下の内容で登録しました。</p>
          <table class="table is-bordered is-fullwidth">
            <tr>
              <th>氏名</th>
              <td>{{ user.name }}</td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>{{ user.email }}</td>
            </tr>
            <tr>
              <th>パスワード</th>
              <td>{{ user.password }}</td>
            </tr>
          </table>
        </div>
        <div class="has-text-centered">
          <router-link :to="{ name: 'home' }">
            <button class="button is-info">終了</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'SignupCompleted',
  setup() {
    const router = useRouter()
    const store = useStore()
    const user = store.state.user

    // disable browser back
    addEventListener("popstate", () => {
      router.push({ name: 'signup-completed' })
    })

    return {
      user
    }
  }
}
</script>
