class Customer{
    name;
    age;
    address;

    // Customer(){

    // }

    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
    }

    setName(name) {
        this.name=name;
    }
    getName(){
        return this.name;
    }

}

let customer01 = new Customer("saman",12,"gamapaha");

console.log(customer01.getName());