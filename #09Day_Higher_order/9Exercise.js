const countries2 = [
    'Philippines',
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]


//*Filter countries containing land
const countriesContainingLand = countries2.filter((country) => country.includes('land'))

console.log(countriesContainingLand)            //

const countriesContainingEnd = countries2.filter((country) => country.endsWith('ia'))

console.log(countriesContainingEnd)             //

const countriesLengthSize = countries2.filter((country) => country.length === 6 )

console.log(countriesLengthSize)                //
