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
            //--------------------------------------
             //taking a database data and using filtyer commands over that 
              // data is  in objects in array 
              
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

            const userBooks =   books.filter(( bk) => bk.genre==='History')
            const userBooks1 =   books.filter(( bk1) => bk1.publish >=2000)
            const userBooks2=   books.filter(( bk2) => bk2.genre==='History' && bk2.publish>1995)

             console.log(userBooks);
             console.log(userBooks1);
            console.log(userBooks2);

             
             
          
         