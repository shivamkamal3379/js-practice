 const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


 
  // to iterate the objects we will use the for-in loops that would hlp us to iterate theobjects 
   for (const key in myObject) {

      console.log(`${key}  shortcut is for ${myObject[key]}`);
      
      
   }
    // for in loop in arrays 


     const programming = ["js" , " java", " python ", "css"]
    for (const key in programming) {
   // console.log(key);
        // key here will print the indexing of the arrays 
        //instead of writing the (key ) simply we can write 
     console.log(programming[key]);
      
    }
     //------------------------------------------------------------------------------------------

      // for of loops ->> can be only used with arrays not with objects 
       // for in loops->> objects should be dealt with for of loop
       // these are the twotypes of loops 
