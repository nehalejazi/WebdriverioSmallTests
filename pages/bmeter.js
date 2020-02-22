class Bmeter{

get parent(){
    return $('//ul[@class="list-nav-links"]');
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

    return $$('//div[@id="main_b_footer_second_block"]/ul/li');
}

get tuelemnts(){

       return this.useCase.filter(element1 =>{
           console.log(element1.getText());
       })
}


}
module.exports = new Bmeter();