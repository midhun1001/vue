<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="Email" />
    <input type="password" name="password" v-model="password" placeholder="Password" />
    <button @click="register" type="button" name="button">Register</button>
    {{ this.$store.state.username }}
  </div>
</template>

<script>
import Authentication from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: 'midhun', // Default value
      password: null,
      count: this.$store.state.count
    }
  },
  computed: {
    test () {
      return this.$store.getters.increaseCount;
    }
  },
  watch: {
    password (value) { // Onchange of the value
      console.log('password has changed');
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'Please fill';
    }, 2000);
  },
  methods: { // functions will come here
    async register () {
      const response = await Authentication.register({
        email: this.email,
        password: this.password
      });
      this.$store.dispatch('setValue', response.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
