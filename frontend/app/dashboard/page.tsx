import React, { JSX } from 'react';
import './dashboard.css';
import StatCard from '../components/StatCard';

function DashboardButton({
    text,
    bgcolor,
}: {
    text: string;
    bgcolor: string;
}): JSX.Element {
    return (
        <button
            className={`h-[30px] w-[99px] rounded-[4px] justify-center text-center text-white ${bgcolor}`}
        >
            {text}
        </button>
    );
}

export default function DashBoard() {
    const firstName = 'John';
    const lastName = 'Carton';
    const dashboardMenus: string[] = ['All Page', 'Product', 'Report', 'Task'];
    const profileImage =
        'https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg';

    const PageViewsIcon = () => (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.991853 7.20145C1.61908 6.09488 3.73147 3.02991 7.88718 3.02991C12.0429 3.02991 14.1553 6.09488 14.7825 7.20145C14.922 7.44761 14.922 7.74026 14.7825 7.98642C14.1553 9.09299 12.0429 12.158 7.88718 12.158C3.73147 12.158 1.61908 9.09299 0.991854 7.98642C0.852325 7.74026 0.852325 7.44761 0.991853 7.20145ZM10.4241 7.5943C10.4241 8.99466 9.28885 10.1299 7.88849 10.1299C6.48814 10.1299 5.35292 8.99466 5.35292 7.5943C5.35292 6.19394 6.48814 5.05873 7.88849 5.05873C9.28885 5.05873 10.4241 6.19394 10.4241 7.5943Z"
                fill="#AEB9E1"
            />
        </svg>
    );

    const MonthlyUserIcon = () => (
        <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.960449 10.9592C0.960449 9.12106 2.45053 7.63098 4.28864 7.63098H8.0147C9.85281 7.63098 11.3429 9.12106 11.3429 10.9592C11.3429 11.5719 10.8462 12.0686 10.2335 12.0686H2.06985C1.45714 12.0686 0.960449 11.5719 0.960449 10.9592Z"
                fill="#AEB9E1"
            />
            <path
                d="M6.15371 6.78556C7.78758 6.78556 9.1121 5.46104 9.1121 3.82717C9.1121 2.19329 7.78758 0.868774 6.15371 0.868774C4.51983 0.868774 3.19531 2.19329 3.19531 3.82717C3.19531 5.46104 4.51983 6.78556 6.15371 6.78556Z"
                fill="#AEB9E1"
            />
        </svg>
    );

    const NewSignupsIcon = () => (
        <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.979 6.96875C12.979 10.2825 10.2927 12.9688 6.979 12.9688C3.6653 12.9688 0.979004 10.2825 0.979004 6.96875C0.979004 3.65504 3.6653 0.96875 6.979 0.96875C10.2927 0.96875 12.979 3.65504 12.979 6.96875ZM6.98055 3.54007C7.30362 3.54007 7.56552 3.80197 7.56552 4.12504V6.38438H9.82177C10.1448 6.38438 10.4067 6.64628 10.4067 6.96935C10.4067 7.29242 10.1448 7.55432 9.82177 7.55432H7.56552V9.81225C7.56552 10.1353 7.30362 10.3972 6.98055 10.3972C6.65748 10.3972 6.39558 10.1353 6.39558 9.81225V7.55432H4.13456C3.8115 7.55432 3.5496 7.29242 3.5496 6.96935C3.5496 6.64628 3.8115 6.38438 4.13456 6.38438H6.39558V4.12504C6.39558 3.80197 6.65748 3.54007 6.98055 3.54007Z"
                fill="#AEB9E1"
            />
        </svg>
    );

    const SubscriptionsIcon = () => (
        <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.2568 1.44994C6.41833 1.17261 6.81898 1.17261 6.98051 1.44994L8.69181 4.38806C8.75098 4.48966 8.85013 4.56169 8.96504 4.58658L12.2882 5.30619C12.6019 5.37412 12.7257 5.75515 12.5118 5.99448L10.2463 8.52995C10.168 8.61762 10.1301 8.73418 10.142 8.85115L10.4845 12.234C10.5168 12.5533 10.1927 12.7888 9.89898 12.6594L6.78752 11.2883C6.67993 11.2409 6.55737 11.2409 6.44979 11.2883L3.33833 12.6594C3.04464 12.7888 2.72051 12.5533 2.75284 12.234L3.09535 8.85115C3.10719 8.73418 3.06932 8.61762 2.99099 8.52995L0.725487 5.99448C0.511646 5.75515 0.635453 5.37412 0.949125 5.30619L4.27227 4.58658C4.38717 4.56169 4.48632 4.48966 4.5455 4.38806L6.2568 1.44994Z"
                fill="#AEB9E1"
            />
        </svg>
    );

    const stats = [
        {
            title: 'Pageviews',
            value: '50.8K',
            change: '28.4%',
            isPositive: true,
            icon: <PageViewsIcon />,
        },
        {
            title: 'Monthly users',
            value: '23.6K',
            change: '12.6%',
            isPositive: false,
            icon: <MonthlyUserIcon />,
        },
        {
            title: 'New sign ups',
            value: '756',
            change: '3.1%',
            isPositive: true,
            icon: <NewSignupsIcon />,
        },
        {
            title: 'Subscriptions',
            value: '2.3K',
            change: '11.3%',
            isPositive: true,
            icon: <SubscriptionsIcon />,
        },
    ];

    return (
        <>
            <div className={`flex flex-row`}>
                <div
                    className={`min-w-[300px] text-white border-[0.6px] border-[#0b1739]`}
                >
                    <div className={`p-[28px] `}>
                        <div className={`h-[114px]`}>
                            <div
                                className={`flex flex-row justify-between items-center`}
                            >
                                <div className={`flex flex-row gap-1`}>
                                    <svg
                                        width="27"
                                        height="27"
                                        viewBox="0 0 27 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.091 0.0429688C9.63217 0.0429688 9.26022 0.414916 9.26022 0.873737V8.76604H9.26018C4.44256 8.76604 0.537109 12.6715 0.537109 17.4891C0.537109 22.3067 4.44257 26.2122 9.26019 26.2122H17.1525C17.6113 26.2122 17.9833 25.8402 17.9833 25.3814V17.4891H17.9833C22.8009 17.4891 26.7064 13.5837 26.7064 8.76604C26.7064 3.94842 22.8009 0.0429688 17.9833 0.0429688H10.091ZM17.9833 17.4891V9.5968C17.9833 9.13798 17.6113 8.76604 17.1525 8.76604H9.26022V16.6583C9.26022 17.1172 9.63217 17.4891 10.091 17.4891H17.9833Z"
                                            fill="#4338CA"
                                        />
                                        <path
                                            d="M9.99742 0.0429688C9.59029 0.0429688 9.26025 0.373007 9.26025 0.780129L9.26026 8.76604H17.2462C17.6533 8.76604 17.9833 9.09608 17.9833 9.5032L17.9833 17.4891C22.8009 17.4891 26.7064 13.5837 26.7064 8.76604C26.7064 3.94842 22.801 0.0429688 17.9833 0.0429688H9.99742Z"
                                            fill="#00C2FF"
                                        />
                                    </svg>
                                    <div className={`text-[24px] text-white`}>
                                        {' '}
                                        DashdarkX{' '}
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        width="23"
                                        height="13"
                                        viewBox="0 0 23 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.8">
                                            <path
                                                d="M15.0376 9.32666L18.0376 6.32666L15.0376 3.32666"
                                                stroke="#AEB9E1"
                                                strokeWidth="0.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <g opacity="0.8">
                                            <path
                                                d="M8.03711 3.32666L5.03711 6.32666L8.03711 9.32666"
                                                stroke="#AEB9E1"
                                                strokeWidth="0.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex flex-row items-center gap-1 h-[42px]`}
                            >
                                <div
                                    className={`flex flex-row justify-between w-full items-center`}
                                >
                                    <div
                                        className={`text-primary-1 flex flex-row items-center gap-1`}
                                    >
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.605957 6.86773C0.605957 6.44701 0.787444 6.04634 1.10471 5.76662L6.61651 0.907176C7.1806 0.409848 8.03131 0.409848 8.59541 0.907175L14.1072 5.76662C14.4245 6.04634 14.606 6.44701 14.606 6.86773V13.0601C14.606 13.8742 13.9397 14.5342 13.1178 14.5342H2.09416C1.27225 14.5342 0.605957 13.8742 0.605957 13.0601V6.86773Z"
                                                fill="#4338CA"
                                            />
                                        </svg>
                                        <p className={`text-primary-1`}>
                                            Dashboard
                                        </p>
                                    </div>
                                    <div>
                                        <svg
                                            width="13"
                                            height="13"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.8">
                                                <path
                                                    d="M3.7876 5.03418L6.7876 8.03418L9.7876 5.03418"
                                                    stroke="#AEB9E1"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {dashboardMenus.map((menu, index) => {
                                return (
                                    <div key={index} className={`h-[42px]`}>
                                        {menu}
                                    </div>
                                );
                            })}
                            <div>Users</div>
                        </div>
                    </div>

                    <div className={`border-white/20 border-t-[1px]`}> </div>

                    <div className={`p-[28px]`}>
                        <div
                            className={`flex flex-row items-center gap-1 h-[42px]`}
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.79341 0.53418C5.51727 0.53418 5.29341 0.758037 5.29341 1.03418V3.64966L3.03036 2.34281C2.79122 2.20472 2.48546 2.28665 2.34741 2.52581L0.605249 5.54394C0.4672 5.7831 0.549145 6.08893 0.788279 6.22702L3.05134 7.53387L0.78817 8.84078C0.549036 8.97887 0.467091 9.2847 0.60514 9.52386L2.3473 12.542C2.48535 12.7811 2.79111 12.8631 3.03025 12.725L5.29341 11.4181V14.0342C5.29341 14.3103 5.51727 14.5342 5.79341 14.5342H9.27757C9.55371 14.5342 9.77757 14.3103 9.77757 14.0342V11.4181L12.0441 12.7269C12.2833 12.865 12.589 12.7831 12.7271 12.5439L14.4692 9.52581C14.6073 9.28665 14.5253 8.98083 14.2862 8.84273L12.0196 7.53387L14.2861 6.22506C14.5252 6.08697 14.6072 5.78115 14.4691 5.54199L12.727 2.52386C12.5889 2.2847 12.2831 2.20277 12.044 2.34086L9.77757 3.64967V1.03418C9.77757 0.758037 9.55371 0.53418 9.27757 0.53418H5.79341ZM7.53692 9.40674C8.57102 9.40674 9.40933 8.56826 9.40933 7.53394C9.40933 6.49962 8.57102 5.66113 7.53692 5.66113C6.50281 5.66113 5.6645 6.49962 5.6645 7.53394C5.6645 8.56826 6.50281 9.40674 7.53692 9.40674Z"
                                    fill="#AEB9E1"
                                />
                            </svg>
                            Settings
                        </div>
                        <div className={`h-[42px]`}>
                            <div
                                className={`flex flex-row justify-start gap-1`}
                            >
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={profileImage}
                                    alt="Rounded avatar"
                                ></img>
                                <div className={`flex flex-col `}>
                                    <div>
                                        {firstName} {lastName}
                                    </div>
                                    <div>Account settings</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col w-full p-[28px]`}>
                    <div className={`flex flex-row justify-between`}>
                        <div className={``}>
                            <div className={`text-[24px] text-white`}>
                                Welcome back, {firstName}
                            </div>
                            Measure your advertising ROI and report website
                            traffic.
                        </div>
                        <div className={`flex flex-row gap-2`}>
                            <DashboardButton
                                text="Export Data"
                                bgcolor="bg-neutral-700"
                            />
                            <DashboardButton
                                text="Create Report"
                                bgcolor="bg-primary-1"
                            />
                        </div>
                    </div>
                    <div className={`flex flex-row justify-between gap-4`}>
                        {stats.map((stat, index) => (
                            <StatCard key={index} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
