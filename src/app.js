function greet(name){
    return `Hello, ${name}!`;
}

GPUShaderModule.exports =greet;


if(require.main === module){
    console.log(greet("World"));
}

console.log("Weelocm")
