import Container from "../components/Container"
import Skill from "../components/Skill"
import skills from "../data/skills"

function Skills() {
    return (
        <div className="text-white antialiased">
            <Container title="Skills">
                <div className="flex border-l border-gray-700 pl-4 justify-center sm:justify-normal gap-5 flex-wrap w-full h-fit md:p-10">
                    {
                        skills.map(skill => (
                            <Skill
                                key={skill.id}
                                name={skill.skill_name}
                                logo={skill.skill_logo}
                                level={skill.level}
                                exp={skill.experience}
                            />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Skills