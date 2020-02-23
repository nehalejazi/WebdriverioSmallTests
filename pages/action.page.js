class Spicejet{

get parent(){

    return $('#ctl00_HyperLinkLogin');
}
get chaild1(){
    return $('=SpiceClub Members');
}
get chaild2(){
    return $('=Member Login');
}
moveToElement(element){
   element.waitForDisplayed();
   element.moveTo();
}

clickElementMethod(element){
   element.waitForDisplayed();
   element.click();
}

get search(){

    return $('#target');
}
get result(){
    return $('#result');
}

getElementresultText(){
    return this.result.getText();
}
enterSearch(text){
    this.search.waitForDisplayed();
    this.search.setValue(text);
    
}







}

module.exports = new Spicejet();