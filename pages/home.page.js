class Homepage{
    get usrname(){
        return $('//input[@name="username"]');
    }

    get pwd(){
        return $('//input[@name="password"]');
    }
    get clickOnloginbuton(){
        return $('//input[@type="submit"][@value="Login"]');
    }

     usrnameValue(text1){
        this.usrname.waitForDisplayed();
        this.usrname.setValue(text1);
    }
     pwdValue(text2){
        this.pwd.waitForDisplayed();
        this.pwd.setValue(text2);
    }
     clickonLogin(){
        this.clickOnloginbuton.waitForDisplayed(); 
        this.clickOnloginbuton.click();
    }
}

module.exports = new Homepage();