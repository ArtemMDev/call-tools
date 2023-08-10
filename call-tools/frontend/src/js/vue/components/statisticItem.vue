<template>
  <div class="statistic__block">
    <div class="statistic__item">
      <h4></h4>
      <ul>
        <li>
          <span></span>
          <p></p>
        </li>
      </ul>
    </div>
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