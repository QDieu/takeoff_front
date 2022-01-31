import React from 'react';

export const Users = ({ color, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path
                d="M12.25 15C14.9424 15 17.125 12.8174 17.125 10.125C17.125 7.43261 14.9424 5.25 12.25 5.25C9.55761 5.25 7.375 7.43261 7.375 10.125C7.375 12.8174 9.55761 15 12.25 15Z"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M18.5698 5.43173C19.2403 5.24281 19.9436 5.19978 20.6321 5.30552C21.3207 5.41126 21.9786 5.66333 22.5615 6.04475C23.1444 6.42616 23.6389 6.92807 24.0115 7.51666C24.3841 8.10525 24.6263 8.76685 24.7217 9.45692C24.8171 10.147 24.7635 10.8495 24.5645 11.5171C24.3655 12.1847 24.0258 12.8019 23.5682 13.3272C23.1107 13.8524 22.5458 14.2735 21.9118 14.5621C21.2777 14.8507 20.5892 15.0001 19.8926 15.0001"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5.49951 18.5059C6.26089 17.4229 7.27166 16.539 8.4465 15.9288C9.62133 15.3186 10.9257 15.0001 12.2496 15C13.5734 14.9999 14.8779 15.3184 16.0528 15.9285C17.2276 16.5386 18.2385 17.4225 18.9999 18.5054"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M19.8926 15C21.2166 14.999 22.5213 15.3171 23.6962 15.9273C24.8712 16.5375 25.8819 17.4218 26.6426 18.5054"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </g>
    </svg>
);
