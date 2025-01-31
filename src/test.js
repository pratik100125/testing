const hello = () => "hello world"

console.log(hello());

const myArray = ['Apple', 'Banana', 'Orange'];
const mylist = myArray.map((item) => {
  console.log(item);
});

const vehicles = ['mustang', 'f-150' , 'expedition'];
const [car , truck, suv] = vehicles;
console.log("car is: "+car);
console.log("truck is: "+ truck);
console.log("suv is: " +suv);

console.log("----------------------------------------------------------------");
const object1 = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const object2 = {
    
    name: 'Jane',
    age: 25,
    city: 'Los Angeles'

}; 
 

const bothObjects = {...object2, ...object1};
console.log(bothObjects);