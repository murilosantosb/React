const express = require('express')
const router = express.Router()

// Controllers
const {sendMessage, deleteMessage, getAllContacts} = require("../controllers/MessageController")


// Middlewares
const authGuard = require("../middlewares/authGuard")
const {sendMessageValidation} = require("../middlewares/messageValidation")

// Routes
router.post("/sendmessage/:id", authGuard, sendMessageValidation(), sendMessage )
router.get("/:id", authGuard, getAllContacts)
router.delete("/:id", authGuard, deleteMessage)

module.exports = router