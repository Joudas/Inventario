import React from 'react';

// Default color for icons, which can be overridden by a prop
const DEFAULT_COLOR = '#000000';

const UserIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg 
            fill={iconColor} 
            height={props.size} 
            width={props.size} 
            version="1.1" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 512 512" 
            xmlSpace="preserve" 
            stroke={iconColor} 
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <g> 
                    <g> 
                        <g> 
                            <path d="M256,238.428c65.734,0,119.214-53.48,119.214-119.214S321.734,0,256,0c-65.735,0-119.214,53.48-119.214,119.214 S190.265,238.428,256,238.428z"></path> 
                            <path d="M256,253.693c-97.918,0-177.58,79.662-177.58,177.58v61.375c0,10.687,8.664,19.351,19.351,19.351h316.458 c10.687,0,19.351-8.664,19.351-19.351v-61.375C433.58,333.355,353.918,253.693,256,253.693z"></path> 
                        </g> 
                    </g> 
                </g> 
            </g>
        </svg>
    );
};

const EmailIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg fill={iconColor} height={props.size} width={props.size} viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke={iconColor}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fillRule="evenodd"></path> 
            </g>
        </svg>
    );
};

const PasswordIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg viewBox="0 0 16 16" height={props.size} width={props.size} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path fillRule="evenodd" clipRule="evenodd" d="M10.5 9C12.9853 9 15 6.98528 15 4.5C15 2.01472 12.9853 0 10.5 0C8.01475 0 6.00003 2.01472 6.00003 4.5C6.00003 5.38054 6.25294 6.20201 6.69008 6.89574L0.585815 13L3.58292 15.9971L4.99714 14.5829L3.41424 13L5.00003 11.4142L6.58292 12.9971L7.99714 11.5829L6.41424 10L8.10429 8.30995C8.79801 8.74709 9.61949 9 10.5 9ZM10.5 7C11.8807 7 13 5.88071 13 4.5C13 3.11929 11.8807 2 10.5 2C9.11932 2 8.00003 3.11929 8.00003 4.5C8.00003 5.88071 9.11932 7 10.5 7Z" fill={iconColor}></path> 
            </g>
        </svg>
    );
};

const PhoneIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg viewBox="0 0 24 24" height={props.size} width={props.size} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" fill={iconColor}></path> 
            </g>
        </svg>
    );
};

const OptionsHeaderIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg viewBox="0 0 1024.00 1024.00" height={props.size} width={props.size} fill={iconColor} className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke={iconColor} strokeWidth="60.72">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z">
                </path>
            </g>
        </svg>
    );
};

const DashBoardIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg viewBox="0 0 16 16" fill="none" height={props.size} width={props.size} xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill={iconColor}></path>
            </g>
        </svg>
    );
};

const CategoryIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg viewBox="0 0 24 24" fill="none" height={props.size} width={props.size} xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <g clipPath="url(#clip0_429_11052)">
                    <circle cx="17" cy="7" r="3" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                    <circle cx="7" cy="17" r="3" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                    <path d="M14 14H20V19C20 19.5523 19.5523 20 19 20H15C14.4477 20 14 19.5523 14 19V14Z" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M4 4H10V9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9V4Z" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
                <defs>
                    <clipPath id="clip0_429_11052">
                        <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                </defs>
            </g>
        </svg>
    );
};

const PCIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg viewBox="0 0 16 16" version="1.1" height={props.size} width={props.size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill={iconColor}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <rect width="16" height="16" id="icon-bound" fill="none"></rect> 
                <path d="M16,12.5C16,11.837 15.737,11.201 15.268,10.732C14.799,10.263 14.163,10 13.5,10C11.447,10 8.553,10 6.5,10C5.837,10 5.201,10.263 4.732,10.732C4.263,11.201 4,11.837 4,12.5C4,14.147 4,15 4,15L16,15C16,15 16,14.147 16,12.5ZM3,13L0,13C0,13 0,12.147 0,10.5C0,9.837 0.263,9.201 0.732,8.732C1.201,8.263 1.837,8 2.5,8L6.536,8C6.754,8.376 7.031,8.714 7.355,9L6.5,9C4.567,9 3,10.567 3,12.5L3,13ZM10,3C11.656,3 13,4.344 13,6C13,7.656 11.656,9 10,9C8.344,9 7,7.656 7,6C7,4.344 8.344,3 10,3ZM6.126,6.997C6.084,6.999 6.042,7 6,7C4.344,7 3,5.656 3,4C3,2.344 4.344,1 6,1C7.026,1 7.932,1.516 8.473,2.302C7.022,2.903 6,4.333 6,6C6,6.344 6.044,6.679 6.126,6.997Z"></path> 
            </g>
        </svg>
    );
};

const ShoppingIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height={props.size} width={props.size} xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
    );
};

const SalesIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg fill={iconColor} viewBox="0 0 64 64" version="1.1" height={props.size} width={props.size} xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M9.89,30.496c-1.14,1.122 -1.784,2.653 -1.791,4.252c-0.006,1.599 0.627,3.135 1.758,4.266c3.028,3.028 7.071,7.071 10.081,10.082c2.327,2.326 6.093,2.349 8.448,0.051c5.91,-5.768 16.235,-15.846 19.334,-18.871c0.578,-0.564 0.905,-1.338 0.905,-2.146c0,-4.228 0,-17.607 0,-17.607l-17.22,0c-0.788,0 -1.544,0.309 -2.105,0.862c-3.065,3.018 -13.447,13.239 -19.41,19.111Zm34.735,-15.973l0,11.945c0,0.811 -0.329,1.587 -0.91,2.152c-3.069,2.981 -13.093,12.718 -17.485,16.984c-1.161,1.127 -3.012,1.114 -4.157,-0.031c-2.387,-2.386 -6.296,-6.296 -8.709,-8.709c-0.562,-0.562 -0.876,-1.325 -0.872,-2.12c0.003,-0.795 0.324,-1.555 0.892,-2.112c4.455,-4.373 14.545,-14.278 17.573,-17.25c0.561,-0.551 1.316,-0.859 2.102,-0.859c3.202,0 11.566,0 11.566,0Zm-7.907,2.462c-1.751,0.015 -3.45,1.017 -4.266,2.553c-0.708,1.331 -0.75,2.987 -0.118,4.356c0.836,1.812 2.851,3.021 4.882,2.809c2.042,-0.212 3.899,-1.835 4.304,-3.896c0.296,-1.503 -0.162,-3.136 -1.213,-4.251c-0.899,-0.953 -2.18,-1.548 -3.495,-1.57c-0.031,-0.001 -0.062,-0.001 -0.094,-0.001Zm0.008,2.519c1.105,0.007 2.142,0.849 2.343,1.961c0.069,0.384 0.043,0.786 -0.09,1.154c-0.393,1.079 -1.62,1.811 -2.764,1.536c-1.139,-0.274 -1.997,-1.489 -1.802,-2.67c0.177,-1.069 1.146,-1.963 2.27,-1.981c0.014,0 0.029,0 0.043,0Z"></path>
                <path d="M48.625,13.137l0,4.001l3.362,0l0,11.945c0,0.811 -0.328,1.587 -0.909,2.152c-3.069,2.981 -13.093,12.717 -17.485,16.983c-1.161,1.128 -3.013,1.114 -4.157,-0.03l-0.034,-0.034l-1.016,0.993c-0.663,0.646 -1.437,1.109 -2.259,1.389l1.174,1.174c2.327,2.327 6.093,2.35 8.447,0.051c5.91,-5.768 16.235,-15.845 19.335,-18.87c0.578,-0.565 0.904,-1.339 0.904,-2.147c0,-4.227 0,-17.607 0,-17.607l-7.362,0Z"></path>
            </g>
        </svg>
    );
};

const Invoices = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg version="1.1" height={props.size} width={props.size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill={iconColor}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <g>
                    <path d="M302.793,440.856c0-1.925,0.096-3.861,0.286-5.834c0.868-8.667,3.013-16.371,6.216-23.006 c2.174-4.529,4.891-8.533,7.942-12.032H35.753c-6.292,0-12.518,1.373-17.829,4.405c-5.32,3.06-9.83,7.522-13.166,14.234 c-2.212,4.49-3.881,10.049-4.577,16.989C0.057,436.853,0,438.073,0,439.274c0,4.577,0.848,8.876,2.441,13.004 c1.601,4.119,3.947,8.066,6.96,11.718c5.996,7.294,14.711,13.338,24.321,16.904c6.398,2.393,13.157,3.68,19.678,3.709h-0.01 l269.158,0.152c-5.597-5.244-10.316-11.403-13.748-18.334C304.986,458.714,302.793,450.029,302.793,440.856z"></path>
                    <path d="M511.276,27.22H152.364c0.162,22.815,0.668,46.764,0.668,71.82c0,43.581-1.583,90.345-9.573,139.522 c-7.484,46.098-20.622,94.32-43.256,143.907h256.477v0.134c8.914,0.114,17.685,2.364,25.37,6.664 c7.837,4.395,14.597,11.022,18.726,19.612c2.573,5.387,3.785,11.345,3.785,17.333c0,4.93-0.83,9.907-2.651,14.606 c-1.83,4.701-4.691,9.162-8.819,12.69c-6.026,5.158-13.339,7.628-20.308,7.598c-6.092,0-11.947-1.783-16.913-4.976 c-4.977-3.194-9.115-7.838-11.575-13.586l16.093-6.903c1.012,2.355,2.727,4.339,4.939,5.749c2.193,1.421,4.824,2.212,7.456,2.212 c3.022-0.02,6.016-0.954,8.952-3.423c1.563-1.335,2.908-3.251,3.852-5.702c0.954-2.431,1.478-5.339,1.478-8.266 c0-3.565-0.792-7.102-2.069-9.753c-2.422-5.025-6.417-9.057-11.518-11.928c-5.082-2.851-11.221-4.452-17.419-4.433 c-6.14-0.01-12.29,1.526-17.639,4.681c-5.358,3.175-9.991,7.894-13.357,14.835c-2.231,4.634-3.871,10.287-4.557,17.161 c-0.144,1.382-0.2,2.746-0.2,4.081c0,6.388,1.496,12.338,4.195,17.81c2.697,5.473,6.616,10.449,11.46,14.654 c5.997,5.225,13.366,9.2,21.308,11.451l8.771,0.009c8.524-0.028,14.559-1.553,20.222-4.08c5.635-2.527,10.983-6.293,17.066-11.155 c24.121-19.23,42.951-43.123,57.729-70.409c14.777-27.286,25.428-57.958,33.006-90.326C509.245,244.073,512.02,172.662,512,108.717 C512,79.59,511.447,52.036,511.276,27.22z M205.774,83.147h136.024c0.314,31.072,0.162,63.926-2.918,98.248H202.847 C205.928,147.073,206.09,114.218,205.774,83.147z M417.794,329.717H174.665v-20.431h243.129V329.717z M436.805,252.882H193.676 V232.46h243.129V252.882z"></path>
                </g>
            </g>
        </svg>
    );
};

const SettingsIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg viewBox="0 0 24 24" fill="none" height={props.size} width={props.size} xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <circle cx="12" cy="12" r="3" stroke={iconColor} strokeWidth="1.5"></circle> 
                <path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"></path>
            </g>
        </svg>
    );
};

const ProfileIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height={props.size} width={props.size} xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    );
};

const NotificationsIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height={props.size} width={props.size} xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
    );
};

const TableIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg viewBox="0 0 24 24" fill="none" height={props.size} width={props.size} xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M12 10V20M3 15L21 15M3 10H21M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    );
};
const FacebookIcon = (props) => {
    // Usa el color pasado por props, o el color por defecto
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg
            fill={iconColor}
            height={props.size}
            width={props.size}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-143 145 512 512"
        >
            <path
                d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z
                M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,
                20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"
            />
        </svg>
    );
};

const InstagramIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg
            fill={iconColor}
            height={props.size}
            width={props.size}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-143 145 512 512"
        >
            <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z" />
            <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346" />
            <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z" />
            <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8 c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157 c27.3,0,49.5,22.2,49.5,49.5V374.7z" />
        </svg>
    );
};

const WhatsappIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg height={props.size}
            width={props.size}
            viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" fill={iconColor}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" 
            strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp [#128]</title> 
            <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" 
            fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill={iconColor}> 
            <g id="icons" transform="translate(56.000000, 160.000000)"> 
                <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]"> 
                    </path> </g> </g> </g> </g></svg>
    );
};
const CloseIcon1 = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg height={props.size} width={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" 
            strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" 
            d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
            fill={iconColor}></path></g>
        </svg>
    );
};
const CheckIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg height={props.size} width={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
        stroke="#00ff7b"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier"
         strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
         <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" 
         strokeLinejoin="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" 
         stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
    );
};
const AlertIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg height={props.size} width={props.size} fill={iconColor} viewBox="-3.6 -3.6 43.20 43.20" version="1.1" 
        preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" stroke={iconColor} strokeWidth="0.00036"><g id="SVGRepo_bgCarrier" 
        strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <title>error-standard-line</title> <circle class="clr-i-outline clr-i-outline-path-1" cx="18" cy="26.06" r="1.33"></circle>
        <path class="clr-i-outline clr-i-outline-path-2" d="M18,22.61a1,1,0,0,1-1-1v-12a1,1,0,1,1,2,0v12A1,1,0,0,1,18,22.61Z"></path><path class="clr-i-outline clr-i-outline-path-3" d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"></path> 
        <rect x="0" y="0" fillOpacity="0"></rect> </g></svg>
    );
};
const CloseIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg  height={props.size} width={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0">
            </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" 
            fill={iconColor}>
            </path> <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" 
            fill={iconColor}></path> </g></svg>
    );
};
const PlusIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg height={props.size} width={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M6 12H18M12 6V18" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    );
};
const MenuIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg height={props.size} width={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" 
        strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            </path> </g></svg>
    );
};
const CloseMenuIcon = (props) => {
    const iconColor = props.color || DEFAULT_COLOR;
    return (
        <svg height={props.size} width={props.size} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill={iconColor}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" 
        strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill={iconColor} d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 
        1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z">
            </path></g></svg>
    );
};


export { UserIcon, EmailIcon, PasswordIcon, PhoneIcon, OptionsHeaderIcon, DashBoardIcon, 
    TableIcon, CategoryIcon, PCIcon, ShoppingIcon, SalesIcon, Invoices, SettingsIcon, 
    ProfileIcon, NotificationsIcon,  FacebookIcon, InstagramIcon, WhatsappIcon, CloseIcon1,
    CheckIcon, AlertIcon, CloseIcon, PlusIcon, MenuIcon, CloseMenuIcon};