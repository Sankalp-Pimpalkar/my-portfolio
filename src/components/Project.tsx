import Code from "../icons/Code"
import Github from "../icons/Github"
import Link from "../icons/Link"
import Tab from "./Tab"

function Project({
    name,
    description,
    techstack,
    link,
    code
}: {
    name: string,
    description: string,
    techstack: Array<string>,
    link: string,
    code: string
}) {
    return (
        <div className='border border-gray-800 bg-slate-900 w-full max-w-lg rounded-md h-fit p-6 flex flex-col gap-4 items-start'>
            <div className="bg-slate-600 py-1 px-2 rounded-full">
                <Code className="text-2xl" />
            </div>

            <div>
                <h1 className="text-2xl font-bold">
                    {
                        name || 'Project Name'
                    }
                </h1>
                <p className="text-base text-gray-400 mt-2">
                    {
                        description ||
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere molestiae vitae. Non laudantium et est harum reiciendis dicta possimus unde, ea nostrum commodi dignissimos nulla beatae cupiditate officiis officia sint labore minima. Quisquam quod expedita blanditiis voluptates eligendi pariatur!'
                    }
                </p>

                <div className="text-base mt-1 py-3 flex gap-3 flex-wrap">
                    {
                        techstack?.map(tech => (<Tab key={tech} text={tech} />))
                    }
                </div>

                <div className="mt-5 text-gray-300 flex gap-4 items-center text-3xl">
                    <a href={link}>
                        <Link className="active:text-sky-500 hover:text-sky-500" />
                    </a>
                    <a href={code}>
                        <Github className="active:text-gray-200 hover:text-gray-200" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project