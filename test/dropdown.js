describe('Testing dropdown with Facebook', function(){

    it.skip('First it block with dropdown using select visible by text', function(){


       browser.url("https://www.facebook.com/");
       $('#day').selectByVisibleText('12');
       $('#month').selectByVisibleText('May');
       $('#year').selectByVisibleText('1990');
       browser.pause(2000);



    })
    it.skip('second it block with dropdown using select by index', function(){


        browser.url("https://www.facebook.com/");
        $('#day').selectByIndex(3);
        $('#month').selectByIndex(9);
        $('#year').selectByIndex(13);
        browser.pause(3000);
        
 
 
     })
     it.skip('sthird it block with dropdown using select by attribute', function(){


        browser.url("https://www.facebook.com/");
        $('#day').selectByAttribute('value',25);
        $('#month').selectByAttribute('value',6);
        $('#year').selectByAttribute('value',1997);
        browser.pause(5000);
        
 
 
     })
     it.skip('gettheDropdownValues day', function(){


        browser.url("https://www.facebook.com/");
        let list = $$('#day option');
        console.log("List length is : ",list.length)
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            console.log(element.getText());
            
        }
 
 
     })
     it('gettheDropdownValues month', function(){


        browser.url("https://www.facebook.com/");
        let list = $$('#month option');
        console.log("List length is : ",list.length)
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            console.log(element.getText());
            if (element.getText()==='Mar') {
                element.click();
                break;
                
            }
        }
        browser.pause(5000);
 
 
     })




})