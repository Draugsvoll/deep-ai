<template>
  <div id="app">
    <!-- SEARCH FIELD -->
    <div>
      <input v-model="searchTerm" type="text">
      <button @click="search(searchTerm)">Search</button>
    </div>
    <!-- IMAGES -->
    <div class="image" v-for="image in images" :key=image.id>
      <div @click="selectImage(image)" class="img-container">
        <img v-bind:src="image" >
      </div>
    </div>
    <!-- SELECTED IMAGE -->
    <div class="selected-img-container">
      <div>Selected Image:</div>
      <img class="selected-img" v-bind:src="selectedImage" alt="" srcset="">
      <div>Get caption</div>
      <button @click="getCaption">Caption</button>
      <button >Emotions</button>
      <button >Objects</button>
      <button >More</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data () {
    return {
      searchTerm: '',
      selectedImage: '',
      images: []
    }
  },
  components: {

  },
  methods: {
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
    },
    // select an image
    selectImage(image) {
      this.selectedImage = image
      console.log('image select: ', image)
      
    },
    // get Caption
    getCaption () {
      const data = `image=${this.selectedImage}`;

      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          // console.log(this.responseText);
          var response = this.responseText
          var response1 = response.split(":")
          var response2 = response1[1].split(",")
          console.log(response2[0])
        }
      });
      xhr.open("POST", "https://deepai-deepai-computer-vision-v1.p.rapidapi.com/api/neuraltalk");
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("api-key", "a570693f-0601-4674-9737-0c617e3668d6");
      xhr.setRequestHeader("x-rapidapi-key", "624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8");
      xhr.setRequestHeader("x-rapidapi-host", "deepai-deepai-computer-vision-v1.p.rapidapi.com");
      xhr.send(data);
    }
  }//methods

}
</script>

<style scoped>
input[type=text] {
  width:400px;
}
img {
  max-width:300px;
}
.img-container {
  display: inline-block;
  border:2px solid rgba(0,0,0,0);
}
.img-container:hover {
  border:2px solid black;
}
.image {
  display: inline;
  padding:10px 5px;
  cursor: pointer;
}

</style>
