<template>
  <div>
    <Navbar />
    <Header />
    <Table />
    <Section />
    <Section />
    <Section />
    <Section />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import Table from "../components/Table.vue";
import Section from "../components/Section.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Header,
    Table,
    Section,
    Footer,
  },
  data() {
    return {};
  },
};
</script>