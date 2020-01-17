<template>
  <div class="layout">
    <header class="header">
      <!-- <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong> -->
      <!--<nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/acercade/">Acercade</g-link>
        <g-link class="nav__link" to="/externaldata/">External data</g-link>
        <g-link class="nav__link" to="/1/">portfolio item 1</g-link>
      </nav>-->
      <Navegacion></Navegacion>
    </header>
    
    
      <slot/>
    
    <Footer></Footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style >

body {
  font-family: 'Nunito', sans-serif !important;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  /*padding-left: 20px;
  padding-right: 20px;*/
  box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.1);
 
}





/*
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
*/
.header {
  height: auto;
}
/*
.nav__link {
  margin-left: 20px;
}
*/
</style>
