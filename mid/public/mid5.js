let a = [ "hello.html", "world.js", "readme.txt" ];

for(let fileName of a){
    console.log(getExtension(fileName));
}

function getExtension(fileName){
    const index = fileName.lastIndexOf('.');
    const result = fileName.substring(index, fileName.length);
    return result;
}