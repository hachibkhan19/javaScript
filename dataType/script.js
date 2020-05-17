
var num = 12; //number Data type
document.write(typeof(num) +'</br>');

var str = 'Hasib khan'; // String data type
document.write(typeof(str) +'</br>');

var bool = true; //boolean data type
document.write(typeof(bool) +'</br>');

document.write('</br>');
document.write('</br>');
document.write('</br>');

// First option deceleration
var Cars = {                    // object data type
    name: 'Volvo, ',
    model: 'Walton, ',
    price: 120000,
    auto: function(){
        return('Car name: ' +this.name +'Car model: '+ this.model +'Car price: '+ this.price)
    }

}

document.write(Cars.auto());

document.write('</br>');
document.write('</br>');
document.write('</br>');

// Second option object deceleration

function Car(name, model, price){
    this.name = name;
    this.model = model;
    this.price = price;
    this.display = function(){
        document.write('Car name: ' +this.name+ ', ' +'Car model: '+ this.model+ ', '  +'Car price: '+ this.price)
    }
}

var c1 = new Car('Corolla', 'Walton', 14000 +'<br>');
var c2 = new Car('BMW', 'Walton1', 1200000+'<br>');
var c3 = new Car('Toyota', 'Walton2', 1800000+'<br>');

c1.display();
c2.display()
c3.display()


// This is a single line comment.

/*This is a multiline Comment*/

