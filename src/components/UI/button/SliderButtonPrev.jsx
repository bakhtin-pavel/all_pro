import React from 'react'

const SliderButtonPrev = ({ slider, classN }) => {
    return (
        <div
            className={classN}
            onClick={() => slider?.current?.slickPrev()}
        >
        </div>
    )
}

export default SliderButtonPrev