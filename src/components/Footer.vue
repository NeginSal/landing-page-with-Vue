<template>
   <footer id="main-footer" class="py-2">
      <div class="container footer-container">
        <div>
          <h3>راهنمای خرید</h3>
          <ul class="list">
            <li><a href="#"> مقالات </a></li>
            <li><a href="#"> برترین های </a></li>
            <li><a href="#"> درباره ما </a></li>
            <li><a href="#"> تماس با ما</a></li>
          </ul>
        </div>

        <div>
          <h3>لینک های سایت</h3>
          <ul class="list">
            <li><a href="#"> مقالات </a></li>
            <li><a href="#"> برترین های </a></li>
            <li><a href="#"> درباره ما </a></li>
            <li><a href="#"> تماس با ما</a></li>
          </ul>
        </div>

        <div>
          <h2>عضو شوید</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
          <a href="#" class="btn btn-secondary"> عضویت </a>
        </div>

        <div>
          <h2 class="logo"><span class="text-primary">WEBPROG</span>.ir</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        
        <div>
          <p>
            تمامی حقوق این سایت محفوظ و متعلق به اِتِرِکس می باشد 
          </p>
        </div>
      </div>
    </footer>
  
</template>

<script>
export default {

}
</script>

<style scoped>
h3{
  color: #2A6AE3;
  font-weight:700 ;
  font-size: 18px;

}
#main-footer {
  background: var(--dark-color);
  color: black;
}

#main-footer a {
  color: black;
}

#main-footer .footer-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
}

#main-footer .footer-container div:last-child {
  background: #2A6AE3;
  border-radius: 32px 32px 0px 0px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  grid-column: 1 / span 4;
  padding: .5rem;
  font-size: 0.75rem;
}

#main-footer .footer-container div:last-child p{
  text-align: center;
}

#main-footer .footer-container input[type='email'] {
  width: 90%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

#main-footer .footer-container input[type='submit'] {
  width: 90%;
}

</style>