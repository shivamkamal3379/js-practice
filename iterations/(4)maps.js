 const map = new Map () 
 map.set(' IN' , "India ")
  map.set(' USA ' , " United states of america   ")
 map.set(' FR' , "France  ")
  // map.set for adding values to the map 
 // enteries will be unique cant add same entries again and again 
  console.log(map);
   // the output will be  in the form of objects 
//    Map(3) { 
//   ' IN' => 'India ',
//   ' USA ' => ' United states of america   ',
//   ' FR' => 'France  '
// }
     for (const key of map) {
         console.log(key);
         // this will return teh   map as an array each entry would be differennt array 
     }
//---------------------------------------------------------------------------------------------------

//this can be done through de structuring of an array 
 for (const [  key , value] of map) {
         console.log(key , ' :- '  , value);
      }
       // output 
// IN  :-  India 
//  USA   :-   United states of america   
//  FR  :-  France 
 const myObject = {
    'game ' : 'NFS' , 
    'game2 ' : 'Spider_man' 
 } // this would be not able to run coz myObject   is not interable 
// at last objects cant be iterated in for-of loops 
