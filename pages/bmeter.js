class Bmeter{



get mainHeader(){

    return $('h2.home_title');
}    

get jmlink(){

    return $('//a[text()="JMeter"]');
}
get productlink(){
    return $('ul.list-nav-links li:nth-child(1) a');
}
clickOnProductlink(){
    if(this.productlink.isDisplayed() ===true){
        this.productlink.click();
    }
}

get parent(){
    //return $('//ul[@class="list-nav-links"]');
    return $('ul.list-nav-links');
}

get child(){

     return this.parent.$$('li');

}

get textofchild(){


      return this.child.filter(element =>{
          console.log(element.getText());
      })

}
get useCase(){

    //return $$('//div[@id="main_b_footer_second_block"]/ul/li');
    return $$('div#main_b_footer_second_block>ul>li');
}

get tuelemnts(){

       return this.useCase.filter(element1 =>{
           console.log(element1.getText());
       })
}

 specificChilelement(index){
    return this.parent.$(`li:nth-child(${index})`);
}

getspecificChildelement(index){
    console.log(this.specificChilelement(index).getText());
}




}
module.exports = new Bmeter();