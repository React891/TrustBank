'use client'
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type Props = {
    setOpened: Dispatch<SetStateAction<boolean>>
    setData: any
}

export default function AccountsTable({ setData, setOpened }: Props) {
    const tableData = [
        {
            fullName: "Anne Mayers Paige",
            balance: "350.00",
            birthDate: "1990-05-15",
            username: "anne32",
            email: "ann23@icloud.com",
            phoneNumber: "+1234567890",
            street: "123 Elm Street",
            city: "Springfield",
            state: "IL",
            zipCode: "62701",
            ssn: "123-45-6789",
            tax: "TAX123456",
            accountNumber: "3421131231313",
            accountType: "Savings",
            imfNumber: "IMF987654",
            status: "Pending"
        },
        {
            fullName: "James Anthony Clark",
            balance: "1500.00",
            birthDate: "1985-09-21",
            username: "james85",
            email: "james.a.clark@gmail.com",
            phoneNumber: "+1987654321",
            street: "456 Maple Avenue",
            city: "Columbus",
            state: "OH",
            zipCode: "43215",
            ssn: "321-54-9876",
            tax: "TAX234567",
            accountNumber: "4312178321445",
            accountType: "Checking",
            imfNumber: "IMF123456",
            status: "Verified"
        },
        {
            fullName: "Sophia Rose Miller",
            balance: "875.50",
            birthDate: "1992-03-30",
            username: "sophiarose",
            email: "sophia.miller@yahoo.com",
            phoneNumber: "+1222333444",
            street: "789 Oak Street",
            city: "Denver",
            state: "CO",
            zipCode: "80202",
            ssn: "987-65-4321",
            tax: "TAX345678",
            accountNumber: "4521796543213",
            accountType: "Savings",
            imfNumber: "IMF789012",
            status: "Failed"
        },
        {
            fullName: "Benjamin David Nguyen",
            balance: "2500.75",
            birthDate: "1988-12-18",
            username: "bennguyen",
            email: "ben.nguyen@outlook.com",
            phoneNumber: "+1333555666",
            street: "159 Pine Lane",
            city: "Seattle",
            state: "WA",
            zipCode: "98101",
            ssn: "456-12-7890",
            tax: "TAX456789",
            accountNumber: "3475167894321",
            accountType: "Checking",
            imfNumber: "IMF567890",
            status: "Verified"
        },
        {
            fullName: "Emma Grace Lee",
            balance: "430.00",
            birthDate: "1995-07-14",
            username: "emmalee95",
            email: "emma.lee@icloud.com",
            phoneNumber: "+1444555777",
            street: "321 Birch Drive",
            city: "Austin",
            state: "TX",
            zipCode: "73301",
            ssn: "789-12-3456",
            tax: "TAX567890",
            accountNumber: "3422198765432",
            accountType: "Savings",
            imfNumber: "IMF678901",
            status: "Pending"
        },
        {
            fullName: "Daniel Paul Brown",
            balance: "1280.45",
            birthDate: "1991-10-10",
            username: "danielb91",
            email: "daniel.brown@hotmail.com",
            phoneNumber: "+1555666888",
            street: "654 Cedar Boulevard",
            city: "Miami",
            state: "FL",
            zipCode: "33101",
            ssn: "321-98-7654",
            tax: "TAX678901",
            accountNumber: "3411234567890",
            accountType: "Checking",
            imfNumber: "IMF234567",
            status: "Failed"
        },
        {
            fullName: "Lily Ann Martinez",
            balance: "215.25",
            birthDate: "1993-11-03",
            username: "lilyannm",
            email: "lily.martinez@gmail.com",
            phoneNumber: "+1666777888",
            street: "987 Willow Street",
            city: "Phoenix",
            state: "AZ",
            zipCode: "85001",
            ssn: "654-32-1098",
            tax: "TAX789012",
            accountNumber: "3422987654321",
            accountType: "Savings",
            imfNumber: "IMF890123",
            status: "Verified"
        },
        {
            fullName: "Ethan Michael Roberts",
            balance: "920.00",
            birthDate: "1989-02-28",
            username: "ethanmroberts",
            email: "ethan.roberts@live.com",
            phoneNumber: "+1777888999",
            street: "789 Poplar Avenue",
            city: "Las Vegas",
            state: "NV",
            zipCode: "89101",
            ssn: "987-76-5432",
            tax: "TAX890123",
            accountNumber: "3522176543210",
            accountType: "Checking",
            imfNumber: "IMF345678",
            status: "Pending"
        },
        {
            fullName: "Olivia Rae Cooper",
            balance: "475.60",
            birthDate: "1994-08-22",
            username: "oliviarcooper",
            email: "olivia.cooper@yahoo.com",
            phoneNumber: "+1888999000",
            street: "654 Cherry Lane",
            city: "Orlando",
            state: "FL",
            zipCode: "32801",
            ssn: "123-54-6789",
            tax: "TAX901234",
            accountNumber: "3591786541234",
            accountType: "Savings",
            imfNumber: "IMF456789",
            status: "Verified"
        },
        {
            fullName: "Henry Thomas Kim",
            balance: "305.50",
            birthDate: "1987-04-17",
            username: "henrykim87",
            email: "henry.kim@aol.com",
            phoneNumber: "+1999000111",
            street: "123 Lake Road",
            city: "Charlotte",
            state: "NC",
            zipCode: "28202",
            ssn: "876-54-3210",
            tax: "TAX012345",
            accountNumber: "3421239876543",
            accountType: "Checking",
            imfNumber: "IMF567890",
            status: "Failed"
        }
    ];
    



    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] rounded-md bg-black/20 text-white text-sm">
                <thead className="">
                    <tr className=" border-b-2">
                        <th className=" px-4 py-5 font-medium text-start flex items-center gap-3 text-base">
                            Fullname
                        </th>
                        <th className="px-4 py-5 font-medium text-start ">Email</th>
                        <th className="px-4 py-5 font-medium text-start ">Phone</th>
                        <th className="px-4 py-5 font-medium text-start ">Account Number</th>
                        <th className="px-4 py-5 font-medium text-start ">Balance</th>
                        <th className="px-4 py-5 font-medium text-start ">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, key) => (
                        <motion.tr
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: key * 0.05 }}
                            onClick={() => {
                                setData(row)
                                setOpened(true)
                            }}
                            className={`from-transparent to-black ${key !== tableData.length - 1 && 'border-b-2 border-gray-900'} bg-gradient-to-br hover:from-[#15154a] hover:to-black hover:via-[#0101b4] duration-500 cursor-pointer`} key={key}>
                            <td className="px-4 py-3 flex items-center gap-2">
                                <span className="h-12 w-12 shrink-0 inline-block align-middle rounded-full border-2"></span>
                                <span className="inline-block font-semibold">{row.fullName}</span>
                            </td>
                            <td className="px-4 py-3">{row.email}</td>
                            <td className="px-4 py-3">{row.phoneNumber}</td>
                            <td className="px-4 py-3">{row.accountNumber}</td>
                            <td className="px-4 py-3">{row.balance}</td>
                            <td className={`px-4 py-3 ${row.status === 'Pending' && 'text-amber-500'} ${row.status === 'Verified' && 'text-green-500'}  ${row.status === 'Failed' && 'text-red-500'}`}>{row.status}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
