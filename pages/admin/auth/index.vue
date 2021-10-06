<template>
  <div>
    <form @submit.prevent="onSubmit">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              label="Email"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-btn
            type="submit"
          >
            {{ isLogin ? 'Login' : 'Register' }}
          </v-btn>
        </v-row>
      </v-container>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data: () => ({
    isLogin: true,
    valid: true,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'Required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    show1: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => (v && v.length >= 6) || 'Min 8 characters'
    }
  }),
  computed: {
    passwordMatch () {
      return () => this.password === this.verify || 'Password must match'
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('authenticateUser', {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>

</style>
