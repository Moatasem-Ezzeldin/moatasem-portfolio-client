import Button from "./Button"
import BaseCard from "./BaseCard"
import {
    ExternalLink,
    Eye,
} from "lucide-react";
import { motion } from "motion/react";

const ProjectCard = ({ project, language }) => {

  return (
    <BaseCard 
      className="relative overflow-hidden rounded-2xl border border-border shadow-md
      bg-elevated/80 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-primary-md"
    >
      <img 
        src={project.image.url} 
        alt={project.title[language]} 
        className="w-full h-56 aspect-video transition-transform duration-500 hover:scale-105"
      />
      <div className="p-5 bg-elevated">
        <div className="flex flex-col gap-2.5 mb-3">
          <span className="px-2.5 py-1.25 bg-primary/10 w-fit text-primary text-xs rounded-full font-medium">
            {project.category.name[language]}
          </span>
          <h1 className="text-lg font-semibold text-title mb-2">{project.title[language]}</h1>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            href={project?.liveUrl}
            disabled={!project?.liveUrl}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 w-full h-11 rounded-lg text-sm font-medium"
          >
            <ExternalLink size={16} className="rtl:rotate-270"/>
            
            {language === "en" ? "Live Demo" : "زيارة الموقع"}
          </Button>  
          <Button
            to={`/projects/${project?.slug}`}
            variant="secondary"
            className="px-4 w-full h-11 rounded-lg text-sm font-medium"
          >
            <Eye size={16} />
            
            {language === "en" ? "View Details" : "عرض التفاصيل"}
          </Button>
        </div>
      </div>
    </BaseCard >  
  )
}

export default ProjectCard