<template>
  <div class="navBar">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand>
        <h2 class="text-white"><b>Movie Book</b></h2>
    </b-navbar-brand>
    <div class='navLinks'>
        <router-link to="/top-rated">Top Rated Movies</router-link>
        <router-link to="/upcoming">Upcoming Movie</router-link>
    </div>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "navbar",
};
</script>
<style scoped>
.navBar {
    position:sticky;
    top:0;
    z-index: 2222222;
}
.navbar-brand {
    padding-left:20px;
}
.navLinks {
    display: flex;
    justify-content: center;
    width:73%;
}
.router-link-active{
  border-bottom:1px solid white;
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
  background: blue;
  padding: 15px;
}
a {
  border: none;
  color: white;
  background: none;
  font-weight: 600;
  padding: 10px;
  text-decoration: none;
  margin-left: 20px;
  ;
}
a:hover {
    color: white;
 border-bottom: 1px solid white;
}
#upcoming-button {
  margin-left: 20px;
  border: none;
  color: white;
  background: none;
  font-weight: 600;
  padding: 10px;
}
#upcoming-button:hover {
  margin-left: 30px;
  border: none;
  color: rgb(6, 38, 180);
  background: white;
  padding: 10px;
  border-radius: 5px;
}

</style>