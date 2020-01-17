<template>
    <div>
        <b-container class="top_info">
            <b-row align-v="center">
                <b-col xs="12" sm="4" md="4" class="txt-informativo text-center"><b-icon-phone></b-icon-phone> <a href="/"><span>+34 91 769 20 14</span></a></b-col>
                <b-col xs="12" sm="4" md="4" class="txt-informativo text-center"><b-icon-info></b-icon-info> <a href="mailto:info@cadreon.es"><span>info@cadreon.es</span></a></b-col>
                <b-col xs="12" sm="4" md="4" class="txt-informativo text-center"><b-icon-clock></b-icon-clock> Lunes – Viernes 8 AM – 7 PM</b-col>
            </b-row>
        </b-container>
        
        <b-navbar toggleable="lg" type="light" variant="light" class="barra-nav">
            <b-navbar-brand href="/" class="logo">
                <g-link to="/">
                    <g-image alt="Cadreon" src="~/images/cadreon_color_RGB.png" width="180" />
                </g-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/">Inicio</b-nav-item>
                <b-nav-item href="/about/">Galería</b-nav-item>
                <b-nav-item href="/acercade/">Servicios</b-nav-item>
                <b-nav-item href="/externaldata/">Acerca de</b-nav-item>
                <b-nav-item href="/1/">Contacto</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em>Usuario</em>
                </template>
                    <b-dropdown-item href="#">Perfil</b-dropdown-item>
                    <b-dropdown-item href="#">Log out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
  
</template>

<script>
export default {
    name: "Navegacion"
};
</script>

<style scoped>
:root {
    --cadreonaranja : #ff6633;
}
.logo {
    margin-right: 40px;
}
.top_info {
    background: rgb(140, 143, 146);
    color: whitesmoke;
    max-width: 100%;
    font-size: 13px;
    height:auto;
    padding-top:7px;
    padding-bottom: 7px;

}
a {
color: #fff5f2;
}
a:hover {
    color: #fbefea;
    text-decoration: none;

}
.barra-nav {
    box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.1);
}
button {
    background: #ff6633;
    transition: all 0.4s;
    border:none;
}
button:hover {
    background: orangered;
    border:none;
}

</style>