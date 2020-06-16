<script src="./Header.js"></script>
<style src="./Header.css" module></style>

<template>
  <div>
    <b-navbar toggleable="lg" :class="[$style.background]">
      <router-link class="mr-5" :class="[$style.navLink]" to="/">ADD CRUD</router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link :class="[$style.navLink]" to="/nuevo">Register</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
