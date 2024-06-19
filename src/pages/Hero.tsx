
function Hero() {
    return (
        <div className="antialiased bg-cover bg-no-repeat w-full h-fit text-white flex justify-center items-center p-10 container mx-auto">
            <div className="flex pt-10 md:pt-20 w-full h-full">
                <div className="flex flex-col gap-10 md:gap-12 font-mono">
                    <h1 className="font-bold text-3xl md:text-6xl text-gray-400">
                        Hey! I am
                        <span className="text-purple-400"> Sankalp Pimpalkar</span>
                    </h1>

                    <p className="w-full max-w-lg text-gray-300 text-lg border border-gray-800 p-5 rounded bg-gray-900">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos deleniti fuga, placeat pariatur molestiae neque beatae necessitatibus dicta consectetur consequuntur?
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <button className="w-fit text-nowrap bg-purple-600 active:bg-purple-500 px-5 py-3 text-lg font-semibold text-gray-200 hover:rounded-xl transition-all duration-300 cursor-pointer">
                            Download CV
                        </button>

                        <button className="fw-fit text-nowrap flex items-center border border-transparent hover:border-gray-600 transition-colors duration-300 gap-3 px-5 py-3 text-lg font-semibold cursor-pointer active:text-gray-400">
                            Let&apos;s Connect
                            <i className='bx bx-chevrons-right bx-fade-right text-4xl'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero