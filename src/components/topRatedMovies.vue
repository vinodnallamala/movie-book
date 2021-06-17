<template>
  <div>
    <h2 class='topRatedMovieHeadLine'>Top Rated Movies...</h2>
    <div class="movieList">
        <div class="movie" v-for="(movie, index) in topRatedMovieList" :key="index" >
            <movie-info :movie='movie' />
            
            <!-- <li>
                <p>{{movie.title}}</p>
                <p>{{movie.id}}</p>
                <p>{{movie.release_date}}</p>
            </li> -->
        </div>
    </div>
    <div class='viewMoreBtn'>
        <button @click='fetchData'>View More</button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import movieInfo from './movieInfo.vue';
Vue.use(VueAxios, axios);



export default {
  components: { movieInfo },
  name: "topRatedMovies",
  data() {
    return {
      topRatedMovieList: [],
      pageNumbers:1
    };
  },
  mounted() {
        this.fetchData()
    },
    methods: {
      fetchData(){
        axios
        .get(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=9b469fe5be8ef2f84fcb1b7170120e34&page="+this.pageNumbers
        )
        .then((response) => {
            this.topRatedMovieList = this.topRatedMovieList.concat(response.data.results)
            this.pageNumbers++
        });
      }
    },
};
</script>
<style scoped>
.movie {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 200;
  width: 260px;
}
.movieList {
 cursor: pointer;
  padding-top:20px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  position: relative;
  row-gap: 30px;
   justify-items: center;
}

.topRatedMovieHeadLine {
    margin-top:10px;
    margin-left:30px;
}
.viewMoreBtn {
    text-align: center;
    width: 100%;
}
.viewMoreBtn button {
    border:1px solid gray;
    background:none;
    padding:10px 15px;
    font-weight: 600;
    border-radius: 5px;
    margin-bottom: 30px;
    margin-top:30px;

}
.viewMoreBtn button:hover {
    background:black;
    color:white;
}
</style>