//airthmatics operators 
/*let a = 5;
let b = 2;
let c = 4;
let d = 8;
console.log("a = ", a , "& b= ", b);
console.log("c = ", c , "& d = ", d);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("c / d =", c / d);

console.log("a % b =", a % b);
console.log("a ** b =", a **b);*/

//unary operator
/*let a = 5;
let b = 2;

console.log("a = ",a,"& b = ",b);
 
console.log("--a = ",--a);
console.log("a = ",a);*/

//assignment operators
/*let a = 5;
let b = 2;

a **= 4;
console.log("a =",a);*/

//comparision operator
/*let a = 5; //number
let b = 15; //string

console.log("a >= b ", a <= b);*/

//logical operator
/*let a = 6;
let b = 5;
let c = 4;//
let cond1 = a > b;//true
let cond2 = a===6;//true
let cond3 = c < a ;//true
let cond4 = c > b ;//false
console.log("!(6 < 5) = " (a < b) );*/

//conditional statements
//first condition if-
/*let mode = "light";
let color ;

if(mode === "dark") {
    color = "black";
}

if(mode === "light") {
    color = "white";
}

console.log(color);*/


//second condition if-else
/*let mode = "light";
let color;

if (mode === "dark") {
    color = "black";
}
else {
    color = "white";
}

console.log(color);*/

/*let age = 25;

if( age >= 18) {
    console.log("you can vote");
}
else {
    console.log("you cannot vote");
}*/

//odd or even
/*let num = 30;

if(num % 2 === 0) {
    console.log(num,"is even");
}
else {
    console.log(num,"is odd");
}*/

//else if statement
/*let mode = "dark";
let color;

if(mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "white";
}
console.log(color);

if (mode === "dark") {
    console.log(mode);
} */

    //ternary operator
    /*let age = 16;
    age >= 18 ? console.log"adult" : console.log"not adult";*/
 
   
   //practice question1
    /*let num = prompt("enter a number:");

    if(num % 5 === 0) {
        console.log(num, "is a multiple of 5");
    } else {
        console.log(num, "is a NOT a multiple of 5");
    }*/

        //practise question02
      /*let score = prompt("enter your score(0-100):");
      let grade;
      
      if(score >= 90 && score <= 100) {
        grade = "A";
    } else if(score >= 70 && score <=89) {
        grade = "B";
    } else if(score >= 60 && score <= 69) {
        grade = "C";
    } else if(score >= 50 && score <= 59){
        grade = "D";
    } else if(score >= 0 && score <= 49){
        grade = "F";
    }
    console.log("according to your scores,your grade was :",grade);*/

    //loops & string  

    /*for(let i = 1; i <=5; i++) {
        console.log("apna college");
    }
    console.log("loop has ended");*/

    //calculate sum of 1 to n  no.
    /*let sum = 0
    let n = 200;
    for(let i = 1; i<=n; i++) {
        sum = sum + i;
    }
    console.log("sum = ",sum);
    console.log("loop has ended");*/

    //print number 1 to 5
   /* for(let i = 1; i <= 5; i++) {
        console.log("i = ",i);
    }*/
   //print the table of 2 
   
  /* let num = 5;
   for(let i = 1; i <= 10; i++) {
    console.log(num * i);
   }*/

    //print revrse num from 10 to 1
    /*for(let i = 10; i >= 1; i--) {
        console.log("i = ",i);
    }*/

        //print even no (1-20)
        
        /*for(let i = 1; i <= 20; i++) {
            if(i % 2 === 0) {
            console.log(i);
        }
    }*/

    //print odd no (1-20)
    /*for(let i = 1; i <= 20; i++){
        if(i % 2 !== 0) {
            console.log(i);
        }
    }*/

        //print square of num
        /*for (let i = 1; i <=5; i++) {
            console.log(i * 1);
        }*/


            //while loop
            /*let i = 1;
            while (i <=10) {
                console.log("bhumi rajoriya");
                i++
            }

                let i = 1;
                while (i <= 5) {
                    console.log("bhumi rajoriya");
                    i++;
                }*/

    //do-while loop 
    /*let i = 1;
    do {
        console.log("i=",i);
        i++;
    }  while(i<=100);*/
      
    //for-of loop:---used for arrays and strings 
    /*let str ="bhumirajoriya";

    for(let i of str) {
        console.log("i =",i);
    }*/

 /*let str ="bhumirajoriya";
     let size = 0;

    for(let val of str) {
        console.log("val =",val);
        size++;
    }  
    console.log("string size = ",size); //13*/  

    //for-in loop:--used for objects,array
    /*let student = {
        name:"Rahul Kumar",
        age:20,
        cgpa:7.5,
        ispass:true
    };

    for(let key in student) {
        console.log(" key =", key, "value=", student[key]);
    }*/

    //practice ques of loops - 1.print even and odd no (1-100)
        
        /*for(let num = 0; num <= 100; num++) {
            if(num % 2 == 0) {//even no
            console.log("num = ",num);
        }
    }*/
       //print odd no (1-100)
    /*for(let num = 0; num <= 100; num++) {
            if(num % 2 !== 0) {//odd no
            console.log("num = ",num);
        }
    }*/
    //ques:2 create a game where you start with any random number.Ask the user to keep guessing the game number untill the user enters correct value.
    /*let gameNum = 25;

    let userNum = prompt("Guess the game number : ");

    while(userNum != gameNum) {   //game
        userNum = prompt("you entered wrong number Guess the right number again : ");
    }

    console.log("congratulations,you entered the right number");*/



    //strings in js
   /* let str = "bhumirajoriya";
    console.log(str[6]);*/

    /*let obj = {
        item : "pen",
        Price : 10,
    };

    let output = `the cost of ${obj.item} is ${obj.Price} rupees`;
    console.log(output);

    console.log("the cost of", obj.item, "is", obj.Price, "rupees");*/

    //template literals
    //let specialstring = `this is a template literal ${1+2+3}`;
      //console.log(specialstring);

      //console.log("bhumi \t rajoriya");//\n:give new line,\t:gives tab space

      //let str = "bhumi\trajoriya";//length 14
      //console.log(str.length);

      //strings method

      /*let str ="bhumirajoriya";
      let newstr = str.toUpperCase();
      console.log(str);
      console.log(newstr);*/

      //let str ="bhumirajoriya";
      //let newstr = str.toLowerCase();
      //console.log(str);

      //trim-method:-remove white space starting to end jitne bhi white space hoti h humari string mein unko remove karta h
      /*let Str = "  bhumirajoriya   ";
      console.log(Str.trim());*/

      //let Str = "hello";
      //console.log(Str.slice(0,3));


      ////string concatination method
      /*let Str1 = "bhumi";
      let Str2 = "rajoriya";
      //let result = Str1.concat(Str2);
      let result =" My name is " + Str1 + Str2;
      console.log(result);*/

      //string replace method
      /*let str = "hello";

      console.log(str.replaceAll("lo","p"));*/

      //character AT-method
      /*let str = "I lovejs";

      console.log(str.charAt(5));//i*/

      //Practice ques: Prompt the user to enter their full name.Generate a username for them based on the input .Start username with @,followed by their full name and ending with the fullname length.

      //let fullName = prompt("enter your full name without spaces");

      //let username = "@" + fullName + fullName.length;
      //console.log(fullName);

       //arrays
       //arrays using for loop

       /*let heroes = ["ironman", "thor","hulk","shaktiman","spiderman","batman"];

       for(let idx = 0; idx<heroes.length; idx++) {
        console.groupCollapsed(heroes[idx]);
       }*/

        //for-of 
        /*for (let hero of heroes) {
            console.log(hero);
        }*/

            /*let cities = ["delhi","pune","mumbai","hydrabad","gurugram"];
            for(let city of cities) {
                console.log(city.toUpperCase());
            }*/

        let marks = [85 , 97, 44, 37, 76, 60];
        
        let sum = 0;
        for(let val of marks) {
            sum += val;
        }    
        let avg = sum / marks.length;   
        console.log(`avg marks of the class = ${avg}`);







            
            


    

   
    
    
    
    
    
   
    
    

