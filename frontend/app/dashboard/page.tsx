import React, { JSX } from 'react';
import './dashboard.css';

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

function SummaryCard({
    title,
    icon,
}: {
    title: string;
    icon?: string;
}): JSX.Element {
    return (
        <>
            <div className={`max-w-[300px]`}>
                <div className={`flex flex-row justify-between w-full`}>
                    <div>
                        {icon}
                        {title}
                    </div>
                    <div>...</div>
                </div>
            </div>
        </>
    );
}

export default function DashBoard() {
    const firstName = 'John';
    const lastName = 'Carton';
    const dashboardMenus: string[] = ['All Page', 'Product', 'Report', 'Task'];
    const profileImage =
        'https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg';
    const summaryCards = [
        {
            title: 'Pageview',
            value: '50.8K',
            changes: '28.4%',
        },
        {
            title: 'Monthly users',
            value: '23.6K',
            changes: '-12.6%',
        },
        {
            title: 'New sign ups',
            value: '756',
            changes: '3.1%',
        },
        {
            title: 'Subscriptions',
            value: '2.3K',
            changes: '11.3%',
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
                    <div className={`flex flex-row justify-between`}>
                        {summaryCards.map((card, index) => {
                            return (
                                <SummaryCard
                                    key={index}
                                    title={card.title}
                                    value={card.value}
                                    changes={card.changes}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
