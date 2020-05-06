 const a1 = [];
 for(let i=0; i<5; i+=2){
     const array = [];
     array.push(i, i+1);
     a1.push(array)
 }

 const a2 = Object.assign([], a1);

 a1[0][0] = 100;

 console.log(a1);
 console.log(a2);
