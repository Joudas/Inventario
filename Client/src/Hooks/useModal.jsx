import React, { useState } from 'react'

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSecond, setIsOpenSecond] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    }
    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleCloseSecond = () => {
        setIsOpenSecond(false);
    }
    const handleOpenSecond = () => {
        setIsOpenSecond(true);
    }

    return {isOpen, handleOpen, handleClose, isOpenSecond, handleOpenSecond, handleCloseSecond};
} 