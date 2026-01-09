const car1 = {
    brand: 'BMW',
    modal: 'G20',
    year: 2020
};

const car2 = {
    brand: 'Subaru',
    modal: 'BRZ',
    owner: 'John Speena'
};

let car3 = { ...car1, ...car2 };

// If I understand correct we would see object in what:
//  - the same keys are rewrited from last,
//  - diferent keys added
console.log('Object car3 is', car3);
