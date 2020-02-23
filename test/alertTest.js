const alert1 = require("../pages/alertPage");

describe('Testing alert', function(){

    it('Testing it block alert', function(){

        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        alert1.clickOnAlertButton(1);
        const alerttext = browser.getAlertText();
        assert.equal('I am a JS Alert',alerttext);
        browser.acceptAlert();
        console.log(alert1.getResultText());
        assert.equal('You successfuly clicked an alert',alert1.getResultText());
        browser.pause(5000);


    })

    it('Testing it block alert2 with dismiss and accept', function(){

        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        alert1.clickOnAlertButton(2);
        browser.dismissAlert();
        console.log(alert1.getResultText());
        assert.equal('You clicked: Cancel',alert1.getResultText());
        browser.pause(5000);


    })
    it('Enter text to an alert and accept', function(){

        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        alert1.clickOnAlertButton(3);
        browser.sendAlertText('Hello Yus');
        browser.acceptAlert();
        console.log(alert1.getResultText());
        assert.equal('You entered: Hello Yus',alert1.getResultText());
        browser.pause(5000);


    })
    it('REdiffmail alert and accept', function(){

        browser.url("https://mail.rediff.com/cgi-bin/login.cgi");
        const path1 = $(`//input[@value='Sign in']`);
        path1.waitForDisplayed();
        path1.click();
        const text = browser.getAlertText();
        console.log(text);
        browser.acceptAlert();
        browser.pause(5000);


    })
})