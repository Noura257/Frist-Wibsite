var person = {
    fristName: "Noura" ,
    address :{
        city: "cairo",
        country: "Eygpt"

    },
    hobbies : ["football","basketball"],
    id: 1234,
    sayHi : function(){
        console.log("Hi")
    }
};
person.fristName = "Alaidy"
person.sayHi()
console.log(person.hobbies[1]);
console.log(person.address);

