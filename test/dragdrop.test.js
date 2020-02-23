describe('drag and drop feature', function(){

   it('First it bblock fro drag and drop', function(){

       browser.url("https://jqueryui.com/resources/demos/droppable/default.html");
       const source = $('#draggable');
       const target = $('#droppable');
       source.dragAndDrop(target);
       browser.pause(5000);

   })


})