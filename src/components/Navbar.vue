<template>
  <!-- <nav class="nav">
    <ul>
      <li>اتراکس</li>
      <li>خانه</li>
      <li>خرید رمز ارز</li>
      <li>بازارها</li>
      <li>تیدیل رمز ازز</li>
      <li>بلاگ</li>
      <li>ثبت نام</li>
      <li>ورود</li>
    </ul>
  </nav> -->
  <nav id="navbar">
    <ul class="one">
      <li><a href="#">درباره ما</a></li>
      <li><a href="#">تماس با ما</a></li>
    </ul>
    <ul class="two">
      <li><a href="#">خانه</a></li>
      <li><a href="#">درباره ما</a></li>
      <li><a href="#">تماس با ما</a></li>
      <li><a href="#">تماس با ما</a></li>
      <li><a href="#">تماس با ما</a></li>
      <li><a href="#">تماس با ما</a></li>
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
  position: sticky;
  top: 0%;
  background-color: white;
}
#navbar a {
  color: black;
}
#navbar ul {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  list-style: none;
}
#navbar ul li a {
  padding: 0.75rem;
  margin: 0 0.25rem;
}
#navbar ul li a:hover {
  background: orange;
  color: white;
  border-radius: 5px;
}
</style>