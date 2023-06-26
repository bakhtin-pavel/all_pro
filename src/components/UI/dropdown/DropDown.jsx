import React, { useEffect, useRef } from 'react'

const DropDown = ({ children, opened, onClose, className }) => {
    const dropdownRef = useRef(null)

    useEffect(() => {
        if (!opened) return;

        const handleClick = (e) => {
            if (!dropdownRef) return;
            if (!dropdownRef.current.contains(e.target)) {
                onClose()
            }
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)

    }, [opened, onClose])

    if (!opened) return null

    return (
        <div ref={dropdownRef} className={className}>
            {children}
        </div>
    )
}

export default DropDown