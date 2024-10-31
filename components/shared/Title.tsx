type Props = {
    title: string
    style?: string
}

export default function Title({ title, style }: Props) {
    return (
        <p className={`text-2xl font-semibold text-white ${style} p-5`}>{title}</p>
    )
}
