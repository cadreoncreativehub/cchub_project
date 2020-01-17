<template>
  <Layout>

    <!-- <div v-for="page in $page.allGoogleSheet.edges" :key="page.id">
      {{page.node.Nombre}}
      {{page.node.Pagina}}
    </div> -->
    <ul>
    <li v-for='item in todos.feed.entry' :key='item.id'>
      {{item}}
    </li>
    </ul>
    


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
import axios from 'axios'

export default {
  metaInfo: {
    title: 'External Data'
  },
  data () {
      return {
          todos: null,
          titulo: null
      }
  },
  async mounted () {
      try {
          // Google Spreadsheets información en formato JSON.
          const resultados = await axios.get('https://spreadsheets.google.com/feeds/cells/1Lk389cM06T9AN-lQUd0aznBTFJiXeJnL1t-h_ubHqxg/1/public/full?alt=json')
          this.todos = resultados.data
          this.titulo = resultados.data.feed.entry.gs$cell 
      }
      catch (error) {
          console.log(error)
      }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
