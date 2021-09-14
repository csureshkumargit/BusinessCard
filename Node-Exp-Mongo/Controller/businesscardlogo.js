const businesscardlogoModel = require('../Model/businesscardlogo');


exports.createBusinessCardWithLogo = (req, res) => {
    console.log('logo', req.body);
    const url = req.protocol + '://' + req.get('host');
    const businesscardlogo = new businesscardlogoModel({

        memberName: req.body.memberName,
        companyName: req.body.companyName,
        phoneNumber: req.body.phoneNumber,
        altphoneNumber: req.body.altphoneNumber,
        email: req.body.email,
        address: req.body.address,
        // photo: url + '/img-uploads/' + req.file.filename
        photo: req.body.photo.base64,
        createdOn: req.body.createdOn

    });
    console.log('businesscard', businesscardlogo)
    businesscardlogo.save()
        .then(data => {
            return res.status(200).json('uploaded');
        })
        .catch(err => {
            return res.status(400).json(err);
        })

}


exports.viewBusinessCardLogo = (req, res) => {
    let { email, companyName } = req.body;
    console.log(req.body);

    let filterbsnscrdObj = {};
    email && (filterbsnscrdObj["email"] = email);
    companyName && (filterbsnscrdObj["companyName"] = companyName);


    businesscardlogoModel.find(filterbsnscrdObj)
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(400).json(err);
        })

}

exports.getBusinessCardLogo = (req, res) => {
    const { bsnsid } = req.params;
    businesscardlogoModel.findById(bsnsid)
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(400).json(err);
        })

}

exports.deleteBusinessCardLogo = (req, res) => {
    const { bsnsid } = req.params;
    console.log(bsnsid);
    businesscardlogoModel.findByIdAndRemove(bsnsid)
        .then(data => {
            console.log('data', data);
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(400).json(err);
        })

}

exports.updateBusinessCardLogo = (req, res) => {
    const { bsnsid } = req.params;
    console.log(req.body);
    const bsnscard = {};

    bsnscard.memberName = req.body.memberName;
    bsnscard.companyName = req.body.companyName;
    bsnscard.phoneNumber = req.body.phoneNumber;
    bsnscard.altphoneNumber = req.body.altphoneNumber;
    bsnscard.email = req.body.email;
    bsnscard.address = req.body.address;
    bsnscard.photo = req.body.photo.base64
    // photo: url + '/img-uploads/' + req.file.filename
    //bsnscard.photo = req.body.photo.base64;

    console.log(bsnsid);
    businesscardlogoModel.findByIdAndUpdate(bsnsid, bsnscard)
        .then(data => {
            console.log('data', data);
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(400).json(err);
        })

}


