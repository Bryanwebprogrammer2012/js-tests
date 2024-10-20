function BMI(){
    var h = parseFloat(prompt("Input the first number: "));
    var w = parseFloat(prompt("Input the second number: "));
    var sum = h*w;
    while(true){
        if(isNaN(h,w) ||h<0||w<0 ){
            alert("input valid positive number")
            return;
        }
        print("the total is ",sum);
    
    
}
}
BMI();