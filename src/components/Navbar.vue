<template>
  <nav id="navbar">
    <ul>
      <li><a class="three" href="#">ثبت نام</a></li>
      <li><a href="#">ورود</a></li>
    </ul>
    <ul>
      <li><a class="one" href="#">اتراکس</a></li>
      <li class="two"><a href="#">خانه</a></li>
      <li><a href="#">خرید رمزارز</a></li>
      <li><a href="#">بازارها</a></li>
      <li><a href="#"> تبدیل رمزارز</a></li>
      <li><a href="#"> بلاگ</a></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
#navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  top: 0%;
  background-color: white;
}
#navbar ul {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  list-style: none;
}
#navbar ul li a {
  padding: 7px;
  margin: 0 0.25rem;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  color: black;
}
.one{
  font-size: 20px !important;
  font-weight: bold !important;
}
.two {
  background: rgba(42, 106, 227, 0.1);
  border-radius: 18px;
}
.three {
  color: white !important;
  background: #2a6ae3;
  border-radius: 14px;
}
@media (max-width: 500px) {
  #navbar {
    flex-direction: column;
    align-items: center;
  }
  #navbar ul {
    padding: 5px;
  }
}
</style>