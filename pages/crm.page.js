class CrmExample{


get forgetPwd(){
    return $('=Forgot Password?');
}

moveToElement(element){

   element.waitForDisplayed();
    element.moveTo();
}

}
module.exports = new CrmExample();