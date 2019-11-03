<template>
  <div>
    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" left class="ma-2" dark @click="dialog = true">Nuevo Cliente</v-btn>
          </template>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Nuevo</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="onSubmit">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card>
            <v-card-title>
              <span class="headline">Perfil de Cliente</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Nombre*"
                      v-model="cliente.nombre"
                      required
                      hint="Nombre del cliente"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Razón Social" v-model="cliente.rs" hint="Razón Social"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="RFC*"
                      hint="RFC"
                      v-model="cliente.rfc"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      label="Email*"
                      v-model="cliente.email"
                      hint="Email del cliente"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      label="Teléfono1*"
                      v-model="cliente.telefono1"
                      type="text"
                      hint="Teléfono Contacto 1"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      label="Teléfono2*"
                      v-model="cliente.telefono2"
                      type="text"
                      hint="Teléfono Contacto 2"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      label="Nombre Contacto*"
                      v-model="cliente.nombreContacto"
                      type="text"
                      hint="Nombre Contacto"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-select
                      v-model="cliente.status"
                      :items="['EN PROGRESO', 'ACTIVO', 'INACTIVO', 'STAND-BY']"
                      label="Status*"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Página Web*"
                      v-model="cliente.url"
                      type="text"
                      hint="Dirección Web"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-row>
                      <v-col cols="12" sm="4">
                        <v-switch v-model="cliente.web" label="Web"></v-switch>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <v-switch v-model="cliente.fba" label="Facebook Ads"></v-switch>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <v-switch v-model="cliente.ga" label="Google Ads"></v-switch>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="4">
                        <v-switch v-model="cliente.fb" label="Facebook"></v-switch>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <v-switch v-model="cliente.instagram" label="Instagram"></v-switch>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <v-switch v-model="cliente.twitter" label="Twitter"></v-switch>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-select
                      v-model="cliente.plan"
                      :items="['Starter', 'Business', 'Premium', 'Social', 'Enterprise']"
                      label="Plan*"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field label="URL Reporte Mensual*" type="text" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="onSubmit">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>
 

<script>
import { db } from "../firebase";

export default {

  firebase:{
    clientes: db.ref('clientes')
  },
  data: () => ({
    dialog: false,
    cliente: {
      nombre: "",
      rs: "",
      rfc: "",
      telefono: "",
      nombreContacto: "",
      url: "",
      status: "INACTIVO",
      web: true,
      fb: true,
      instagram: true,
      twitter: false,
      fba: true,
      ga: false,
      plan: "",
      monto: 0,
      coste: 0,
      ganancia: 0,
      codReporte: "",
      reporteMensual: "",
      cotizaciones: [
        {
          fecha: "",
          precio: "",
          diagnostico: ""
        }
      ]
    }
  }), 

  methods: {
    onSubmit() {
      
      db.ref('/clientes/'+this.cliente.nombre.trim()).set(this.cliente)
      this.cliente = {
        
        nombre: "",
        rs: "",
        rfc: "",
        telefono: "",
        nombreContacto: "",
        url: "",
        status: "INACTIVO",
        web: true,
        fb: true,
        ga: false,
        plan: "",
        cantidad: 0,
        coste: 0,
        ganancia: 0,
        codReporte: "",
        reporteMensual: "",
        cotizaciones: [
          {
            fecha: "",
            precio: "",
            diagnostico: ""
          }
        ]
      };
    }
  }
};
</script>