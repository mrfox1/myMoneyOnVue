<template>
<header id="header">
    <nav class="left">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/income">Income</router-link>
            </li>
            <li>
                 <router-link to="/costs">Costs</router-link>
            </li>
            <li>
                Your income: {{ profitsSum }}
            </li>
            <li>
                Your costs: {{ costsSum }}
            </li>
            <li>
                The balance is: {{ getBalance }}
            </li>
        </ul>
    </nav>
    <nav>
        <ul>
            <li>
                <a href="#">Sign In</a>
            </li>
            <li>
                <a href="#">Sign Out</a>
            </li>
        </ul>
    </nav>
</header>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('sumOfProfits');
            this.$store.dispatch('sumOfCosts');
        },

        computed: {
            profitsSum() {
                return this.$store.getters.getSum;
            },
            costsSum() {
                return this.$store.getters.getCostsSum;
            },
            getBalance() {
               return this.$store.getters.getSum - this.$store.getters.getCostsSum;
            }
        }
    }
</script>

<style scoped>
    #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(204, 204, 204);
    padding: 0 20px;
  }

  .left {
    font-weight: bold;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: hsl(0, 16%, 37%);
    font-size: 1.7em;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #604a61;
  }
</style>

