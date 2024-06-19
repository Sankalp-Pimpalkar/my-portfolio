import Container from "../components/Container"

function About() {
    return (
        <div className="text-white antialiased">
            <Container title="About">
                <div className="flex border my-8 border-gray-800 bg-gray-900 p-6 justify-start sm:justify-normal gap-5 flex-wrap w-full h-fit font-normal text-gray-300 md:p-10 rounded-md">
                    <div className="w-40 h-40 mx-auto">
                        <img src="/enderman.gif" alt="enderman" />
                    </div>
                    <p>
                        I am a dedicated third-year engineering student and a proficient <strong>MERN</strong> stack developer with a strong command of <strong>React</strong> and <strong>Node.js</strong>. My portfolio includes diverse projects where I have successfully integrated backend-as-a-service solutions such as <strong>Appwrite</strong> and <strong>Firebase</strong>. Currently, I am expanding my skill set by learning <strong>Next.js</strong>, further enhancing my capabilities in building dynamic, high-performance web applications.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default About