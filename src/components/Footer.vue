<template>
   <footer id="main-footer" class="py-2">
      <div class="container footer-container">
        <div>
          <h3>اشتراک</h3>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</p>
          <form>
            <input type="email" placeholder="ایمیل شما ..." />
            <input type="submit" value="اشتراک" class="btn btn-primary" />
          </form>
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
            کپی رایت  &copy; 2019, لورم ایپسوم متن ساختگی
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
#main-footer {
  background: var(--dark-color);
  color: #fff;
}

#main-footer a {
  color: #fff;
}

#main-footer .footer-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
}

#main-footer .footer-container div:last-child {
  background: #444;
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