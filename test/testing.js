describe("Second test", function(){

    it("Second it block in different file", function(){

         browser.url("https://www.amazon.com/");
         const gettext = $('//*[@class="a-size-base a-color-base"]');
         let abc = gettext.getText();
         console.log(abc);

    })

})