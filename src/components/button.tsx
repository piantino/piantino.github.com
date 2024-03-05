export default function Button({ children }: any) {
    return (
        <button className="bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-6 rounded hover:drop-shadow-2xl">
            {children}
        </button>
    )
}
