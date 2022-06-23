<template>
  <div>
    <Header/>
    <Table/>
    <Section/>
    <Section/>
    <Section/>
    <Section/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Table from '../components/Table.vue'
import Section from '../components/Section.vue'

export default {
  name: "Home",
  components: {
    Header,
    Table,
    Section
  },
  data() {
    return {};
  },
};
</script>