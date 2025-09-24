     const coding = ["js" , "java", "python", "css"]
 const values = coding.forEach( (item ) => {
    console.log(item);
//  return item    
} )

 //foreach lops never return a value 

  console.log( values);
  

   const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 ]
    const sort =  nums.filter((nums ) =>  nums > 5  ) // here the condition  we written here is said the filter condition 
     console.log(sort);

      // if we are putting curly braces that means we started a scope in the function so if we want that to be printed we should add a return keyword with that 
        const newnums = nums.filter(( numm)=> {
             return numm >5
        })
         console.log(newnums);






         //-----------------------------------------------
         
          console.log( " we can also use the  if condition wothin the  filter code  \n ");
           // declaring an empty array -> here w are using a pre declared array and iterating that on every elemnt so that if the element sartusfies the criteria that woyld be shifted in the bnew array 
            const newNums = [];
                const again_nums =  nums.forEach((nummm)=> {
                if (nummm<5) {
                 newNums.push(nummm)               
            }
           })
            console.log(newNums)
           
          
         