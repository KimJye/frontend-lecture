 const array = [];
 for(let i=0; i<100; ++i){
     array.push(Math.floor(Math.random() * 100) + 1);
 }

 const result = array.filter(n => {
     const num = n%10;
     if(!(num>=5 && num<=9)) return n;
 })

 console.log(result)
