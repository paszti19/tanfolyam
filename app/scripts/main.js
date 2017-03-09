console.log('\'Allo \'Allo!');

// var arr = [];
// for(let i = 0; i < 5; i++){
//   arr.push(function () {
//     console.log(i);
//   });
// }
//
// arr[3]();

// let tomb = [1,2,3];
//
//
// let t2 = tomb.map(function(x){
//   return 2*x;
// });
//
// let t3 = tomb.map(x => 2*x);
//
// console.log(t2);
// console.log(t3);

// class Person{
//   constructor(firstName, lastName = 'Gábor'){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//
//   getName(){
//     var multilinestring = `sbhfishdgb sdf
// fds fds
//
// sdf sdf
//
// dsf`;
//
//
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
//
// class Programmer extends Person{
//   constructor(firstName, lastName, favoriteLang){
//     super(firstName, lastName);
//     this.favoriteLang = favoriteLang;
//   }
//
//   getName(){
//     return `${super.getName()} who likes ${this.favoriteLang}`;
//   }
// }
//
//
//
// var gabor = new Programmer('Gabor', 'Hajdu', 'C#');
//
// console.log(gabor.getName());


/*$('select[multiple]').selectpicker({
  size: 4
});*/


$("#custom").spectrum({
  color: "#f00",
  move: color => {
    $('body').css('background-color', color.toHexString());
  }
});

window.setTimeout(() =>{
  $("#custom").spectrum('destroy').spectrum({
    color: "#EEEEEE",
    move: color => {
      $('body').css('background-color', color.toHexString());
    }
  });
}, 5000);

$('.phonecaller-wrapper').phonecaller({
  defaultCountryCode: '36',
  change: function (num) {
    console.log(num);
  }
});



var app = angular.module('tanfolyamApp', []);





