<template>
  <Layout>
  <Titular :titulo="titulopag"></Titular>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Cadreon" src="~/images/cadreon_color_RGB.png" width="255" /> -->
    <div class="contenido">
      <p>
          Part of Kinesso, IPG’s Marketing Intelligence Engine, Cadreon offers brands a strategic partner in creating lifetime customer value across addressable media. In a fragmented media landscape, Cadreon leverages best-in-class technology to deliver the most comprehensive and highest-performing addressable solutions on the market. Combining tradecraft, data and media neutrality, Cadreon enables brands to consciously connect with their best customers to drive real business outcomes. Headquartered in New York, Cadreon operates in over 70 markets worldwide.
        </p>
        <div v-for="page in $page.allGoogleSheet.edges" :key="page.id">
          {{page.node.Nombre}}
          {{page.node.Pagina}}
        </div>
        
        <p class="home-links">
          <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
          <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
      </p>
    </div>
    

  </Layout>
</template>

<page-query>
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
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Inicio'
  },
  data() {
    return {
      titulopag: 'Inicio',
      categoria: 'Ninguna'
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.contenido {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
