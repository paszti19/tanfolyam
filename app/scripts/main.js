console.log('\'Allo \'Allo!');

$('.phonecallerWrapper').phonecaller({
  defaultCountryCode: '36',
  change: function(fullNumber) {
    console.log('fullNumber: ' + fullNumber);
  }
});

$('.selectpicker').selectpicker({
  style: 'btn-info',
  size: 4
});



window.setTimeout(() => {
  $("#favcolor").spectrum('destroy').spectrum({
    color: "#f00",
    change: color => {
      $('body').css('background-color', color.toHexString());
    }
  });
}, 5000);

/*ES6 sample*/
var arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(function () {
    console.log(i);
  });
}

arr[3]();

let tomb = [1,2,3];

let t2 = tomb.map(function (x) {
  return 2*x;
});

let t3 = tomb.map(x => 2*x);

console.log(t2);
console.log(t3);

class Person {
  constructor(firstName = 'Dani', lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    var multilineString = `dsfdsfdsf
    fsdsfsd
    fdsfsd
    fsdf
    sdfs`;

    return `${this.firstName} ${this.lastName}`;
    //return this.firstName + ' ' + this.lastName;
  }
}

class Programmer extends Person {
  constructor(firstName, lastName, favoriteLang) {
    super(firstName, lastName);
    this.favoriteLang = favoriteLang;
  }

  getName() {
    return `${super.getName()} who likes ${this.favoriteLang}`;
  }
}

var dani = new Programmer('Dániel', 'Pásztor', 'Java');
console.log(dani.getName());


var {hostname, port, protocol} = window.location;
console.log(`hostname: ${hostname}`);

var [a,b,c] = 'Ez egy mondat'.split(' ');
console.log(`a: ${a} b: ${b} c: ${c}`);

var t5 = [1,2];
var t6 = [5,6];
var t7 = [...t5, 3,4, ...t6];
console.log(t7);
