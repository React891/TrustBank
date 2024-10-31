import { Dispatch, SetStateAction } from "react"

type Props = {
    style?: string
    children: React.ReactNode
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
}

export default function BackdropParent({ children, style, opened, setOpened }: Props) {
    return (
        <div className={`${style} ${opened ? "opacity-100 visible" : "invisible opacity-0"} duration-500 h-screen w-full grid place-content-center top-0 left-0 delay-75 backdrop-blur-md bg-black/10 fixed z-[5000]`}>
            {children}
            <div onClick={() => setOpened(false)} className="h-screen fixed z-[-20] top-0 left-0 w-full"></div>
        </div>
    )
}
