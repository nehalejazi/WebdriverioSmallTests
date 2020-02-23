const act = require("../pages/action.page");
describe('First action describe', function(){

it('First it block for action class', function(){

    browser.url("https://www.spicejet.com/default.aspx");
    act.moveToElement(act.parent);
    act.moveToElement(act.chaild1);
    act.clickElementMethod(act.chaild2);
    browser.pause(5000);
})

it('Keys action performed it block tab', function(){

      browser.url("https://the-internet.herokuapp.com/key_presses?");
      act.enterSearch("Tab");
      const text11 = act.getElementresultText();
      console.log(text11);
      browser.pause(3000);

})



})