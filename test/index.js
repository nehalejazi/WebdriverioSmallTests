describe("First test", function()
{
  it("First it bock", function(){

      browser.url('/');
      ////input[@name='username']
      ////input[@name='password']
      ////input[@type='submit'][@value='Login']
      //nehal_51
      //India786
      ////td[@class = "headertext"][@align="left"]
      const usrname =$('//input[@name="username"]');
      const pwd = $('//input[@name="password"]');
      const clickOnloginbuton = $('//input[@type="submit"][@value="Login"]');
      usrname.setValue('nehal_51');
      pwd.setValue('India786');
      clickOnloginbuton.click();
      browser.pause(5000);
   


  })


})