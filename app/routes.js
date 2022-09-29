const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/sme-v6/companies-house-answer', function (req, res) {

    // Make a variable and give it the value from 'new-to-software'
    var isCompaniesHouse = req.session.data['company-number']

    // Check whether the variable matches a condition
    if (isCompaniesHouse == "Yes"){
        // Send user to next page
        res.redirect('/company/companies-house-number')
    } else{
        // Send user to next page
        res.redirect('/company/financial-conduct-authority-question')
    }
})

// Add your routes here - above the module.exports line
router.post('/sme-v6/fca-answer', function (req, res) {

    // Make a variable and give it the value from 'new-to-software'
    var isCompaniesHouse = req.session.data['company-number']

    // Check whether the variable matches a condition
    if (isCompaniesHouse  == "Yes"){
        // Send user to next page
        res.redirect('/company/financial-conduct-authority-number')
    } else {
        // Send user to next page
        res.redirect('/company/fca-ineligible')
    }
})




// Add your routes here - above the module.exports line
router.post('/sme-v6/fca-number', function (req, res) {

    // Make a variable and give it the value from 'new-to-software'
    var isCompaniesHouse = req.session.data['company-number']

    // Check whether the variable matches a condition
    if (isCompaniesHouse  == "Yes"){
        // Send user to next page
        res.redirect('/company/financial-conduct-authority-number')
    } else {
        // Send user to next page
        res.redirect('/company/fca-ineligible')
    }
})


module.exports = router
