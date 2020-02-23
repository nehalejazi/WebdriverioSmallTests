class Ukelement{

  
  get h3Header(){
      return $('h3');

  }
  
    getLinkElement(index1)
  {
      return $(`ul li:nth-child(${index1}) a`);
  }

  clickonLInkMethod(index1){
      this.getLinkElement(index1).waitForDisplayed();
      this.getLinkElement(index1).click();
  }
  

   checkBoxElement(index2){
       return $(`form#checkboxes input:nth-child(${index2})`);
   }
   clickonCheckboxlement(index2){
       this.checkBoxElement(index2).waitForDisplayed();
       this.checkBoxElement(index2).click();
   }

    //form#checkboxes input:nth-child(2)






}
module.exports = new Ukelement();