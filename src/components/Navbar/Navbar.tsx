import { Link, useLocation } from "react-router-dom"
import Github from "../../icons/Github"

function Navbar() {

    const location = useLocation()

    const Navlinks = [
        {
            slug: '/',
            name: 'Home'
        },
        {
            slug: '/about',
            name: 'About'
        },
        {
            slug: '/skills',
            name: 'Skills'
        },
        {
            slug: '/projects',
            name: 'Projects'
        },
    ]

    return (
        <div className="w-full sticky top-0 antialiased border-b border-gray-900 font-sans bg-gray-950 text-gray-200 py-5">
            <div className="container mx-auto px-10 flex items-center justify-between">
                <Link to='/'>
                    <h1 className="text-xl font-bold">Code & Ship</h1>
                </Link>

                <div className="flex items-center gap-10">
                    <ul className="hidden sm:flex items-center  gap-7 font-medium text-gray-400">
                        {
                            Navlinks.map((nav, index) => (
                                <Link
                                    key={index}
                                    to={nav.slug}
                                    className={`hover:text-gray-200 cursor-pointer transition-colors duration-300 ${location.pathname === nav.slug && 'text-gray-100'}`}>
                                    {nav.name}
                                </Link>
                            ))
                        }
                    </ul>

                    <a className="flex items-center" href="https://github.com/Sankalp-Pimpalkar">
                        <Github className="text-3xl text-gray-400 hover:text-gray-100" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar