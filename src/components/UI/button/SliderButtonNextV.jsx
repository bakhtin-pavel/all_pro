import React from 'react'

const SliderButtonNextV = ({ slider, classN }) => {
    return (
        <div
            className={classN}
            onClick={() => slider?.current?.slickNext()}
        >
            <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 197">
                    <g id="Group 3">
                        <path id="Vector 5" d="M1.99999 7.94968L10.0503 16L18 8.05031" stroke="black" strokeWidth="3" />
                    </g>
                    <path id="Vector 8" d="M9.9707 15.9776L9.9707 0.887592" stroke="black" strokeWidth="3" />
                </g>
            </svg>
        </div>
    );
}

export default SliderButtonNextV