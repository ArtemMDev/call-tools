<template>
  <form class="container devade-CRUD-quiz-set__wrap" @submit.prevent="sendForm">
    <h1>Создание квиза</h1>
    <button type="submit" class="devade-CRUD-quiz-set__btn devade-CRUD-quiz-set__btn_mb40">Сохранить</button>
    <QuizCRUDTabs v-if="formTabs.length > 0" :formTabs="formTabs"></QuizCRUDTabs>
  </form>
</template>

<script>
import QuizCRUDTabs from "./components/QuizCRUDTabs.vue"

export default {
  name: "QuizCRUD",
  data() {
    return {
      arParams: window.arParams,
      formTabs: []
    }
  },
  components: {
    QuizCRUDTabs
  },
  methods: {
    sendForm() {
      let formData = new FormData();

      this.formTabs.map((tab, ind) => {
        tab.fields.map((field, ind) => {
          formData.append(field.code, field.value);
        });
      });

      if (this.arParams.ELEMENT_ID > 0) {
        // console.log(this.arParams.ELEMENT_ID);
        // console.log("upd");
        formData.append("action", "update");
      } else {
        formData.append("action", "add");
        // console.log("add");
      }

      fetch("", {
        method: "POST",
        body: formData
      })
          .then(response => response.json())
          .then(result => console.log("///res", result));
    }
  },
  mounted: function () {
    let that = this;
    let data = {};
    const formData = new FormData();
    const bxFormData = new BX.ajax.FormData();

    if (typeof that.arParams.ELEMENT_ID != "undefined") data.elementID = that.arParams.ELEMENT_ID;

    var request = BX.ajax.runComponentAction('devade:quiz.crud', 'getFormData', {
      mode: 'class',
      method: 'POST',
      dataType: 'json',
      async: true,
      data: data,
    });

    request.then(function (result) {
      console.log("///data", result);
      that.formTabs = result.data;
      console.log("///that.formTabs", that.formTabs);
    });
  }
}
</script>

<style scoped></style>