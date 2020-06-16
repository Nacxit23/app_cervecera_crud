<script src="./EmployeeTable.js"></script>
<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Cedula</th>
          <th>Numero INSS</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item">
          <td scope="row">{{ item.name }}</td>
          <td scope="row">{{ item.lastName }}</td>
          <td scope="row">{{ item.email }}</td>
          <td scope="row">{{ item.id }}</td>
          <td scope="row">{{ item.idInss }}</td>
          <td scope="row">{{ item.age }}</td>

          <td scope="row">
            <button type="button" v-on:click="remove(index)" class="btn btn-danger">&times;</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>