import React from 'react'

const SliderButtonPrevV = ({ slider, classN }) => {
    return (
        <div
            className={classN}
            onClick={() => slider?.current?.slickPrev()}
        >
            <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 196">
                    <g id="Group 3">
                        <path id="Vector 5" d="M18 11.0503L9.94971 3.00001L2.00003 10.9497" stroke="black" strokeWidth="3" />
                    </g>
                    <path id="Vector 8" d="M10.0293 3.0224L10.0293 18.1124" stroke="black" strokeWidth="3" />
                </g>
            </svg>
        </div>
    )
}

export default SliderButtonPrevV