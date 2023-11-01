
/*

1.Prmitive data types

7 types

1.string
2.number
3.null
4.undefined
5.symbol
6.bigint
7.boolean
*/

const store=33;

const store1=33.2;

const name="raja";

const somenumber=null;

let  myname;

let myid=Symbol('123');

let myid2=Symbol('123');

console.log(myid==myid2);

BigInt=1223333333333333333333333333333333333n






/*
2.Refernce(Non Primtive datatypes)

1.arrays

2.objects

3.functions

*/



const heros=["raja","kumar","ramkumar"];

const myobj={
    name:"raja",
    age:35

}

const myfunc=function(){

}

console.log(typeof myfunc) //function object

console.log(typeof heros);

console.log(typeof myobj);

//non primitive datatypes is giving output =>objects