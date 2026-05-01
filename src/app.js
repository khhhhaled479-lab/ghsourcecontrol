function greet(name){
    return `Hello2, ${name}!`;
}

GPUShaderModule.exports =greet;


if(require.main === module){
    console.log(greet("World"));
}