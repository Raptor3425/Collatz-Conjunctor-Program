function Collatz_Conjunction(n) {
    
    if (n == 0){
        console.log("Sorry " + n + " is not valid!");
        return(0);
    } 
if (n == undefined){
    console.log("Sorry " + n + " is not valid!");
    return(0);
}
    let steps = 0;
    let initial_n = n;
    let Highest_Number = n;
    console.log("Number is " + n);


    do {
        if (n % 2 == 0) {
           n = n / 2;
        } else {
           n = 3 * n + 1;
        }
         steps+= 1;
        console.log("Step " + steps + ": " + n);

    if (n > Highest_Number) {
        Highest_Number = n
    }
    } while (n !== 1);
    console.log("Highest possible number for " + initial_n + " is: " + Highest_Number);
    console.log("Total amount of steps taken: " + steps);
    
}

Collatz_Conjunction(); // << -- Input your number in the parenthisis. 