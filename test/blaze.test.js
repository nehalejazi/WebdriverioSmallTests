const homePage2 = require("../pages/bmeter")
describe.skip("Testing findbyelemnts method", function(){

       it("Testing it block for multiple elemnt", function(){

          browser.url("https://www.blazemeter.com/");
          //homePage2.textofchild;
          //homePage2.tuelemnts;
          console.log(homePage2.specificChilelement(3).getText());
          homePage2.getspecificChildelement(4);
       })
       it("Testing is displayed method", function(){
           console.log('Testing is displayed method',homePage2.mainHeader.isDisplayed());
       })
       it("Testing is enabled method", function(){
        console.log('Testing enabled methid: ',homePage2.mainHeader.isEnabled());
    })
    it("Testing is existing method", function(){
        console.log('Testing is existing: ',homePage2.mainHeader.isExisting());
    })

    it("Testing is viewport method", function(){
        console.log('TEsting in viewports method: ',homePage2.mainHeader.isDisplayedInViewport());
    })
    it("Testing is viewport method1", function(){
        console.log('TEsting in viewports method1: ',homePage2.jmlink.isDisplayedInViewport());
    })
    it("Testing is click on product", function(){
        homePage2.clickOnProductlink();
        browser.pause(5000);
    })
})