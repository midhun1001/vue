<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="Email" />
    <input type="password" name="password" v-model="password" placeholder="Password" />
    <button @click="register" type="button" name="button">Register</button>
  </div>
</template>

<script>
import Authentication from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: null, // Default value
      password: null
    }
  },
  watch: {
    email (value) { // Onchange of the value
      console.log('Email has changed');
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
      })
      console.log(response.data);
      console.log('next');
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
