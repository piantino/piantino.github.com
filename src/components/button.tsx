export default function Button({ children }: any) {
    return (
        <button className="bg-black text-white font-bold py-3 px-6 rounded hover:drop-shadow-2xl">
            {children}
        </button>
    )
}
