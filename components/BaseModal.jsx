import { Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const BaseModal = () => {
    return (
        <div className="shadow-xl rounded-3xl">
            <Image src='https://builds.contra.com/c138bbb2/assets/static/sign-up-2x.LGUdH-R6.webp' alt='base image' width={400}></Image>
        </div>
    )
}

export default BaseModal
