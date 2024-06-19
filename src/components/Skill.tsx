
type Skill = {
    logo: string,
    name: string,
    level: number,
    exp: number
}

function Skill({ logo, name, level, exp }: Skill) {
    return (
        <div className='antialiased border border-gray-800 bg-slate-900 w-full max-w-lg rounded-md h-fit p-6 flex flex-col gap-2 items-start'>
            <div className="flex items-center gap-2">
                <i className={logo}></i>
                <h3 className="text-xl font-semibold">{name}</h3>
            </div>

            <div className="flex items-start gap-3">
                <div>
                    <h1 className="font-medium text-gray-200">Level {level}</h1>
                </div>
                <div>
                    <i className='bx bxs-star text-purple-500' ></i>
                </div>
            </div>

            <div>
                <h1 className="font-medium text-gray-200">Experience - {exp} years</h1>
            </div>
        </div>
    )
}

export default Skill