const express = require('express')
const router = express.Router()

const deleteElements = require('../Controllers/Exemple/delete.element')
const deepClones = require ('../Controllers/Exemple/deep.clone')
const subStrings = require('../Controllers/Exemple/sub.string')
const groupByPropertys = require ('../Controllers/Exemple/group.by.property')
const firstUppers = require ('../Controllers/Exemple/first.upper')


const createUsers = require ('../Controllers/create.user')
const findAllUsers = require ('../Controllers/findAll.user')
const findOneUsers = require ('../Controllers/findOne.user')
const updateUsers = require ('../Controllers/update.user')
const deleteUsers = require ('../Controllers/delete.user')




router.get('/firstUpper/:str1',firstUppers.firstUpper)
router.post('/groupByProperty/:prop',groupByPropertys.groupByProperty)
router.get('/subString/:str4/:str5',subStrings.subString)
router.post('/deepClone',deepClones.deepClone)
router.post('/deleteElement/:index',deleteElements.deleteElement)

//User fonction
router.post('/createUser',createUsers.createUser)
router.get('/findAll/:first_name',findAllUsers.findAll)
router.get('/findOne/:id',findOneUsers.findOne)
router.put('/updateUser/:id',updateUsers.update)
router.delete('/deleteUser/:id',deleteUsers.delete)


module.exports = router
