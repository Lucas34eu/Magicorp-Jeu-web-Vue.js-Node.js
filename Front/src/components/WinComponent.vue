<template>

    <div class="item_touche">

        <img id="pokeball" src="../../public/images/pok1.gif">

        <div id="info_touche">
            <p id="titre" style="font-size:larger">{{ titre }}</p>
            <p v-if="rarete == 0">Commun</p>
            <p style="color:blue" v-if="rarete == 1">Rare</p>
            <p style="color:#bb00bb" v-if="rarete == 2">Epic</p>
            <p style="color:orange" v-if="rarete == 3">Legendaire</p>
            <img :src="require(`@/assets/images/${img}`)">
        </div>
    </div>

</template>

<script>
export default {
    name: 'WinComponent',
    props: {
        titre: {
            type: String
        },
        img: {
            type: String
        },
        rarete: {
            type: Number
        }
    }
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
    height: 60%;
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

#pokeball {

    margin-top: 20px;
    width: 120px;
    background-repeat: no-repeat;
    border: none;
    background-color: none;
}

#cible {
    width: 110px;
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

        width: 50%;
    }


}
</style>
