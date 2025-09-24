 const coding = ["js " ,  "cpp" , "c" , "python"]
  // some examples are that run in the  console  pannel  of inspect 
   // foreach loophelps to call the functions\ 

//     coding.forEach( function (item)
//     { console.log( item);
// } )


 // using arrow functions 
  coding.forEach( (item) => {
    console.log(item);
     })
      // taking to next level functions 
       console.log("function print me starts \n  ");
          
  function printMe (item ) {
    console.log( item );
  }
  
  
coding.forEach(printMe )// only reference of teh function should be givem not even a singe function should be executed 

//--------------------------------------------------------------------------------
 coding.forEach((item , index , arr )=>{ 
    console.log(item , index , arr );
    
 })

  //-----------------------------------------------
   const myCoding = [
    {
        languageName : "javascript", 
        languageFileName : "js"
    },
    {
        languageName : "java", 
        languageFileName : "java"
    },
{
        languageName : "Python", 
        languageFileName : "py"
    }
   ]
    // this  is a array  having an object in each array 
console.log( " this is now all how can we iterate over this ");

     myCoding.forEach( (item) => {
        
          console.log(`${item.languageName}`);
         
     })