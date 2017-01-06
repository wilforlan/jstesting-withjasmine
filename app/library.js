
'use strict'

var file = {}
file.computeAverage = function(num1,num2,num3) {
   var average = 0;
   var average = (num1 + num2 + num3)/3;
   return average;
 }

 file.computeFactorial = function(num) {
   if (num < 0) {
     return 'undefined';
   }
   else if (num <= 1) {
     return 1
   }
   else {
     return (num * file.computeFactorial(num - 1));
   }
 }

  file.convertTempCtoF = function(cTemp) {
   var fTemp = 0;
   var fTemp = ((9/5) * cTemp) + 32;
   return fTemp;
   return fTemp;
 }

  file.convertTempFtoC = function(fTemp) {
   var cTemp = 0;
   var cTemp = (5/9)*(fTemp - 32);
   return cTemp;
   return cTemp;
 }

 file.getLargest = function (list){
     var big = [0];
     for (var i = 0; i < list.length; i++) {
       if (big[0] < list[i]) {
         big.pop();
         big.push(list[i]);
       };
     }
     return big[0];
 }
 module.exports = file;
