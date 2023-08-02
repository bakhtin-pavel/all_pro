import React from 'react';

import cl from './Email.module.css';

const Email = ({ colorIcon, colorText, children, email }) => {
    return (
        <div className={cl.email}>
            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 62">
                    <path id="Vector" d="M17.9843 0.302246C16.4595 1.84782 15.0272 3.30745 13.5832 4.75667C12.3489 5.99494 11.0963 7.21499 9.86449 8.45588C9.53115 8.79181 9.26162 8.87124 8.89053 8.50015C6.21866 5.83218 3.53377 3.17333 0.855387 0.510579C0.828044 0.483235 0.822835 0.435058 0.770752 0.302246H17.9843Z" fill={colorIcon} />
                    <path id="Vector_2" d="M7.12898 8.21785C7.47533 8.58765 7.80997 8.98608 8.18627 9.34155C8.94147 10.0525 9.78262 10.0525 10.5352 9.32853C10.9206 8.95744 11.2501 8.52775 11.5886 8.14233C13.6902 10.2686 15.6863 12.2869 17.6784 14.3025H1.10034C3.05737 12.3272 5.06257 10.3038 7.12898 8.21785Z" fill={colorIcon} />
                    <path id="Vector_3" d="M0 1.22681C2.07812 3.34399 4.08202 5.38696 5.99087 7.33227C4.05468 9.31143 2.0625 11.3492 0 13.4573V1.22681Z" fill={colorIcon} />
                    <path id="Vector_4" d="M18.7122 13.4606C16.647 11.3564 14.6562 9.32779 12.6887 7.32258C14.6015 5.38639 16.6184 3.34603 18.7122 1.22754V13.4606Z" fill={colorIcon} />
                </g>
            </svg>
            <a href={`mailto:${email}`} style={{color: colorText}}>{children}</a>
        </div>
    )
}

export default Email