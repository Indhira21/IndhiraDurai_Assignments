function numberType(){
    let num = '$%';
    switch(true)
    {
        case (num>0):
            console.log("Given number is Positive");
            break;
        case (num<0):
            console.log("Given number is Negative");
            break;
        case(num==0):
            console.log("Given number is Zero");
            break;    
        default:
            console.log("Give valid input");
    }
}
numberType();