//objects are key value pair


let capAmerica = {
    firstName:"steve",
    secondNme:"rogers",
    friends:['bucky','tony','dr banner','natasha'],
    age:122,
    isFirstAvenger:false,
    address:{
        state:'queens',
        city:'new york'
    },
    sayHi:function(){
        console.log('Captain saya Hi!!!')
    }
}
//print whole object
//console.log(capAmerica)

//print first name only
//console.log(capAmerica.firstName); //or
//console.log(capAmerica['firstName']);

//console.log(capAmerica.address);
//console.log("state: ",capAmerica.address.state);//we can squae brackets also
//console.log("city: ",capAmerica["address"]["city"])

//console.log(capAmerica.sayHi);//function will print same but not call
//capAmerica.sayHi(); //this is the way we direct give the call to the function

//loop
//for (let key in capAmerica){
    //console.log("key: ",key,"value :",capAmerica[key]); //capAmerica.kry will not work(reason in copy)

//add a new key value pair in existing object
console.log("before update :",capAmerica)
capAmerica.movies=['Avengers','civil war','winter soldier'];

console.log("after update:",capAmerica)
capAmerica.isFirstAvenger=true;
console.log("After update:",capAmerica)

//delete a key value pair
delete capAmerica.movies
console.log(capAmerica)
console.log("movies deleted:",capAmerica);
