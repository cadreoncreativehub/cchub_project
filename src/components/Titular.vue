<template>
  <div>
    <b-container fluid class="titularNaranja">
        <b-row align-v="center" align-self="center"  class="text-center justify-content-center titulocentrado">
            <!--<h1 class="justificado-centro titulo-pagina">{{titulo}}</h1>-->
            <div class="titulo-pagina">
                <a href="/" ><h1 class="insetshadow">{{titulo}}</h1></a>
            </div>
        </b-row>
    </b-container>
      
  </div>
  </div>
</template>

<script>
export default {
    props: ['titulo']
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Exo+2:600,700,800,900');
.titularNaranja {
    background: #2d2d2d;
    min-height: 100px;
    color: white;
}

.justificado-centro {
    justify-content: center;
}
.titulocentrado {
    height:100px;
}
.titulo-pagina {
    margin:auto;
  text-align: center;
  font-family: 'Exo', sans-serif;
}
.titulo-pagina a {
    text-decoration: none;
}
/*
.titulo-pagina a {
    text-decoration: none;
  -webkit-transform: perspective(2.5em) rotateX(15deg) scaleY(0.8);
  -moz-transform: perspective(2.5em) rotateX(15deg) scaleY(0.8);
  -ms-transform: perspective(2.5em) rotateX(15deg) scaleY(0.8);
  -o-transform: perspective(2.5em) rotateX(15deg) scaleY(0.8);
  transform: perspective(2.5em) rotateX(15deg) scaleY(0.8);
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  font-size: 75px;
  font-weight: 700;
  font-family: 'Exo 2';
  line-height: 0.8;
  color: white;
  text-shadow: 0 -1px 15px rgba(0, 0, 0, 0.9), 0 1px 0 #7f6303, 0 3px 0 #846703, 0 5px 0 #896b03, 0 7px 0 #8e6f03, 0 9px 0 #937203, 0 6px 50px rgba(252, 223, 92, 0.8);
}
.titulo-pagina a:first-line {
    font-size: 0.8em;
}
.titulo-pagina a:hover {
    -webkit-transform: perspective(8em) rotateX(11deg) scale(1.2);
  -moz-transform: perspective(8em) rotateX(11deg) scale(1.2);
  -ms-transform: perspective(8em) rotateX(11deg) scale(1.2);
  -o-transform: perspective(8em) rotateX(11deg) scale(1.2);
  transform: perspective(8em) rotateX(11deg) scale(1.2);
  text-shadow: 0 -1px 15px black, 0 1px 0 #7f6303, 0 2px 0 #846703, 0 0px 0 #896b03, 0 1px 0 #8e6f03, 0 2px 0 #937203, 0 2px 30px rgba(252, 223, 92, 0.6);
}
*/
h1.insetshadow {
    text-transform: uppercase;
  color: #858383;
  background-color: #2d2d2d;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 1px #111, 2px 2px 1px #363636;
  transition: 1s all;
}
h1.insetshadow:hover {
    text-decoration: none;
    color:white;
}
</style>