const homePage2 = require("../pages/bmeter")
describe("Testing findbyelemnts method", function(){

       it("Testing it block for multiple elemnt", function(){

          browser.url("https://www.blazemeter.com/");
          //homePage2.textofchild;
          //homePage2.tuelemnts;
          console.log(homePage2.specificChilelement(3).getText());
          homePage2.getspecificChildelement(4);
       })
})