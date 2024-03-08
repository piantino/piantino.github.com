import Image from "next/image";


export default function Card({ children, title, href, image, className }: any) {
    const cardImage = image ? image : "/next.svg"

    console.info(cardImage)

    return (
        <div className={className + " bg-white border border-gray-200 rounded-lg shadow"}>
            <a href={href}>
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                    <Image src={cardImage} alt={title} fill={true} style={{ objectFit: 'fill' }} className="rounded-t-lg"></Image>
                </div>
            </a>
            <div className="p-5">
                <a href={href}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                    {children}
                </p>
            </div>
        </div>
    )
}
