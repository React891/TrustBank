import { Calendar, Edit, Mail, Pen, Pencil, PhoneCall } from "lucide-react";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

type Props = {
    data: any
    opened: boolean
}

export default function Backdrop({ data, opened }: Props) {

    return (
        <div className={`grid ${opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} origin-top-right w-[750px] duration-500 delay-100`}>
            <div className={`border-2 text-white  overflow-hidden w-full duration-500 bg-black/40 p-5 rounded-2xl shadow-lg shadow-black/20`}>
                <div className="flex items-center gap-4">
                    <div className="h-28 w-28 shrink-0 shadow-md shadow-black/20 rounded-full ">
                        <img src="https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=2048,f=jpeg,q=85/posts/images/684058496613784590/a7a64855-8400-4d0b-9856-0a623694deb4.jpg" className="h-full w-full rounded-full object-cover border-2 " alt="" />
                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Link href={'/accounts/5'} className="text-2xl font-semibold">{data.fullName}</Link>
                                <div className="h-[22px] w-[22px] rounded-full bg-green-500 grid place-content-center">
                                    <BiCheck className="text-lg stroke-1 text-white"/>
                                </div>

                            </div>
                            <p className="font-semibold text-lg">${data.balance}</p>
                        </div>
                        <div className="flex justify-between mt-4 font-medium w-full">
                            <p><PhoneCall size={15} className="align-middle mr-1.5 inline" />{data.phoneNumber}</p>
                            <p><Mail size={16} className="align-middle inline mr-1.5" />{data.email}</p>
                            <p><Calendar size={16} className="align-middle mr-1.5 mb-0.5 inline" />{data.birthDate}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="grid text-[15px] grid-cols-3 gap-5">
                        <div className="">
                            <p className="text-gray-300">TAX</p>
                            <p className="font-semibold">{data.tax}</p>
                        </div>
                        <div className="">
                            <p className="text-gray-300">IMF Number</p>
                            <p className="font-semibold">{data.imfNumber}</p>
                        </div>
                        <div className="">
                            <p className="text-gray-300">SSN</p>
                            <p className="font-semibold">{data.ssn}</p>
                        </div>
                        <div className="">
                            <p className="text-gray-300">Account Type</p>
                            <p className="font-semibold">{data.accountType}</p>
                        </div>
                        <div className="">
                            <p className="text-gray-300">Account Number</p>
                            <p className="font-semibold">{data.accountNumber}</p>
                        </div>
                        <div className="">
                            <p className="text-gray-300">Residential Address</p>
                            <p className="font-semibold">{data.street} {data.city} {data.state} {data.zipCode}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-5">
                    <button className="h-12 w-12 rounded-full grid duration-300 hover:scale-105 active:scale-95 group place-content-center shadow-md shadow-black/30 text-xs uppercase bg-gradient-to-tr from-[#00008b] to-black border-2 border-white text-white font-semibold "><Pencil size={18} className="group-hover:rotate-[360deg] duration-500" /> </button>
                </div>

            </div>

        </div>
    )
}
