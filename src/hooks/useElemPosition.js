import { useEffect, useState } from 'react'

const useElemPosition = (ref) => {
    const [position, setPosition] = useState();

    useEffect(() => {

        const updatePosition = () => {

            setPosition(() => {
                return ref.current.getBoundingClientRect()
            });

        }

        window.addEventListener('scroll', updatePosition);
        return () => window.removeEventListener('scroll', updatePosition);

    }, [ref]);

    return position;
}

export default useElemPosition