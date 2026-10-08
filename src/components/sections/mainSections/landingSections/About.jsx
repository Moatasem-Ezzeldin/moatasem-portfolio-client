import { Container, SectionTitle, BaseCard } from "../../../../components/index"

const About = ({ aboutData, name }) => {
  return (
    <div name={name} className="bg-body border-t border-border py-10 min-h-screen">
    <Container className="w-full h-full">
      <SectionTitle title={aboutData.title} />
      <div className="flex flex-col gap-8 xl:flex-row lg:justify-between xl:gap-16 items-stretch">
        {/* left */}
        <div 
          className="w-full xl:w-[40%] rounded-2xl bg-container/15 border border-border/80 p-5 md:p-6 
           flex flex-col gap-2 shadow-md"
        >
          <h3 className="text-title font-semibold text-md">{aboutData.subtitle}</h3>
          <p className="text-subtitle font-medium text-base leading-relaxed flex-1">{aboutData.description}</p> 
        </div>
        {/* right */}
        <div className="w-full xl:w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
          {aboutData.r.map((item, index) => {
            const Icon = item.icon;
            return (
              <BaseCard 
                key={index} 
                className="bg-surface/80 p-5 md:p-6 rounded-lg group border border-input-border shadow-sm
                 hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary-sm"
              >
                <div className="mb-2 flex items-center gap-2">
                  <Icon 
                    className="text-primary transition-transform duration-300 group-hover:scale-110 text-center" 
                    size={22} 
                    strokeWidth={2} 
                  />
                  <h3 className=" text-lg text-primary/75 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-muted transition-colors duration-300 group-hover:text-subtitle">
                  {item.description}
                </p>
              </BaseCard>
            );
          })}
        </div>
      </div>
    </Container>
    </div>
  )
}

export default About