const db = require('../models')

db.Place.create ([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/fresh-soup.jpg',
    founded: 1989
}, {
    name: 'Golden Krust Caribbean Restaurant',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Caribbean Restaurant',
    pic: '/images/golden-krust.jpg',
    founded: 2019
}, {
    name: 'Big Eds',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Southern Farm Fresh Country Breaskfast',
    pic: '/images/cafe.jpg',
    founded: 2020
}, {
    name: 'Coding Cat Cafe',
    city: 'Pheonix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coding-cat.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})