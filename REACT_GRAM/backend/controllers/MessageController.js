const User = require("../models/User")
const Message = require("../models/Message")
const mongoose = require("mongoose")


const sendMessage = async (req, res) => {
    try {
    const { message } = req.body
    const { id } = req.params
    const user = req.user

    const recipientUser = await User.findById(id)

    if(!recipientUser) {
        return res.status(404).json({ errors: ["Destinatário não encontrado"]})
    }
    const newMessage = Message.create({
        message: message,
        sender: user._id ,
        recipient: id
    })

    return res.status(201).json({message: "Mensagem foi criada com sucesso!", data: newMessage})
    } catch (error) {
        res.status(500).json({ errors: ["Erro ao enviar a mensagem"] })
    }
}


const deleteMessage = async (req, res) => {
    const { id } = req.params 
    const reqUser = req.user
    
    try {
        const myMessage = await Message.findById(new mongoose.Types.ObjectId(id))

        if (!myMessage) {
            res.status(404).json({ errors: ["Messagem não foi encontrada"] })
            return
        }

        await Message.findByIdAndDelete(myMessage._id)

        res.status(200).json({_id: myMessage._id , message: "Mensagem excluída com sucesso" })
        

    } catch (error) {
        res.status(422).json({ errors: ["Erro ao excluir a messagem"] })
    }
}


const getAllContacts = async (req, res) => {
    const { id } = req.params

    try {

        const user = await User.findById(id)

        if(!user) {
            return res.status(404).json({ errors: ["Usuário não encontrado!"] })
        }
        
        const myContacts = user.following.map((data) => data)

        const contactsData = await User.find({ _id: { $in: myContacts } })
            .select("_id name profileImage lastSeen")
            .sort('-lastSeen')

        res.status(200).json(contactsData)

    } catch (error) {
        res.status(500).json({ errors: ["Erro ao buscar contatos!"] })
    }
}


const getMessageId = async (req, res) => {
    const { id } = req.params
    const reqUser = req.user

    try {
        // Busca as mensagens que eu enviei         
        const sentMessages = await Message.find({ sender: reqUser._id, recipient: id })

        // Busca as mensagens que o outro user me enviou
        const receivedMessages = await Message.find({ sender: id, recipient: reqUser._id })

        const allMessages = [{sentMessages: sendMessage, receivedMessages: receivedMessages}]

        res.status(200).json(allMessages)

    } catch (error) {
        res.status(404).json({ errors: ["Nenhuma mensagem foi encontrada!"]})
    }
}

module.exports = {
    sendMessage,
    deleteMessage,
    getAllContacts,
    getMessageId
}