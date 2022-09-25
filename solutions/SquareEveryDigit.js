function squareDigits(num){
    return (+(num + '').split('').map(el => el * el).join(''));
    }