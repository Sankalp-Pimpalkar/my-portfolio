import Container from "../components/Container"
import Project from "../components/Project"
import projects from "../data/projects"

function Projects() {
    return (
        <div className="text-white antialiased">
            <Container title="Projects">
                <div className="flex border-l border-gray-700 pl-4 justify-center sm:justify-normal gap-5 flex-wrap w-full h-fit md:p-10">
                    {
                        projects.map(project => (
                            <Project
                                key={project.id}
                                name={project.project_name}
                                description={project.project_descriptions}
                                techstack={project.techstack}
                                link={project.project_link}
                                code={project.project_source_code}
                            />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Projects