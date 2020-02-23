class AlertTesting{

 alertButton(index){

    return $(`ul li:nth-child(${index}) button`);
}

clickOnAlertButton(index){
       this.alertButton(index).waitForDisplayed();
       this.alertButton(index).click();
}

get result(){
    return $('#result');
}

getResultText(){
    return this.result.getText();
}




}
module.exports = new AlertTesting();
