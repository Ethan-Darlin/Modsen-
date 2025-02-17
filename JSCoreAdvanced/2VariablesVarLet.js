function testVariableScope() {
    if (true) {
        var xVar = "Я var";
        let xLet = "Я let";   
        const xConst = "Я const"; 

        console.log(xVar); 
        console.log(xLet);  
        console.log(xConst); 
    }
    console.log(xVar); // видна
    // console.log(xLet); Ошибка
    // console.log(xConst); Ошибка
}

testVariableScope();