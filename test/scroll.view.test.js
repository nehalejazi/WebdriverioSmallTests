const abcd = require("../pages/crm.page");
describe('First describe for crm scroll', function(){

 it('First it block for scroll', function(){


    browser.url("https://classic.crmpro.com/");
    console.log("in view port: ", abcd.forgetPwd.isDisplayedInViewport());
    //abcd.forgetPwd.click();
    abcd.forgetPwd.scrollIntoView();
    console.log("after scrolling in view port: ", abcd.forgetPwd.isDisplayedInViewport());
    abcd.moveToElement(abcd.forgetPwd);
    abcd.forgetPwd.click();
    browser.pause(3000);
 })


})