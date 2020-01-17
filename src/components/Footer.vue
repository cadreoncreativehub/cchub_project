
<template>
  <div>
  
        <!-- Footer -->
<footer class="page-footer font-small blue pt-4 footer-oscuro">

  <!-- Footer Links -->
  <div class="container-fluid text-center text-md-left">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-6 mt-md-0 mt-3">

        <!-- Contenido -->
        <g-image alt="Cadreon" src="~/images/cadreon_color_RGB.png" class="logo-footer" width="205" />
        
        <p>Enrique Jardiel Poncela 6<br>
        Madrid, España 28016<br>
        info@cadreon.com</p>
        <i class="fas fa-line"></i>
        <p>Enrique Jardiel Poncela 6<br>
        Madrid, España 28016<br>
        info@cadreon.com</p>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none pb-3">

      <!-- Grid column -->
      <div class="col-md-3 mb-md-0 mb-3">

        <!-- Links -->
        

        <ul class="list-unstyled linea-naranja">
          <li>
            <a href="#!">Productos</a>
          </li>
          <li>
            <a href="#!">Galería</a>
          </li>
          <li>
            <a href="#!">Case Studies</a>
          </li>
          <li>
            <a href="#!">Acerca de</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-3 mb-md-0 mb-3">

        <!-- Links -->

        <ul class="list-unstyled linea-naranja">
          <li >
            <a href="#!">Privacidad</a>
          </li>
          <li >
            <a href="#!">Cookie Setting</a>
          </li>
          <li >
            <a href="#!">Información</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

    <!--Grid row-->
    <div class="row">

      <!--Grid column-->
      <div class="col-md-6 mb-4">

        <!-- Form -->
        <form class="form-inline">
          <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
            aria-label="Search">
          <i class="fas fa-search" aria-hidden="true"></i>
        </form>
        <!-- Form -->

      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-md-6 mb-4">

        <form class="input-group">
          <input type="text" class="form-control form-control-sm" placeholder="Your email"
            aria-label="Your email" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="btn btn-sm btn-outline-white my-0" type="button">Sign up</button>
          </div>
        </form>

      </div>
      <!--Grid column-->

    </div>
    <!--Grid row-->

  </div>
  <!-- Footer Links -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://cadreoncreativehub.github.io">Cadreon</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->
  </div>
</template>

<script>
export default {

}
</script>

<style >
.logo-footer {
    margin: 10px 0px;
}
.footer-oscuro {
    background: #f2f3f3 none repeat center top;
    height: auto;
}
.footer-contenido {
    margin: 5px 3px;
    align-content: center;
    justify-content: center;
    justify-items: center;
    align-items: center;
    height: 40%;
    padding: 2px;

}
.footer-copyright {
    background: black;
    color:whitesmoke;
}
.linea-naranja ul {
  list-style-type: none;
  margin: 0;
  margin-top: 10%;
  text-decoration: none;
}
.linea-naranja ul li {
  margin: 0 20px;
  text-decoration: none;
}
.linea-naranja a {
  font-size: 16px;
  color: #584E4A;
  position: relative;
  text-decoration: none !important;
  padding-bottom: 8px;
}
.linea-naranja a:before, .linea-naranja a:after {
    text-decoration: none;
  content: '';
  position: absolute;
  bottom: 6px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #F37272;
}
.linea-naranja a:before {
    text-decoration: none;
  opacity: 0;
  -webkit-transform: translateY(-8px);
          transform: translateY(-8px);
  transition: opacity 0s, -webkit-transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s;
  transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s, -webkit-transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.linea-naranja a:after {
    text-decoration: none;
  opacity: 0;
  -webkit-transform: translateY(4px);
          transform: translateY(4px);
  transition: opacity 0.2s, -webkit-transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s, -webkit-transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.linea-naranja a:hover:before, .linea-naranja a:hover:after, .linea-naranja a:focus:before, .linea-naranja a:focus:after {
    text-decoration: none;
  opacity: 1;
  -webkit-transform: translateY(0);
          transform: translateY(0);
}
.linea-naranja a:hover:before, .linea-naranja a:focus:before {
    text-decoration: none;
  transition: opacity 0.2s, -webkit-transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s, -webkit-transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.linea-naranja a:hover:after, .linea-naranja a:focus:after {
    text-decoration: none;
  transition: opacity 0s 0.2s, -webkit-transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s 0.2s;
  transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s 0.2s, -webkit-transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

</style>