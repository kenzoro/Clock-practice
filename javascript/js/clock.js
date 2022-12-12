function Clock(elementHandler)
{
 this.elementHandler = elementHandler;
 this.actualDate = new Date();
 this.start = function() 
 {
   this.updateElementHandlerContent();

   var self = this;
   setInterval(function(){
      self.addSecond();
      self.updateElementHandlerContent();
   }, 1000); 
 };
 this.addSecond = function() 
 {
   this.actualDate = new Date();
 };
 this.updateElementHandlerContent = function() 
 {
  this.elementHandler.innerHTML = this.actualDate.toLocaleTimeString();
 };

};

window.onload = function()
{
 var info = document.getElementById("info");
 var clock = new clock(info);

 clock.start();

};