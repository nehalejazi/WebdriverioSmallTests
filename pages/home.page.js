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
}

module.exports = new Homepage();