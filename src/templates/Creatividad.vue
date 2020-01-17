<template>
<Layout>
<Titular :titulo="$page.creatividad.nombre"></Titular>
    
    
    <!-- <div v-for="i in $page.creatividades.edges" :key="i.node.id">
        <h2>{{i.node.nombre}}</h2>
    </div> -->
    <b-container class="bv-example-row">
        <b-row align-v="center">
            <b-col md="3" >{{$page.creatividad.nombre}}</b-col>
            <b-col md="3"><h3>{{$page.creatividad.categoria}}</h3></b-col>
            <b-col md="6"><g-image :src='$page.creatividad.ruta_img' width="300" class="img_portada"/></b-col>
            
        </b-row>
    
    </b-container>
    <hr>


    <!-- <g-image src="page.googleSheet.Img_ruta" width="400"></g-image> -->

</Layout>
</template>


<page-query>
query ($id: ID!)  {
    creatividad (id: $id ) {
    id
    nombre
    categoria
    tamano {
        full
        width
        height
    }
    info
    ruta_img
    brand {
        nombre
        logo
    }
    
  }
}
</page-query>

<script>
// import creatividades from '@/data/creatividades.json'
export default {

}
// export default {
//     data() {
//         return {
//             creatividades
//         }
//     }
//     // components: {
//     //     Card,
//     //     CardCreative
//     // }

// }

</script>

<style scoped>
.img_portada {
    max-width: 400px;
    width: 300px;
    height: auto;
    border: 1px solid orangered;
    margin: auto; 
    text-align: center;
    padding: 5px;
    display:block;
}

</style>
    
