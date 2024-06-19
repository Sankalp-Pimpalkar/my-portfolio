
function Container({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <div>
            <div className="flex items-center gap-5 mb-4">
                <h1 className="font-mono text-2xl text-purple-600 font-semibold group hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                    {'<'}
                    <span className="group-hover:text-purple-600 text-gray-200">
                        {title}
                    </span>
                    {'>'}
                </h1>

                {/* <span className="w-full h-1 rounded text-gray-200 bg-gray-200" /> */}
            </div>

            {/* <div className='flex flex-row'> */}
            {/* <div className='w-4 h-full'></div> */}
            {children}
            {/* </div> */}

            <div className="flex items-center gap-5 mt-4">
                <h1 className="font-mono text-2xl text-purple-600 font-semibold group hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                    {'</'}
                    <span className="group-hover:text-purple-600 text-gray-200">
                        {title}
                    </span>
                    {'>'}
                </h1>

                {/* <span className="w-full h-1 rounded text-gray-200 bg-gray-200" /> */}
            </div>
        </div>
    )
}

export default Container