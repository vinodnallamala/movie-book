<template>
  <div class="movie">
    <div class="image-block"  v-bind:style="{ backgroundImage: 'url(http://image.tmdb.org/t/p/w500/'+movie.poster_path +')'}">
     <!-- <img class="banner" :src="require('@/assets/banner.jpg')" alt="pic" /> -->
    </div>
    <div class="movieTitle">
        <h5 class="movieName">{{ movie.title }}</h5>
        <h6 class="rating "> <span class="text-secondary">IMDB</span> {{ movie.vote_average }}</h6>
        <div class='buttons'>
            <button class="bookNow"> BOOK NOW</button>
            <button class="moreInfo"> MORE INFO</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "movieInfo",
  props: {
    movie: Object,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.image-block {
  width: 100%;
  height: 360px;
  position: relative;
  overflow: hidden;
  background-position: center;
  background-size: cover;
}
.movie {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 200;
  width: 260px;
}
.movie:hover {
  box-shadow: 5px 8px 15px 5px rgba(0, 0, 0, 0.7);
}
.movieTitle {
  font-weight: 600;
  height: 160px;
  background-color: #f4f5f6;
  padding:11px;
  position: relative;
}
.banner {
  height: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}
.rating {
    padding-top:10px;
}
.bookNow {
    border:none;
    background-color: #2aaed9;
    border:none;
    border-radius: 40px;
    padding:5px 10px;
    color:white;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 600;

}
.bookNow:hover {
    background-color: #028db8;
}
.moreInfo {
     border:none;
    background-color: #f4f5f6;
    border:1px solid gray;
    border-radius: 40px;
    padding:5px 10px;
    margin-right: 10px;
    font-size: 14px;
}
.moreInfo:hover {
    color:white;
    background-color: black;
   
}
.buttons {
    position: absolute;
    bottom: 20px;
}
.rating span {
    font-size:14px;
}
.movieName {
    color:#2b55a2;
}
</style>