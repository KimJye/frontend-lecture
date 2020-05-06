const array = [];
for(let i=0; i<100; ++i){
    array.push(Math.floor(Math.random() * 100) + 1);
};

array.sort((a, b) => {
    return a - b
});

console.log(array);