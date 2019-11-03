<template>
  <div>
    <NuevoCliente />
    <v-row>
      <BaseInputText
        v-model="newClienteText"
        placeholder="Creador Express de Clientes"
        @keydown.enter="addCliente"
      />
    </v-row>
    <v-data-table
      :headers="headers"
      :items="clientes"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template v-slot:item.url="{ item }">
        <v-btn text icon :href="item.url" target="_blank">
          <v-icon>mdi-application</v-icon>
        </v-btn>
      </template>
      <template v-slot:item.web="{ item }">
        <v-icon :color="showOn(item.web)">mdi-checkbox-blank-circle</v-icon>
      </template>
      <template v-slot:item.fb="{ item }">
        <v-icon :color="showOn(item.fb)">mdi-checkbox-blank-circle</v-icon>
      </template>
      <template v-slot:item.ga="{ item }">
        <v-icon :color="showOn(item.ga)">mdi-checkbox-blank-circle</v-icon>
      </template>

      <template v-slot:item.acciones="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="removeCliente(item.id)">mdi-delete</v-icon>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
      <v-text-field
        :value="itemsPerPage"
        label="Items per page"
        type="number"
        min="5"
        max="15"
        @input="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText";
import NuevoCliente from "./NuevoCliente";
import { db } from "../firebase";
let nextClienteId = 1;

export default {
  name: "ListadoClientes",
  components: {
    BaseInputText,
    NuevoCliente
  },
  created() {
    db.ref("clientes").on("value", snapshot =>
      this.obtenerClientes(snapshot.val())
    );
  },
  data() {
    return {
      firebase: {
        clientes: db.ref("clientes/")
      },
      dialog: false,
      itemsPerPage: 5,
      page: 1,
      pageCount: 1,
      newClienteText: "",
      headers: [
        {
          text: "Nombre",
          align: "left",
          sortable: false,
          value: "nombre"
        },
        { text: "Razón Social", value: "rs" },
        { text: "RFC", value: "rfc" },
        { text: "Teléfono", value: "telefono" },
        { text: "Nombre Contacto", value: "nombreContacto" },
        { text: "URL", value: "url" },
        { text: "Status", value: "status" },
        { text: "Web", value: "web", align: "center" },
        { text: "F.Ads", value: "fb", align: "center" },
        { text: "G.Ads", value: "ga", align: "center" },
        { text: "Plan", value: "plan" },
        { text: "Cantidad", value: "cantidad" },
        { text: "Coste", value: "coste" },
        { text: "Ganancia", value: "ganancia" },
        { text: "Reporte Mensual", value: "reporteMensual" },
        { text: "Última Cotización", value: "ultimaCotizacion" },
        { text: "Acciones", value: "acciones" }
      ],
      clientes: []
    };
  },
  methods: {
  obtenerClientes(clientes){
    this.clientes = Object.values(clientes) 
    
  },
    showOn(state) {
      if (state) {
        return "green";
      } else {
        return "red";
      }
    },
    addCliente() {
      const trimmedText = this.newClienteText.trim();
      if (trimmedText) {
        this.clientes.push({
          id: nextClienteId++,
          nombre: trimmedText
        });
        this.newClienteText = "";
      }
    },
    removeCliente(idToRemove) {
      this.clientes = this.clientes.filter(cliente => {
        return cliente.id !== idToRemove;
      });
    }
  }
};
</script>