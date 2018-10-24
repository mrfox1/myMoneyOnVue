<template>
<header id="header">
    <div class="left">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <a href="#">Income</a>
            </li>
            <li>
                 <a href="#">Costs</a>
            </li>
        </ul>
    </div>
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
    color: hsl(0, 20%, 65%);
    font-size: 1.7em;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #604a61;
  }
</style>

