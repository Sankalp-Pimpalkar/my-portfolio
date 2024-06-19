import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Projects from './Projects'
import Footer from '../components/Footer/Footer'
import Skills from './Skills'
import About from './About'

function Home() {
    return (
        <div className="w-full min-h-screen max-h-full bg-gray-950 ">
            <Navbar />
            <Outlet />

            <div className='flex flex-col border-t border-gray-600 container mx-auto p-5'>
                <About />
            </div>

            <div className='flex flex-col border-t border-gray-600 container mx-auto p-5'>
                <Projects />
            </div>

            <div className='flex flex-col border-t border-gray-600 container mx-auto p-5'>
                <Skills />
            </div>
            <Footer />
        </div>
    )
}

export default Home