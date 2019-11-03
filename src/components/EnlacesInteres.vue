<template>
  <v-container>
    <h1> Enlaces de Interés </h1>
    <v-row no-gutters>  
        <EnlaceInteres v-for="(enlace, i) in enlacesInteres" :key="i" :enlace="enlace" />
    </v-row>
  </v-container>
</template>

<script>
import EnlaceInteres from "./EnlaceInteres";
export default {
  name: "Links",
  components: {
    EnlaceInteres
  },
  data() {
    return {
      enlacesInteres: [
        {
          titulo: "Reportes",
          subtitulo: "Ordenados por mes",
          descripcion: "Podrás encontrar todos los reportes de todos nuestros clientes",
          imagen: "https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0033/8481/contenido-reportes.png?1556796908",
          url: "https://bigpyx.mx/go/reportes"
        },
        {
          titulo: "Status Clientes",
          subtitulo: "Ordenados por mes",
          descripcion: "Podrás encontrar todos los reportes de todos nuestros clientes",
          imagen: "https://blog.bind.com.mx/hs-fs/hubfs/estrategias%20de%20cobranza%20para%20clientes.jpg?width=1140&height=550&name=estrategias%20de%20cobranza%20para%20clientes.jpghttps://blog.bind.com.mx/hs-fs/hubfs/estrategias%20de%20cobranza%20para%20clientes.jpg?width=1140&height=550&name=estrategias%20de%20cobranza%20para%20clientes.jpg",
          url: "https://bigpyx.mx/go/status-clientes"
        },
        {
          titulo: "Cotizaciones",
          subtitulo: "Ordenados por mes",
          descripcion: "Podrás encontrar todos los reportes de todos nuestros clientes",
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBZ_nekO3sLkAcFk1RvGduIbzpHyp8kgm9bfdX_jcD7c5HiQb3Q&s",
          url: "https://bigpyx.mx/go/cotizaciones"
        },
        {
          titulo: "Diagnósticos",
          subtitulo: "Ordenados por mes",
          descripcion: "Podrás encontrar todos los reportes de todos nuestros clientes",
          imagen: "http://gref.org/blog/wp-content/uploads/2019/03/2-12.jpg",
          url: "https://bigpyx.mx/go/checkin"
        }
      ]
    };
  }
};
</script>