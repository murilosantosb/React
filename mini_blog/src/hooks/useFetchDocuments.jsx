import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { 
    collection,
    query, 
    orderBy,
    onSnapshot ,
    where, 
    } from "firebase/firestore";

    export const useFetchDocuments = (docCollection, search = null , uid = null) => {

        const [document, setDocument] = useState(null)
        const [error, setError] = useState(null)
        const [loading, setLoading] = useState(null)
        const [cancelled, setCancelled] = useState(false)

        
        useEffect(() => {

            async function loadData(){ 
                if(cancelled) {
                    return
                }

                setLoading(true)

                const collectionRef = await collection(db, docCollection)

                try{
                    let q ;
                    // buscar
                    // dashboard

                    if(search){
                        q = await query(collectionRef, 
                            where("tagsArray", "array-contains", search),
                            orderBy("createdAt", "desc")
                        )
                    }else if(uid){
                        q = await query(
                            collectionRef,
                            where("uid", "==" , uid),
                            orderBy("createdAt", "desc")
                        )
                    }
                    else{
                        q = await query(collectionRef , orderBy("createdAt", "desc"))
                    }

                  

                    await onSnapshot(q , (querySnapshot) => {

                        setDocument(
                            querySnapshot.docs.map((doc) => ({
                                id: doc.id,
                                ...doc.data(),
                            }))
                        )

                    })

                    setLoading(false)

                }catch(error){
                    console.error(error)
                    setError(error.message)
                }
            }
            loadData()
           

        },[docCollection, search , uid, cancelled])

        useEffect(() => {
            return () => setCancelled(true)
        },[])

        return {document , loading, error}
    }
