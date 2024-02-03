const db = require('../models')

db.Place.create ([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/fresh-soup.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Pheonix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
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