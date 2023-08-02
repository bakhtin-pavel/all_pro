import React from 'react'

const SliderButtonPrev = ({ slider, classN }) => {
    return (
        <div
            className={classN}
            onClick={() => slider?.current?.slickPrev()}
        >
            <svg width="18" height="18" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 76">
                    <g id="Group 70">
                        <g id="Group 3">
                            <path id="Vector 5" d="M12.0376 2L3 11.0376L11.9246 19.9623" stroke="black" strokeWidth="3" />
                        </g>
                        <path id="Vector 8" d="M3.02489 10.9483L19.9656 10.9483" stroke="black" strokeWidth="3" />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default SliderButtonPrev