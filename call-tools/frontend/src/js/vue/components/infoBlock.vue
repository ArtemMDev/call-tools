<template>
  <div class="devade-CRUD-quiz-set__main">
    <ul class="devade-CRUD-quiz-set__menu">
      <li v-for="tab in formTabs"
          :class="{active: tab.name == currTab}"
          @click="changeCurrTab(tab)">{{ tab.text }}
      </li>
    </ul>
    <QuizCRUDTab :currTab="currTab" :formTabs="formTabs"></QuizCRUDTab>
  </div>
</template>

<script>

// import QuizCRUDTab from "./QuizCRUDTab.vue"

export default {
  name: "QuizCRUDTabs",
  props: [
    "formTabs"
  ],
  data() {
    return {
      currTab: this.formTabs[0].name
    }
  },
  components: {
    // QuizCRUDTab
  },
  methods: {
    changeCurrTab(tab) {
      this.currTab = tab.name;
    }
  }
}
</script>

<style scoped></style>