import {api, requestConfig} from "../utils/config"

const getAllContacts = async (id, token) => {
    const config = requestConfig("GET", null, token)

    try {
        const res = await fetch(api + "/messages/" + id, config)
        .then((res) => res.json())
        .catch((err) => err)

        return res;
    } catch (error) {
        console.log(error)
    }
}


const getMessageId = async (id, token) => {
    const config = requestConfig("GET", null, token)

    try {
        const res = await fetch(api + "/messages/chat/" + id, config)
            .then((res) => res.json())
            .catch((err) => err)

            return res;
    } catch (error) {
        console.log(error)
    }
}


const messageService = {
    getAllContacts,
    getMessageId
}

export default messageService 