import React from 'react'

const SliderButtonNext = ({slider, classN}) => {
    return (
        <div
            className={classN}
            onClick={() => slider?.current?.slickNext()}
        >
        </div>
    );
}

export default SliderButtonNext