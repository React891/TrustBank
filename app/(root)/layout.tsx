import Sidebar from "@/components/nav/Sidebar"

type Props = {
    children: React.ReactNode
}

export default function layout({ children }: Props) {
    return (
        <div className="h-screen w-full grid grid-cols-[auto_1fr]">
            <Sidebar />
            <div className="flex flex-col h-full overflow-y-auto">
                <div className="h-16 border-b-2 w-full"></div>
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}
