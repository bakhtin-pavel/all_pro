import React, { useEffect, useRef } from 'react';

import './DropDown.css';
import { CSSTransition } from 'react-transition-group';

const DropDown = ({ children, opened, onClose, className, parentRef }) => {
    const dropdownRef = useRef(null)

    useEffect(() => {
        if (!opened) return;

        const handleClick = (e) => {
            if (!dropdownRef) return;
            if (!dropdownRef.current.contains(e.target) && !parentRef.current.contains(e.target)) {
                onClose()
            }
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)

    }, [opened, onClose, parentRef])

    return (
        <CSSTransition
            in={opened}
            timeout={230}
            classNames='dropDown'
            unmountOnExit
        >
            <div ref={dropdownRef} className={className}>
                {children}
            </div>
        </CSSTransition>

    )
}

export default DropDown