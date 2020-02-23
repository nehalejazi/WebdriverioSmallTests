const cba = require("../pages/ukelement");
describe("Checkbox test1", function(){


    it("Assertion expample", function(){

        browser.url("https://the-internet.herokuapp.com/");
        expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/");

    })

    it("Another assertion 2", function(){

          cba.clickonLInkMethod(6);
          let text =cba.h3Header.getText();
          expect(text).equals("Checkboxess");     
    })


   it("Checkbox it block", function(){

      browser.url("https://the-internet.herokuapp.com/");
      cba.clickonLInkMethod(6);
      cba.h3Header.waitForDisplayed();      
      cba.clickonCheckboxlement(1);
      expect(cba.checkBoxElement(1).isSelected()).equals(true);
      browser.pause(5000);


   })

})