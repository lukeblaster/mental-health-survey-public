
export function LayoutMobile({ children }) {

    return (
        <div className="flex flex-col bg-white h-screen p-6 justify-center items-center">
            <div className="flex flex-col justify-center items-center bg-background h-full w-auto max-w-md rounded-lg p-9 bg-grade bg-cover">
                {children}
            </div>
        </div>
    )
}