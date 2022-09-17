<template>
        <header>
            <nav>
                <ul>
                    <li v-scroll-to="'#about'" >About</li>
                    <li>Home</li>
                </ul>
            </nav>
        </header>
</template>



<script>
export default {
    
}
</script>


<style scoped>
* {
}
html, body {
     margin:0;
    padding:0;
}
header ul li {
    list-style: none;
    display: inline-flex;
    font-size: 20px;
}
header {
    text-shadow: 0px 5px 8px #012027;
}
li {
    margin-right: 40px;
    cursor:pointer;
}
li:hover {
    color:rgb(140 201 213);
}
ul {
    margin:0;
    padding:15px 30px;
}
</style>