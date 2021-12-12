import { useState } from "react"

function Modal () {
    
    const [showModal,setShowmodal] = useState (false);
    return (
        <div>
            <p>Alcansaste la catidad límite del producto</p>
        </div>
   )
}; 

export default {Modal, showModal, setShowmodal};