<template>
    <div>
        <h2 class='upcomingMovieHeadline'>Upcoming Movies... </h2>
        <div class='upcomingMovies'>
            <div v-for='upcomingMovie in upcomingMovieList' :key="upcomingMovie.id">
                <movie-info :movie='upcomingMovie' />
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
import movieInfo from './movieInfo.vue'
Vue.use(VueAxios, axios);
export default {
  components: { movieInfo },
    name: 'upcomingMovies',

    data(){
        return {
            upcomingMovieList : [],
            pageNumber:1,
        }
    }, 
    mounted(){
        this.fetchData()
        
    },
    methods: {
        fetchData(){
            axios
            .get(
                "https://api.themoviedb.org/3/movie/upcoming?api_key=9b469fe5be8ef2f84fcb1b7170120e34&page="+this.pageNumber 
            )
            .then((response) => {
                this.upcomingMovieList=this.upcomingMovieList.concat(response.data.results)
                this.pageNumber++
            });

        }
    },
}
</script>
<style scoped>
.upcomingMovies {
    padding-top:20px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
    row-gap: 30px;
}
.upcomingMovieHeadline {
    margin-top:10px;
    margin-left:30px;
    margin-top:20px;
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