<template>
  <v-card :href=enlace.url class="enlace" max-width="300">
    <v-img
      class="white--text align-end"
      height="200px"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      :src=enlace.imagen
    >
      <v-card-title>{{enlace.titulo}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{enlace.subtitulo}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{enlace.descripcion}}</div>
 
    </v-card-text>

    <v-card-actions right>
      <v-btn  color="orange" target="_blank" :href=enlace.url text>Saltar</v-btn>
      
    </v-card-actions>
  </v-card>
</template>
 
<script>

export default {
  props: {
    enlace: {
      titulo: {
        type: String,
        required: true
      },
      subtitulo: {
        type: String,
        required: true
      },
      descripcion: {
        type: String,
        required: true
      },
      imagen: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  }
};
</script>

<style>
  .enlace{
    margin:2em;
  }
</style>