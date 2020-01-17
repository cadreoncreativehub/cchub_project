<template>
<Layout>
    <h3>ID: {{$page.googleSheet.Id}}</h3>
    <div>{{$page.googleSheet.Nombre}}</div>
    <div>{{$page.googleSheet.Tag}}</div>
    <div>{{$page.googleSheet.Img_ruta}}</div>
    <g-image :src='$page.googleSheet.Img_ruta' class="imgR" />
    <!-- <g-image src="page.googleSheet.Img_ruta" width="400"></g-image> -->
    <Card></Card>
    <CardCreative></CardCreative>

</Layout>
</template>

<page-query>
query Sheet($path: String!){
    googleSheet(path: $path){
        Nombre
        Id
        Tag
        Img_ruta 
    }
}
</page-query>

<script>
/*Importar componente Card */
import Card from '~/components/Card.vue'
import CardCreative from '~/components/CardCreative.vue'

export default {
    components: {
        Card,
        CardCreative
    }

}


console.log("Hola!");
</script>

<style>

.imgR {
    max-width: 400px;
    display: block;
    text-align: center;
    border: 1px double orangered;
    margin: auto;

}
</style>
    
