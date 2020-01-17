<template>
    <div class="card">
        {{mensaje}}
        <button @click='onClick'>
            Cambiar
        </button>
    </div>
</template>

<script>
export default {
    name: 'Card',
    data () {
        return {
            mensaje: 'Cambiame!'
        }
    },
    methods: {
        onClick () {
            this.mensaje = 'Te he cambiado! :D'
        }
    }
}
</script>

<style scoped>
.card {
    padding: 20px;
    background: #FFF;
    color:purple;
}
</style>