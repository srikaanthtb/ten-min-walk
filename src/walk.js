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
    }

if (ns == 0 && we == 0){
    return true
}
}