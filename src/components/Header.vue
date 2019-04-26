<template>
    <header id="header">
        <nav class="f-bold">
            <ul class="menu main-menu">
                <li class="menu-item">
                    <router-link to="/" exact>Home</router-link>
                </li>
                <li class="menu-item">
                    <router-link to="/income">Income</router-link>
                </li>
                <li class="menu-item">
                     <router-link to="/costs">Expenses</router-link>
                </li>
            </ul>
        </nav>

        <div class="sums">
            <span class="sum">Your income: {{ profitsSum }}</span>
            <span class="sum">Your costs: {{ costsSum }}</span>
            <span class="sum">The balance is: {{ getBalance }}</span>
        </div>

        <nav>
            <ul class="menu">
                <li class="menu-item">
                    <a href="#">Sign In</a>
                </li>
                <li class="menu-item">
                    <a href="#">Sign Out</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        beforeCreate() {
            this.$store.dispatch('getIncomesFromApi');
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
        background-color: #ecf0f1;
        padding: 0 20px;
    }

  nav { height: 100%; }
  .menu-item { margin: 0 16px; }

  .menu-item a {
      text-decoration: none;
      color: #333;
  }
  .main-menu .menu-item a { font-size: 1.5em; }
  .menu-item a.router-link-active { border-bottom: 4px solid #27ae60; }
  .menu-item a:hover { color: #27ae60; }

  .sum { padding: 0 5px; }
  .sum:first-child { border-right: 1px solid #27ae60; }
  .sum:last-child { border-left: 1px solid #27ae60; }
</style>

