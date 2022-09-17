<template>
    <div class="outer-container">
        
        <div class="container" >

                <!-- captions -->
                <!-- <div class="processing" v-if="processing" ><h2>Processing..</h2></div> -->
                <div class="loader" v-if="processing"></div>
                <transition name="slide" mode="in-out">
                <div class="caption" v-if="caption != '' ">
                    <h2 class="caption-logo">Caption</h2>
                    <p class="data">{{ caption }}  </p>
                </div>
                </transition>

                <!-- celebrities -->
                <transition name="slide" mode="in-out">
                <div class="objects" v-if="celebrities != '' ">
                    <h2 class="object-logo">Celebrities</h2>
                    <div v-for="(celebrity, index) in celebrities" :key="celebrity.id">
                        <div v-if="index<5">
                        <p class="data"> <b>{{ index+1 }}.</b>    {{ celebrity.name }} <br>  
                        <i> {{ parseInt(celebrity.confidence * 100) }}% accurate </i>  <br></p>
                        </div>
                    </div>
                </div>
                </transition>

                <!-- faces -->
                <transition name="slide" mode="in-out">
                <div class="faces" v-if="faces != '' ">
                    <h2 class="face-logo">Faces</h2> 
                    <div v-for="(face, index) in faces" :key="face.id">
                        <p class=data>
                        <b> {{ index+1 }}</b>: <br>   
                        Age: {{ face.ageRange1 }} - {{ face.ageRange2 }} <br>
                        Cultural Appearence: {{ face.skinTone }} <br>
                        Gender: {{ face.gender }} <br></p> 
                    </div>
                </div>
                </transition>

                <!-- objects -->
                <transition name="slide" mode="in-out">
                <div class="objects" v-if="objects != '' ">
                    <h2 class="object-logo">Objects</h2>
                    <div v-for="(object, index) in objects" :key="object.id">
                        <div v-if="index<5">
                        <p class="data"> <b>{{ index+1 }}.</b>    {{ object }} </p>     
                        </div>
                    </div>
                </div>
                </transition>

                <!-- emotions -->
                <transition name="slide" mode="in-out">
                <div class="emotions" v-if="emotions != ''">
                    <h2 class="emotion-logo">Emotions</h2>
                    <div v-for="(emotion, index) in emotions" :key="emotion.id">
                        <div  v-if="index<5">
                        <p class="data"><b>face {{ index+1 }}:</b> <br>
                            {{ (emotion.accuracy*100).toFixed(0) }}%     {{ emotion.emotion }} </p>  
                        </div>
                    </div>
                </div>
                </transition>

                <div class="space"></div>

        </div>
    </div>
</template>¨


<script>
export default {
    data () {
        return {
        }
    },
    computed: {
        caption () {
             return this.$store.getters.caption
        },
        celebrities () {
             return this.$store.getters.celebrities
        },
        faces () {
            return this.$store.getters.faces
        },
        objects () {
            return this.$store.getters.objects
        },
        emotions () {
            return this.$store.getters.emotions
        },
        currentImage () {
            return this.$store.getters.currentImage
        },
        processing () {
            return this.$store.getters.processing
        }
    }
}
</script>


<style scoped>
* {
    /* border:1px solid black; */
}

.space {
    height:500px;
}
.outer-container {
    max-width:1000px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin:auto;
    height:500px;
    /* margin-bottom:500px; */
    justify-content: center;

}
.processing {
}
.container {
    display: flex;
    flex-direction: row;
    height:auto;
    margin: 0 auto;

}

.face {
    margin:5px;
}
.caption, .faces, .objects, .emotions, .processing {
    width:180px;
    margin:0 auto;
    margin-right:8px;
    margin-top:25px;
    border-left:rgb(3, 43, 61) 2px solid;
    border-radius:4px;
    max-height:300px;
    background: rgba(0, 5, 8, 0.5);
    padding-left:10px;
    overflow-y:auto;
    display: inline-block
}
.caption-logo, .face-logo, .object-logo, .emotion-logo {
    margin-left:35px;
    font-size:17px;
}
.emotion b {
    text-align: start !important;
}
.data {
    font-size:13px;
}

/* SLIDES */
.slide-enter-active {
  animation: slide-in 550ms ease-out forwards;
}
 .slide-leave-active {
    animation: slide-out 550ms ease-out forwards;
  } 
@keyframes slide-in {
  from {
    transform: translateX(300px);
    opacity: 0.8;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
 @keyframes slide-out {
    from {
      transform: translateX(0);
      opacity:0.5;
    }
    to {
      transform: translateX(-300px);
      opacity: 0;
    }
  } 
  /* SLIDES */

  .loader {
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #0d4a72; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin-top:35px;
  position:absolute;
  right:47%;
  background: rgba(0,0,0,0.75);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>