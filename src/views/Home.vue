<template>
  <div>
    <Table/>
    <Section/>
    <Section/>
    <Section/>
    <Section/>
  </div>
</template>

<script>
import Table from '../components/Table.vue'
import Section from '../components/Section.vue'

export default {
  name: "Home",
  components: {
    Table,
    Section
  },
  data() {
    return {};
  },
};
</script>