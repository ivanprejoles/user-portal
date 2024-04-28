'use client'

import { useEffect, useState } from "react";
import AddServerModal from "./general/modals/add-server-modal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (  
        <>
            <AddServerModal />
        </>
    );
}
 
export default ModalProvider;