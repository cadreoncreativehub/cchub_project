<template>
    <div class="card">
        <div v-html='$page.googleSheet.Nombre'></div>
    </div>
</template>

<static-query>
query {
	allGoogleSheet {
    edges {
      node {
        Id
        Pagina
        Nombre
        Img_ruta
        
      }
    }
  }
}
</static-query>

<script>
export default {
    name: 'CardCreative'
}
</script>

<style scoped>
.card {
    padding: 20px;
    background: #FFF;
    color:purple;
}
</style>