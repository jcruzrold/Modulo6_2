var randomPick = (amount, minimum, maximum) => {
    let listOfNumbers = [];
    let number;

    if(amount > maximum - minimum + 1) { //si no se pueden repetir los valores, el máximo no puede superar el rango
        amount = maximum - minimum + 1;
    }

    for(let iterator = 0; iterator < amount; iterator++){
        do{
            number = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        }while(listOfNumbers.indexOf(number) !== -1);

        listOfNumbers.push(number);
    }

    return listOfNumbers;
}

window.onload = () => {
    console.log(randomPick(6, 1, 49));
    console.log(randomPick(15, 1, 15));
    console.log(randomPick(1, 1, 6));
}