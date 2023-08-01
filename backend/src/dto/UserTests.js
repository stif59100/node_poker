/*
 PaysTests.js
 */

 const User = require('./User')

 let Test = new User("", "Test")
 console.log(Test.getIdUser() + " " + Test.getNameUser())
 Test.setNameUser("Testé")
 console.log(Test.getIdUser() + " " + Test.getNameUser())