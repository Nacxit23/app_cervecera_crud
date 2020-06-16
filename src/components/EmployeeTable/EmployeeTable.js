export default {
  name: "EmployeeTable",
  data() {
    return {
      list: [],
      message: "",
      messageShow: false,
    };
  },

  methods: {
    remove(index) {
      this.list.splice(index, 1);
      this.message = "El empleado a sido eliminado";
      this.messageShow = true;
    },
  },
  created() {
    let newArrayEmployee = localStorage.getItem("list");
    let employee = JSON.parse(newArrayEmployee);
    if (employee == null) {
      this.message = "Esta vacio";
      this.messageShow = true;
    } else {
      this.list.push(...employee);
    }
    console.log(this.list);
  },
};
