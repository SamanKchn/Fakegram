'use client'

interface DialogBox {
    title: string,
    discard: string,
    agree: string,
    onDiscard: CallableFunction,
    onAgree: CallableFunction,
    loadingState?: boolean,
    loadingMessage?: string,
}

export default function DialogBox({ title, agree, discard, onAgree, onDiscard, loadingState, loadingMessage }: DialogBox) {
    return (
        <>
            <div
                className="fixed flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm w-full h-full z-40"
                onClick={() => onDiscard()}
            >
                {/* dialogBox */}
                <div className="flex flex-col items-center justify-center gap-6 p-8 bg-black bg-opacity-70 border-[1px] border-stone-600 text-white rounded-md">
                    <h2 className="text-lg font-semibold">
                        {title}
                    </h2>

                    <div className="flex gap-4 ">
                        <button
                            className="w-[100px] text-white border-[1px] border-stone-400 py-2 rounded-md font-semibold"
                            onClick={() => onDiscard()}
                            disabled={loadingState ? loadingState : false}
                        >
                            {discard}
                        </button>

                        <button
                            className="w-[100px] bg-red-600 text-white rounded-md font-semibold"
                            onClick={() => onAgree()}
                            disabled={loadingState ? loadingState : false}
                        >
                            {loadingState && loadingState ? loadingMessage : agree}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}