const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const app = express();
const methodOverride = require('method-override');

let bodyParser = require('body-parser');

const favoritesong = require('../models/favoritesong.js');


router.use(express.urlencoded({ extended: true}));
router.use(methodOverride('_method'));
router.use(express.json({
    type: ['application/json', 'text/plain']
  }))
  router.use(bodyParser.json());






router.get('/', (req, res) => {

    favoritesong.find({}, (error, foundfavsong) =>{
        res.json(foundfavsong)
    })
    // res.send('we are amazing')
})



router.post('/', (req, res) => {
    favoritesong.create([{
        name: req.body.name,
        email: req.body.email,
        favoriteSong: req.body.favsong,
        whyFavorite: 'because I love it'
    }])

    res.send('created new fav song document')
})

router.delete('/:favId', async (req, res) => {
    // favoritesong.findOneAndRemove({
    //     email: req.body.email,
    //     name: req.body.name,
    //     favoriteSong: req.body.favsong
    // })
    const favId = req.params.favId
    const deletedFavorite = await favoritesong.findByIdAndDelete(favId);
    res.json({deletedFavorite})
})



module.exports = router;