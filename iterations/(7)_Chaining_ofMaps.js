 const myNums = [1,2,3,4,5,6,7,8,9,10]


//  const SortNums = myNums.map((num)=> num+10  )
//--------------------------------------
// chaining of multiple map functions in a single command 
 const SortNums = myNums
            .map((num)=> num*10 ) // here the values are udated of an array according to the operation passed in this command nexrt map will perform operations o fteh previous array  that is re-made in the map upon this 
            .map((num)=> num + 1  )
            .filter((num)=> num>=40)




 console.log(SortNums);
