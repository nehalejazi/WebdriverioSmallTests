const homePage1 = require("../pages/home.page")

describe("First test", function()
{
  it("First it bock", function(){

          browser.url('/');
     
         //homePage1.usrname.setValue('nehal_51');
         //homePage1.pwd.setValue('India786');
         //homePage1.clickOnloginbuton.click();
         homePage1.usrnameValue("nehal_51");
         assert.equal('nehal_51', homePage1.usrname.getValue());
        
  })

  it('second it block', function(){
    
    homePage1.pwdValue("India786");
    assert.equal('India786',homePage1.pwd.getValue());



  })

 
  it('Fourth it block', function(){

      homePage1.usrname.click();
      homePage1.usrname.clearValue();
      assert.equal('', homePage1.usrname.getValue());
        
  })
  it('Third it block', function(){
    
    homePage1.clickonLogin();
    browser.pause('5000');
     

  })
})