<template>

    <div class="item_touche" id="item_touche" >

        <img @click="$emit('increaseBy', 1)" id="cible" src="../../public/images/pokeball.png">
        
    </div>

</template>

<script>
export default {
    name: 'ToucheComponent',
    props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@-moz-keyframes spin {
    100% {
        -moz-transform: rotate(-360deg);
    }
}

@-webkit-keyframes spin {
    100% {
        -webkit-transform: rotate(-360deg);
    }
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}



.item_touche {
    width: 90%;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
}

img {
    width: 30%;
    -webkit-animation: spin 3s linear 5;
    -moz-animation: spin 3s linear 5;
    animation: spin 0.2s linear 5;
}

.new {
    width: 20%;
    float: left;
    margin-right: -50px;
}

#cible {
    float: left;
    position: relative;
    width: 50px;
    background-repeat: no-repeat;
    border: none;
    background-color: none;
}

@media screen and (max-width:500px) {
    .item {
        width: 180px;
        font-size: larger;
    }

    img {
        width: 45%;
    }

    .new {
        width: 28%;

    }

    .item_touche {
        height: 65%;
    }

    #cible {
        
        width: 20%;
    }






}
</style>
