<template>
  <div class="section">
    <div>
      <p class="title">کیمیاگر تراز ۱</p>
      <p class="text">
        کاربر سطح یک کاربری است که اطلاعات اولیه ای همچون اسم ,فامیل, تاریخ تولد
        ,کد ملی , ایمیل ,موبایل و شماره کارت بانکی در سایت وارد کرده است و
        قابلیت هایی همچون واریز و برداشت رمز ارز واریز و برداشت ارز های
        الکترونیک و برداشت ریالی و معرفی کاربران و شرکت در کسب درآمد مجموعه را
        دارا میباشد
      </p>
    </div>
    <div class="flex-container">
      <div class="flex-child magenta">
        <p class="title-2">مدارک مورد نیاز</p>
        <ul class="list">
          <li>ایمیل معتبر</li>
          <li>ایمیل معتبر</li>
          <li>شماره موبایل به نام کاربر</li>
          <li>اطلاعات فردی معتبر ( اسم فامیل تاریخ تولد کد ملی)</li>
          <li>شماره کارت بانکی معتبر همراه با شماره شبای بانکی</li>
        </ul>
      </div>

      <div class="flex-child green">
        <p class="title-2">مدارک مورد نیاز</p>
        <ul class="list">
          <li>ایمیل معتبر</li>
          <li>ایمیل معتبر</li>
          <li>شماره موبایل به نام کاربر</li>
          <li>اطلاعات فردی معتبر ( اسم فامیل تاریخ تولد کد ملی)</li>
          <li>شماره کارت بانکی معتبر همراه با شماره شبای بانکی</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section {
  background-color: #f2f7ff;
  padding: 24px;
  border-radius: 20px;
  margin: 20px;
}
.title {
  text-align: right;
  font-size: 24px;
  font-weight: 900;
  color: #12377b;
}
.text {
  text-align: right;
  color: #666464;
  font-size: 16px;
  font-weight: 500;
}
.title-2 {
  font-weight: 700;
  font-size: 16px;
  color: #12377b;
  text-align: right;
}
.list {
  margin: 0.5rem;
  list-style: none;
}
.list li {
  background-color: #ffffff;
  border-radius: 20px;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  text-align: right;
  padding: 20px;
  margin: 10px;
}
.flex-container {
  display: flex;
}

.flex-child {
  flex: 1;
}

.flex-child:first-child {
  margin-right: 20px;
}
</style>>

