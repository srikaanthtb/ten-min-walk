function ten_minute_walk(step){
    let ns = 0;
    let we = 0;

    for (let walk in step) {
        if (walk == 'n'){
            ns =+ 1;
        }
        if (walk == 's'){
            ns =- 1;
        }
        if (walk == 'w'){
            we =+ 1;
        }
        if (walk == 'e'){
            we =- 1;
        }
    }

if (ns == 0 && we == 0 && step.length == 10){
    return true
} else{
    return false
}
}