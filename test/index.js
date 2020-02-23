const homePage1 = require("../pages/home.page")

describe.skip("First test", function()
{
  it.skip("First it bock", function(){

      browser.url('/');
     
         homePage1.usrname.setValue('nehal_51');
         homePage1.pwd.setValue('India786');
         homePage1.clickOnloginbuton.click();
         browser.pause(5000);
   


  })


})