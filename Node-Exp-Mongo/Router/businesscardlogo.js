const express = require('express');
const router = express.Router();
const businesscardlogoController = require('../Controller/businesscardlogo');
const usersController = require('../Controller/Users');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        cb(null, 'img-uploads');
        console.log('file');
    },
    filename: (request, file, cb) => {
        cb(null, file.originalname);
    }
}
)

const upload = multer({
    storage: storage

});
console.log('storage1', storage);

// router.post('/createCardlogo', upload.single('photo'), businesscardlogoController.createBusinessCardWithLogo);
router.post('/createCardlogo', usersController.validateToken, businesscardlogoController.createBusinessCardWithLogo);
router.post('/viewCardlogo', usersController.validateToken, businesscardlogoController.viewBusinessCardLogo);
router.get('/getCardlogo/:bsnsid', usersController.validateToken, businesscardlogoController.getBusinessCardLogo);
router.delete('/deleteCardlogo/:bsnsid', usersController.validateToken, businesscardlogoController.deleteBusinessCardLogo);
router.patch('/updateCardlogo/:bsnsid', businesscardlogoController.updateBusinessCardLogo);
module.exports = router;