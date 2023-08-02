import React from 'react'

const SliderButtonNext = ({ slider, classN }) => {
    return (
        <div
            className={classN}
            onClick={() => slider?.current?.slickNext()}
        >
            <svg width="18" height="18" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 8">
                    <g id="Group 3">
                        <path id="Vector 5" d="M8.92454 19.9623L17.9622 10.9247L9.03751 2.00002" stroke="black" strokeWidth="3" />
                    </g>
                    <path id="Vector 8" d="M17.9373 11.014L0.996582 11.014" stroke="black" strokeWidth="3" />
                </g>
            </svg>
        </div>
    );
}

export default SliderButtonNext