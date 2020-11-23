<template>
    <div class="outer-container">
        <h2>Output</h2>

        <div class="container">
            <div class="caption">
                <h3>Caption</h3>
                {{ caption }}
            </div>

            <div class="faces">
                <h3>Faces</h3>
                <div v-for="(face, index) in faces" :key="face.id">
                    <h4 class="face">{{ index+1 }} </h4> 
                    Age: {{ face.ageRange1 }} - {{ face.ageRange2 }} <br>
                    Cultural Appearence: {{ face.skinTone }} <br>
                    Gender: {{ face.gender }} <br>
                </div>
            </div>

            <div class="objects">
                <h3>Objects</h3>
                <div v-for="(object, index) in objects" :key="object.id">
                    <div v-if="index<5">
                       {{ index+1 }}.    {{ object }}    
                    </div>
                </div>
            </div>

            <div class="emotions">
                <h3>Emotions</h3>
                <div v-for="(emotion, index) in emotions" :key="emotion.id">
                    <div  v-if="index<5">
                       <b>face {{ index+1 }}:</b> <br>
                           {{ (emotion.accuracy*100).toFixed(0) }}%     {{ emotion.emotion }}  
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>¨


<script>
export default {
    computed: {
        caption () {
         return this.$store.getters.caption
        },
        faces () {
            return this.$store.getters.faces
        },
        objects () {
            return this.$store.getters.objects
        },
        emotions () {
            return this.$store.getters.emotions
        }
    }
}
</script>


<style scoped>
* {
}
.outer-container {
    max-width:1000px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    margin:auto;
    border:1px solid black;
}
.container {
    display: inline-flex;
    justify-content: center;
}
.face {
    margin:10px 0 0 0px;
}
.caption, .faces, .objects, .emotions {
    width:220px;
    margin:left;
    text-align: start;
}
.emotion b {
    text-align: start !important;
}

</style>