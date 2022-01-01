<template>
  <div class="content">
    <div class="columns is-mobile is-centered">
      <div class="column is-two-thirds">
        <!-- error messages -->
        <article class="message is-danger" v-if="!flags.isSamePassword">
          <div class="message-body">
            パスワードが一致しません
          </div>
        </article>
        <article class="message is-danger" v-if="flags.promptConsent">
          <div class="message-body">
            規約に同意してください
          </div>
        </article>

        <!-- form -->
        <div class="box">
          <form id="form">
            <!-- user name -->
            <div class="field">
                <label class="label" for="name">氏名</label>
                <Input
                  v-model="user.name"
                  id="name"
                  placeholder="氏名"
                  autofocus
                  required
                />
            </div>

            <!-- email address -->
            <div class="field">
              <label class="label" for="email">メールアドレス</label>
              <Input
                v-model="user.email"
                id="email"
                type="email"
                placeholder="メールアドレス"
                required
              />
            </div>

            <!-- password -->
            <div class="field">
              <label class="label" for="password">パスワード(8~16文字)</label>
              <Input
                v-model="user.password"
                id="password"
                type="password"
                placeholder="パスワード"
                required
                maxlength="12"
                minlength="8"
              />
            </div>
            <div class="field">
              <label class="label" for="confirmationPassword">パスワード確認</label>
              <Input
                v-model="user.confirmationPassword"
                id="confirmationPassword"
                type="password"
                placeholder="パスワード確認"
                required
                maxlength="16"
                minlength="8"
              />
            </div>

            <!-- check box -->
            <div class="field">
              <input type="checkbox" id="checkbox" v-model="flags.agreeTerms">
              <label for="checkbox">規約に同意します</label>
            </div>

            <!-- register button -->
            <button class="button is-primary">登録</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Input from '../../components/Input.vue'

export default {
  name: 'SignupForm',
  components: {
    Input
  },
  setup() {
    const router = useRouter()
    const store = useStore()

    const user = store.state.user
    const flags = reactive({
      isSamePassword: true,
      agreeTerms: false,
      promptConsent: false
    })

    onMounted(() => {
      const form = document.getElementById('form')
      form.addEventListener("submit", (event) => {
        event.preventDefault()
        // confirm password
        if (user.password === user.confirmationPassword) {
          flags.isSamePassword = true
        } else {
          flags.isSamePassword = false
        }

        // show message if not agreed terms
        flags.promptConsent = !flags.agreeTerms

        // go to completion page if password is correct
        if (flags.isSamePassword && flags.agreeTerms) {
          router.push({ name: 'signup-completed' })
        }
      })
    })

    watch(user, (newUser) => {
      store.commit("setUser", newUser)
    })

    return {
      user,
      flags
    }
  }
}
</script>
