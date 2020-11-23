<template>
    <div class="container">
    
      <!-- SEARCH FIELD -->
      <div class="searchField">
        <input v-model="searchTerm" type="text" placeholder="Search for anything">
        <button @click="search(searchTerm)">Search</button>
      </div>

      <!-- IMAGES -->
      <div class="images-container" >
        <!-- loop images-->
        <div class="image" v-for="image in images" :key=image.id>
          <div @click="$emit('selectimage', image)" class="img-container" >
            <img class="img" v-bind:src="image" >
          </div>
        </div>
      </div>

    </div>
</template>


<script>
import axios from 'axios'

export default {
    data () {
    return {
      searchTerm: '',
      selectedImage: '',
      images: []
      }
    },
    methods:  {
        // search images
        search (searchTerm) {
        
        var images = []
        console.log('Search term: ', searchTerm)
        const options = {
        method: 'GET',
        url: 'https://bing-image-search1.p.rapidapi.com/images/search',
        params: {q: this.searchTerm},
        headers: {
            'x-rapidapi-key': '624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8',
            'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com'
        }};
        axios.request(options).then(function (response) {
            response = response.data.value
            Object.entries(response).forEach( image => {
            const newImage = image[1].contentUrl
            images.push(newImage)
            })
        }).catch(function (error) {
            console.error(error);
        });
        this.images = images
        }
    }//methods  
}
</script>

<style scoped>
* {

}
.container {
  margin-top:50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height:auto;
  width:100%;
  justify-content: center;
}
.searchField {
  max-width:700px;
  margin:auto;
}
.images-container {
  height:500px;
  width: 95%;
  max-width:1100px;
  margin:auto;
  overflow-y:scroll;
  overflow:auto;
  border:2px solid black;
}
input[type=text] {
  width:400px;
  height:33px;
  margin-bottom: 50px;
}
button {
  margin:5px;
  height:33px;
  background: lightblue;
}
.img {
  max-width:250px;
  max-height:175px;
}
.img-container {
  display: inline-block;
  border:2px solid rgba(0,0,0,0)
}
.img-container:hover {
  border:2px solid black;
}
/*IMAGES LIST */
.image {
  display: inline;
  padding:10px 5px;
  cursor: pointer;
  height:500px;
  overflow:scroll;
}

</style>