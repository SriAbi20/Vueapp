<template>
  <div id="home">
    <nav class="navbar navbar-expand-sm navbar-dark bg-success">
    <div class="container">
        <router-link to="/" class="navbar-brand">
      <i class="fa fa-shopping-cart"></i>BigBasket 
      </router-link>  
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link> 
            </li>
             <li class="nav-item">
                <router-link to="/ProductDisplay" class="nav-link">Products</router-link> 
            </li>
            <li class="nav-item">
                <router-link to="/ProductAdmin" class="nav-link">Admin</router-link> 
            </li>
        </ul>
      </div> 
      </div> 
      </nav>
    <router-view>
      </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style>
#home{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
