<script src="./Register.js">
</script>
<style src="./Register.css" module></style>
<template>
  <div>
    <b-form @submit.prevent="addEmployee">
      <b-col :class="[$style.colorAlert]" v-if="message">Agregado correctamente 😀</b-col>
      <b-col :class="[$style.colorAlertError]" v-if="errorAlert">{{errorMessage}}</b-col>

      <b-form-group id="input-group-1" label="Agregue su nombre:" label-for="input-1">
        <b-form-input v-model="name" id="input-1" type="text" required placeholder="Nombre"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Agregue su apellido:" label-for="input-2">
        <b-form-input v-model="lastName" id="input-2" type="text" required placeholder="Apellido"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Agregue su correo:" label-for="input-3">
        <b-form-input v-model="email" id="input-3" type="email" required placeholder="correo"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Agregue su cedula de identidad:" label-for="input-4">
        <b-form-input
          v-model="id"
          id="input-4"
          type="text"
          pattern="([0-6][\d]{2})-([0-2][\d]|3[0-1])(0[1-9]|1[0-2])([\d]{2})-([\d]{4}[A-X])"
          required
          title="Ingrese un formato de cedula valida 000-000000-000W"
          placeholder="000-000000-0000Y"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" label="Agregue numero del INSS:" label-for="input-5">
        <b-form-input
          v-model="idInss"
          id="input-5"
          type="text"
          required
          placeholder="Numero de Inss"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" class="mr-2" variant="primary">Crear empleado</b-button>
      <b-button type="reset" variant="danger">Cancelar</b-button>
    </b-form>
  </div>
</template>