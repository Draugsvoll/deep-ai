<template>

   <footer>
          <div class="footer-container">

            <div class="column">
              <div class="footer-headline">Contact: </div>
              <div>Phone: 777 99 555</div>
              <div>Email: Imager@ai.com</div>
            </div>
            <div class="column">
              <div class="footer-headline">Visit Us: </div>
              <div>Silicon Valley, CA</div>
              <div>125th Street</div>
            </div>
            <div class="column">
              <div class="footer-headline">Need Help?</div>
              <div><a class="link">Submit Form</a></div>
              <div><a class="link">Chatbox</a></div>
            </div>
          </div>

          <!-- Copyright -->
        <div class="copyright">© 2021 Copyright | Imager-Ai</div>
        <!-- Copyright -->
    </footer>

</template>


<style scoped>

footer{
  /* background-color: rgb(33, 46, 75); */
  background:rgba(0, 0, 0, 0.55);
  color:rgb(213, 229, 233);
  padding:40px;
  margin-top:150px;
  border:none;
  font-size: 13px;
  backdrop-filter: blur(2px);
}

.copyright {
    display: flex;
    justify-content: center;
    margin-top:40px;
    font-size:12px !important;
}

.footer-container {
    display: inline-flex;
    justify-content: space-evenly;
    width:100%;
    flex-wrap: wrap;
}
.footer-headline {
  font-weight: 500;
  font-size:18px !important;
  margin-bottom: 5px;
}
.link {
  text-decoration: underline;
}
a {
  color:rgb(14, 164, 164);
}
@media only screen and (max-width: 468px) {
  
  .column {
    margin-top:25px;
  }

}
</style>