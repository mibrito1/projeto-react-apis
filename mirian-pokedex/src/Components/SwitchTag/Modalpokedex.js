import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from "@chakra-ui/react";

export function ModalPokedex({ isOpen, onOpen, onClose }) {
    return (
        <>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>GOTCHA!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>O Pokémon foi adicionado a sua Pokédex</ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}