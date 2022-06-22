<template>
  <footer>
    <div id="footer1">
      <ul>
        <li><a href="#"> دانلود مستقیم</a></li>
        <li><a href="#">Play Store</a></li>
      </ul>
      <p class="logo">
        <a href="#"
          ><span> .با اپلیکیشن اتراکس در هر لحظه خرید و فروش کن </span></a
        >
      </p>
    </div>
    <section id="section1">
        <div class="items">
          <div class="item">
            <div>
              <p class="title">راهنماو پشتیبانی</p>
              <ul>
                <li>سوالات متداول</li>
                <li>کارمزدها</li>
                <li>احراز هویت و سطح کاربری</li>
                <li>راهنمای امنیت حساب</li>
              </ul>
            </div>
          </div>
          <div class="item">
            <div>
              <p class="title">درباره صرافی اتراکس</p>
              <ul>
                <li>درباره ما</li>
                <li>تماس با ما</li>
                <li>امنیت مجموعه</li>
                <li>قوانین و مقررات</li>
              </ul>
            </div>
          </div>
          <div class="item">
            <div>
              <p>اتراکس</p>
              <p>
                برای حرکت به سوی اهداف و ماموریتمان، ما سه ارزش ساده را دنبال می
                کنیم: برای جامعه مفید باشیم، مشتری مدار باشیم، قهرمان باشیم.
              </p>
              <p>icona</p>
            </div>
          </div>
        </div>

    </section>
    <div id="main-footer">
      <p>تمامی حقوق این سایت محفوظ و متعلق به اِتِرِکس می باشد</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#footer1 {
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  margin: 10px;
}
#footer1 a {
  color: #3c3c3c;
  text-decoration: none;
}
#footer1 ul {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  list-style: none;
}
#footer1 ul li a {
  padding: 16px 24px;
  margin: 0 0.25rem;
  font-size: 16px;
  color: #ffffff;
  background: #2a6ae3;
  border-radius: 20px;
}
.logo {
  font-size: 20px;
  font-weight: 700;
}
#main-footer {
  color: #ffffff;
  background: #2a6ae3;
  border-radius: 32px 32px 0px 0px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  padding: 10px;
}
#section1 {
  background: #f2f7ff;
  border-radius: 32px 32px 0px 0px;
  color: #000000;
}
#section1 .items {
  display: flex;
  padding: 15px;
}
#section1 .items .item {
  flex: 1;
  text-align: right;
  padding: 15px;
}
#section1 ul li {
  text-align: right;
  list-style: none;
  font-weight: 500;
  font-size: 16px;
  padding: 10px;
}
.title {
  font-weight: 700;
  font-size: 18px;
  color: #2a6ae3;
  text-align: right;
}
</style>