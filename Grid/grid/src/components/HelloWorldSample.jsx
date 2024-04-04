import { React, createElement } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { IoCalendarSharp } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
// eslint-disable-next-line sort-imports
import "../ui/Grid.css";
import { FaPlus } from "react-icons/fa6";
// eslint-disable-next-line sort-imports
import { FaDollarSign } from "react-icons/fa";
// eslint-disable-next-line no-duplicate-imports, sort-imports, prettier/prettier
import { FaArrowTrendDown } from "react-icons/fa6";
import { RiPencilRulerFill } from "react-icons/ri";
// eslint-disable-next-line sort-imports
import { CiShare2 } from "react-icons/ci";
import { TbBrandVisa } from "react-icons/tb";
// import { FaArrowTrendDown } from "react-icons/fa6";
export function HelloWorldSample({ sampleText, check, check2 }) {
    return (
        <section className="">
            <div className="section w-screen h-auto flex flex-col">
                <div className="containermain flex flex-row bg-[#f8f8f8] p-8 gap-x-20">
                    <div className="left flex flex-col gap-3 gap-y-10">
                        <div className="left_child_1 flex flex-row gap-x-5">
                            <button className="btn w-12 h-12 bg-white rounded-full grid place-content-center ml-[10px] border-[1px] border-solid border-gray-300">
                                <BiMenuAltLeft />
                            </button>
                            <a href="">
                                <img
                                    src="https://i.pinimg.com/originals/b1/96/e5/b196e5b12c5b01f45d213c83bfe025da.jpg"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="bg-cover rounded-full"
                                />
                            </a>
                            <div className="flex flex-col gap-[1px] ">
                                <p className="text-black tracking-tighter font-semibold">Financial</p>
                                <p className="tracking-tighter text-[#B7B7B7]">Dashboard</p>
                            </div>
                        </div>
                        <div className="right flex flex-row gap-3 justify-center items-center gap-x-10">
                            <div className="right_child_1 w-[70px] h-[70px] border-[1px] border-solid border-[#b7b7b7] bg-white rounded-full grid place-content-center">
                                <p>19</p>
                            </div>
                            <div className="date flex flex-col">
                                <p className="text-black">Tue,</p>
                                <p className="text-black">December</p>
                            </div>
                            <span className="w-[1px] min-h-10 bg-[#b7b7b7]"></span>
                            <button className="show_my_tasks" onClick={() => sampleText?.execute()}>
                                <span>Show my Tasks</span>
                                <svg
                                    width="34"
                                    height="34"
                                    viewBox="0 0 74 74"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                                    <path
                                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                        fill="black"
                                    ></path>
                                </svg>
                            </button>
                            <button className="calendar w-12 h-12 bg-white rounded-full grid place-content-center border-[1px] border-solid border-gray-300">
                                <IoCalendarSharp />
                            </button>
                        </div>
                    </div>
                    <div className="rightside flex flex-col gap-3 gap-y-10">
                        <div className="rightside_child_1 flex items-center justify-between gap-x-36">
                            <div className="flex flex-row gap-x-5">
                                <button className="w-12 h-12 bg-white rounded-full grid place-content-center border-[1px] border-solid border-gray-300">
                                    <GoPlus />
                                </button>
                                <a href="">
                                    <img
                                        src="https://media.licdn.com/dms/image/D4D03AQFxLpzg_MDZhg/profile-displayphoto-shrink_400_400/0/1698396663694?e=2147483647&v=beta&t=PwJpUOtCPE43lOxHoK2B_Lf7LWZobECf8AZAUvg1i9E"
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="bg-cover rounded-full"
                                    />
                                </a>
                                <div className="rightside_child_1_child flex flex-col gap-[1px] ">
                                    <p className="text-black tracking-tighter font-semibold">{check}</p>
                                    <p className="tracking-tighter text-[#B7B7B7] text-[13px]">{check2}</p>
                                </div>
                            </div>
                            <div className="">
                                <div className="relative">
                                    <input
                                        checked=""
                                        className="checkbox focus:border-none focus:outline-none checked:right-[10px] w-[30px] h-[30px] absolute right-[17px] top-[10px] z-10 cursor-pointer appearance-none"
                                        type="checkbox"
                                    />
                                    <div className="mainbox relative w-[230px] h-[50px] flex flex-row-reverse items-center justify-center rounded-[160px] bg-[rgb(0,0,0)]">
                                        <div className="iconContainer pt-[5px] w-fit">
                                            <svg
                                                viewBox="0 0 512 512"
                                                height="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="search_icon fill-white text-[1.3em]"
                                            >
                                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                                            </svg>
                                        </div>
                                        <input
                                            className="search_input h-full w-[170px] bg-transparent border-none outline-none pb-[4px] pl-[10px] text-[1em] text-white placeholder:text-[rgba(225,225,225,0.776)]"
                                            placeholder="search"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wavediv flex">
                            <div className="flex gap-y-4 flex-col">
                                <p className="font-semibold text-4xl">
                                    Hey, Need help? <span className="wave">👋</span>
                                </p>
                                <p className="font-semibold text-3xl text-[#B7B7B7]">Just ask me anything!</p>
                            </div>
                            <div className="relative left-36">
                                <button className="w-24 h-24 bg-white rounded-full grid place-content-center border-[1px] border-solid border-gray-300">
                                    <MdKeyboardVoice size={25} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard_content">
                <div className="dashboard_content_left">
                    <div className="dashboard_content_left_top">
                        <div className="dashboard_content_left_top_child_1">
                            <span className="brightness">
                                <FaPlus />
                            </span>
                            <button className="share">
                                <CiShare2 />
                            </button>
                        </div>
                        <div className="dashboard_content_left_top_child_2">
                            <div className="visa">
                                <div className="">
                                    <TbBrandVisa size={40} />
                                    <button>Direct Debit</button>
                                </div>
                                <div className="">
                                    <p>Link to main account</p>
                                    <p>**** 2719</p>
                                    <div className="">
                                        <button>Receive</button>
                                        <button>Send</button>
                                    </div>
                                </div>
                            </div>
                            <div className="visafee">
                                <div className="">
                                    <p>Monthly regular fee</p>
                                    <div className="">
                                        <FaDollarSign color="#E16449" />
                                        <p>25.00</p>
                                    </div>
                                </div>
                                <div className="">
                                    <RiPencilRulerFill color="#E16449" className="visafee_icon" />
                                    <p>
                                        Edit <br /> cards limitation
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard_content_left_top_child_3">
                            <div className="">
                                <div className="khongbietdattengi">
                                    <FaArrowTrendDown size={20} />
                                    <p>Total income</p>
                                    <div className="cungkhongbietdattengi">
                                        <FaDollarSign color="#E16449" />
                                        <p>23,194.80</p>
                                    </div>
                                </div>
                                <button>Weekly</button>
                            </div>
                            <div className="">
                                <p>hi</p>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard_content_left_bottom"></div>
                </div>
                <div className="dashboard_content_right"></div>
            </div>
        </section>
    );
}
