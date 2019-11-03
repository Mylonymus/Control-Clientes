<template>
  <v-container fluid>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/bigpyx.png')" class="my-3 " contain height="100"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Dashboard Principal</h1>
      </v-flex>
      <v-flex xs-12>  
        <ListadoClientes />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ListadoClientes from './ListadoClientes' 
export default {
  name: "Dashboard",
  components: {
    ListadoClientes 
  },
  methods: {
    
  },
  data: () => ({


    
    headers: [
      {
        text: "Nombre",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Razón Social", value: "razonSocial" },
      { text: "RFC", value: "rfc" },
      { text: "Teléfono", value: "telefono" },
      { text: "Nombre Contacto", value: "nombreContacto" },
      { text: "URL", value: "url" },
      { text: "Status", value: "status" },
      { text: "Web", value: "web" },
      { text: "Facebook", value: "fb" },
      { text: "Google Ads", value: "ga" },
      { text: "Plan", value: "plan" },
      { text: "Cantidad", value: "cantidad" },
      { text: "Coste", value: "coste" },
      { text: "Ganancia", value: "ganancia" },
      { text: "Reporte Mensual", value: "reporteMensual" },
      { text: "Última Cotización", value: "url" }
    ],
    clientes: [
      {
        nombre: "Dr. Daniel Guadarrama",
        rs: "",
        rfc: "",
        telefono: "",
        nombreContacto: "",
        pagina: "",
        status: "ACTIVO",
        web: true,
        fb: true,
        ga: true,
        plan: "",
        cantidad: 0,
        coste: 0,
        ganancia: 0,
        reporteMensual: "",
        imagen: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjwwYjlgczlAhUEx4UKHTdjDm8QjRx6BAgBEAQ&url=https%3A%2F%2Fdrdanielguadarrama.com%2F&psig=AOvVaw0OKLFcWxaG66RD5V33Di1A&ust=1572800820432588",
        cotizaciones: [
          {
            fecha: "",
            precio: "",
            diagnostico: ""
          }
        ]
      }
    ]
  })
};
</script> 
<style scoped>
  .bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }

  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
                        rgba(255,0,0,.25),
                        rgba(255,0,0,.25) 5px,
                        rgba(0,0,255,.25) 5px,
                        rgba(0,0,255,.25) 10px
                      );
  }
</style>