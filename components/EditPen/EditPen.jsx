import React, {useState} from "react"
import styles from "../EditPen/EditPen.module.css"
import penImage from "../../assets/svg/pen.svg"
import { ModalEditTransaction }  from "../ModalEditTransaction/ModalEditTransaction"

export const EditPen = ({id, type, getConnect}) => {

    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }
    const closeModal = (e) => {
        setModal(false)
        // e.preventDefault()
    }


    return (
        <>
        <img className={styles.ico} src = {penImage} alt="edit image" onClick={openModal} />
        {modal && <ModalEditTransaction
        type={type}
        id={id}
        onCancel={closeModal} 
        onClose={closeModal}
        getConnect={getConnect}
        />}
        </>
    )
}