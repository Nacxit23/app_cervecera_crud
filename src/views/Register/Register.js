export default {
  name: "Register",
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
      id: "",
      idInss: "",
      message: false,
      list: [],
      errorMessage: "",
      show: false,
      errorAlert: false,
    };
  },
  methods: {
    addEmployee() {
      let date = this.id.substr(4, 6);
      const validateYear = parseInt(date.substr(4, 7));

      const yearBirth =
        validateYear >= 20 ? validateYear + 1900 : validateYear + 2000;

      this.list.push({
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        id: this.id,
        idInss: this.idInss,
        age: yearBirth,
      });

      this.message = true;
      let json = JSON.stringify(this.list);
      localStorage.setItem("list", json);

      setTimeout(() => {
        this.$router.push({ path: "/" });
      }, 2000);
    },
    validateIdUnique() {
      for (const key in this.list) {
        if (this.list[key].id === this.id) {
          this.errorMessage = "La cedula de identidad ya existe! 😢";
          this.errorAlert = true;
        }
      }
    },
    validateInssUnique() {
      for (const key in this.list) {
        if (this.list[key].idInss === this.idInss) {
          this.errorMessage = "El numero de INSS de identidad ya existe! 😢";
          this.errorAlert = true;
        }
      }
    },
  },
};
