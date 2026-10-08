import { Container, SectionTitle, BaseCard } from "../../../../components/index"

const Skills = ({ skillsData, name }) => {
  return (
    <div name={name} className="bg-body border-t border-border py-10 min-h-screen">
    <Container className="w-full h-full">
      <SectionTitle title={skillsData.title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.m.map((item, index) => {
            const Icon = item.icon;
            return(
                <BaseCard  
                    key={index} 
                    className="group bg-surface/80 p-5 md:p-6 rounded-2xl border border-border shadow-md
                    hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-primary-md"
                >
                    <div className="mb-4 flex items-center gap-2">
                        <Icon 
                            className="text-primary transition-transform duration-300 group-hover:scale-110 text-center" 
                            size={22} 
                            strokeWidth={2} 
                        />
                        <h3 className=" text-lg text-title group-hover:text-primary transition-colors duration-300">
                            {item.title}
                        </h3>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {item.skills.map((skill, indexOneSkill) => (
                            <span
                                key={indexOneSkill}
                                className="text-sm px-2.5 py-1.25 bg-primary/10 text-subtitle rounded-full
                                group-hover:text-title transition-colors duration-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </BaseCard >
            )
        })}
      </div>
    </Container>
    </div>
  )
}

export default Skills;