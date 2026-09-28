import { Container, SectionTitle } from "../../../../components/index"
import { motion } from "motion/react";
const About = ({ aboutData, name }) => {
  return (
    <div name={name} className="bg-body border-t border-border py-10 min-h-screen">
    <Container className="w-full h-full">
      <SectionTitle title={aboutData.title} />
      <div className="flex flex-col gap-8 xl:flex-row lg:justify-between xl:gap-16 items-stretch">
        {/* left */}
        <div 
          className="w-full xl:w-[40%] rounded-2xl bg-surface border border-border p-5 md:p-6 
           flex flex-col gap-2"
        >
          <h3 className="text-title font-semibold text-md">{aboutData.subtitle}</h3>
          <p className="text-subtitle font-medium text-base leading-relaxed flex-1">{aboutData.description}</p> 
        </div>
        {/* right */}
        <div className="w-full xl:w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
          {aboutData.r.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.96,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.25,
                }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
                key={index} 
                className="bg-surface p-5 md:p-6 rounded-lg group"
              >
                <div className="mb-2 flex items-center gap-2">
                <Icon 
                  className="text-primary transition-transform duration-300 group-hover:scale-110 text-center" 
                  size={22} 
                  strokeWidth={2} 
                />
                <h3 className=" text-lg text-primary/75">{item.title}</h3>
                </div>
                <p className="text-sm leading-6 text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Container>
    </div>
  )
}

export default About