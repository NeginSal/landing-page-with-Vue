<template>
  <div class="table">
    <table id="customers">
      <tr>
        <th>کیمیاگر تراز 4</th>
        <th>کیمیاگر تراز 3</th>
        <th>کیمیاگر تراز 2</th>
        <th>کیمیاگر تراز ۱</th>
        <th>کیمیاگر در حال انتظار</th>
        <th>دسترسی ها</th>
      </tr>
      <tr>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td>واریز ریال</td>
      </tr>
      <tr>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td>برداشت ریال</td>
      </tr>
      <tr>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td>واریز رمز ارز</td>
      </tr>
      <tr>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td>برداشت رمز ارز</td>
      </tr>
      <tr>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td>کیف پول ارزهای مختلف</td>
      </tr>
      <tr>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td><i class="fa fa-check" style="color: green"></i></td>
        <td>تبادل ارزهای الکترونیک</td>
      </tr>
      <tr>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td>واریز ریال از داخل شعب بانک</td>
      </tr>
      <tr>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td><i class="fa fa-close" style="color: red"></i></td>
        <td>معرفی و کسب درآمد</td>
      </tr>
      <tr>
        <td>6 ساعت</td>
        <td>6 ساعت</td>
        <td>6 ساعت</td>
        <td>6 ساعت</td>
        <td>به صورت آنی</td>
        <td class="last">مدت زمان فعال سازی</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#customers {
  border-collapse: separate;
  width: 100%;
}
#customers tr {
  background: white;
  border-bottom: 1px solid #d2e2ff;
  text-align: center;
  font-size: 18px;
}
#customers td,
#customers th {
  padding: 8px;
}
#customers th {
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  color: #12377b;
  border: none;
  background: #e9f1ff;
  font-weight: 700;
  font-size: 18px;
}
#customers tr:nth-child(2) td:first-child {
  border-top-left-radius: 36px;
}

#customers tr:nth-child(2) td:last-child {
  border-top-right-radius: 36px;
}
#customers tr:last-child td:first-child {
  border-bottom-left-radius: 36px;
}

#customers tr:last-child td:last-child {
  border-bottom-right-radius: 36px;
}
#customers tr:last-child {
  color: #12377b;
}
#customers td:nth-child(6) {
  color: #12377b;
}
#customers td:nth-child(3) {
  background: #deeaff;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
}
#customers th:nth-child(3) {
  background: #deeaff;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
}
.table {
  padding: 50px;
  background: #e9f1ff;
  border-radius: 50px;
}
</style>