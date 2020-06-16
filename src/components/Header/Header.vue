<script src="./Header.js"></script>
<style src="./Header.css" module></style>

<template>
  <div>
    <b-navbar toggleable="lg" :class="[$style.background]">
      <b-navbar-brand href="#">APP CRUD</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Register</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
