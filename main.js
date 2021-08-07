/******************Min Age*****************************/

// ONE in var i = 1  is becuse we want to skip the unnesserry first comparison with himself 


// var myArray = [78,18,15,12,60,25,10,30];
// var minNumber = myArray [0];

// for (var i = 1; i < myArray.length ; i++) {

//     if (myArray[i] <  minNumber  ) {
        
//         minNumber = myArray[i];

//     }

// }

// console.log(minNumber);


/******************Max Age*****************************/

// ONE in var i = 1  is becuse we want to skip the unnesserry first comparison with himself 

     

// var myArray = [78,18,15,12,60,25,10,30];
// var minNumber = myArray [0];

// for (var i = 1; i < myArray.length ; i++) {

//     if (myArray[i] >  minNumber  ) {
        
//         minNumber = myArray[i];

//     }

// }

// console.log(minNumber);


/*******************Sum Age****************************/


// var myArray = [78,18,15,12,60,25,10,30];
// var SumNumber = 0 ;

// for (var i = 0; i < myArray.length ; i++) {

    
        
//     SumNumber += myArray[i];

    

// }

// console.log(SumNumber);


/*******************Avg Age****************************/


// var myArray = [78,18,15,12,60,25,10,30];
// var SumNumber = 0 ;

// for (var i = 0; i < myArray.length ; i++) {

    
        
//     SumNumber += myArray[i];

    

// }

// console.log(SumNumber/myArray.length);



/*******************include Age****************************/


// var myArray = [78,18,15,12,60,25,10,30];
// var userInput = Number (prompt("Please Enter A Value"));

// for (var i = 0; i < myArray.length ; i++) {

//     userInput = Number (prompt("Please Enter A Value"));
        
//     if(userInput == myArray[i]  ) {

//         alert ("The Value exist")

//     }else{

//         alert ("the value Does Not exist")

//     }


// }


/*******************Multiplay Age****************************/


// var myArray = [78,18,15,12,60,25,10,30];
// var multiNumber = 1 ;

// for (var i = 0; i < myArray.length ; i++) {

    
        
//     multiNumber *= myArray[i];

    

// }

// console.log(multiNumber);



/*******************All Age****************************/

// var myArray = [78,18,15,12,60,25,10,30];

// for (var i = 0; i < 10 ; i++ )  {


//         for (var j = 0; j < myArray.length ; j++ ) {

//             console.log(myArray[j]);

//         }

// }



/******************************************************* */


// var myArray = [];
// var userInput = Number(prompt("Please Enter a Number"));

// for (var i = 0; i < 5; i++ ) {

//     myArray[i] = userInput =  Number(prompt("Please Enter a Number"));
//     // myArray = userInput;


// }

// console.log(myArray);

/*********New Method*************** */

// var myArray = [];
// var userInput = Number(prompt("Please Enter a Number"));

// for (var i = 0; i < 5; i++ ) {

//     userInput =  Number(prompt("Please Enter a Number"));
//     myArray.push (userInput);


// }

// console.log(myArray);





/*************************Question2****************************** */

// var arrayNumber = [78,55,12,36,47];
// var arrayString = ["bob","sadi" ,"cevin"];


/*************************Question3****************************** */

// var mixArray = ["bob","sadi",36,47,78,12,63,90];
// var changed = mixArray[0] ;

// mixArray[0] = mixArray[1];
// mixArray[1]= changed;

// console.log(mixArray);

/*************************Question3.2****************************** */

// var Secondchanged = mixArray[0]

// mixArray[0] = mixArray [7]
// mixArray[7] = Secondchanged ;

// console.log(mixArray);




/*************************Question4****************************** */



// var myArray = [5,3,7,8,11];
// var sum = 0;

// for (var i = 0; i < myArray.length ; i++) {

//     sum += myArray[i];

// }

// console.log({sum});
// console.log(sum/myArray.length);


/*************************Question5****************************** */

// var myArray = ["bob" , "sadi" , "ran","david" ,"sod"];

// for (var i = 0; i < myArray.length ; i++) {

//     console.log(myArray[i]);

// }


/*************************Question6****************************** */


// var myArray = [];
// var userInput = Number (prompt("Please Enter A Number"))

// for ( var i = 0; i < 5 ; i++) {

//    userInput = Number (prompt("Please Enter A Number")) 
//    myArray.push(userInput);

// }

// console.log(myArray);


/*************************Question7****************************** */

// var myArray = ["bob" , "sadi" , "ran","david" ,"sod", "gail" , "tom","geri" ,"cevin" , "ford"];
// var userInput = prompt("Please Enter A Number")
 
// for (var i = 0; i < myArray.length ; i++) {

//     userInput = prompt("Please Enter A Number")

//     if (userInput == myArray[i] ) {
       
//         console.log("The Value EXIST");

//     }

// }

/*************************Question8****************************** */

// var myArray = [];
// var userInput = Number (prompt("Please Enter A Number"));


// for ( var i = 0; i < 3 ; i++) {

//     userInput = Number (prompt("Please Enter A Number"));

//     if (userInput) {

//          myArray.push(userInput);
//     }else{

//         alert("Please Enter A Number!!!!!!")
//     }


   

// }

// console.log({myArray}); 


/*************************Question8.1 + 8.2 + 8.3 + 8.4****************************** */

// var myArray;
// var multipl = 1;
// var sum = 0;

// for (var i = 0; i < myArray.length; i++ ) {


//   if (myArray[i]%2 == 0  ) {

//     console.log("The Value Is Even");

//   }else{

//     console.log("The Value Is Odd");

//   }

//    multipl *= myArray[i];
//    sum += myArray[i];

   
  

// }

// console.log(multipl);
// console.log(sum);




/*************************Question9****************************** */


// for ( var i = 1 ; i <= 10; i++) {

//     for (var N = 1; N <= 10 ; N++) {

//         console.log(`i * N = ${i} * ${N} = ${i * N}  `);


//     }

// }


/*************************Question10****************************** */

// var myArrayNames = ["bob" , "sadi" , "ran","david" ,"sod", "gail" ];
// var myArray = [];
// var userInput = Number (prompt("Please Enter A Number"));

// for ( var i = 0; i < 5 ; i++) {
  
//     userInput = Number (prompt("Please Enter A Number"));
//     myArray.push(userInput);
//     console.log(myArray);

// }

// for (var N = 0; N < myArray.length; N++  ) {

//     console.log(myArrayNames);

// }


/*************************Question11****************************** */


// for (var i = 0; i <= 7 ; i++) {

//     if ([i] != 7 ) {

//         console.log([i]);

//     }

// }









