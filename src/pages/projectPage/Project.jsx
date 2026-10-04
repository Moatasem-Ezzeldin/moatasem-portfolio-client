import { Button, Container, SkeletonBox } from "../../components/index"
import { useGetProjectBySlugQuery } from "../../redux/api/projectApi"
import { useLanguage } from "../../hooks/useLanguage"
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLayoutEffect } from "react";

const Project = () => {
    const { slug } = useParams();
    const { language } = useLanguage();
    const navigate = useNavigate();
    const { data, isLoading, isFetching, isError } = useGetProjectBySlugQuery(slug);
    const project = data?.data;
    const handleBackToProjects = () => {
        navigate("/", {
            state: {
                scrollTo: "projects",
            },
        });
    };
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <Container>
        <div className="w-full min-h-screen py-10 relative">
            {/* go back */}
            <div className="mb-8 ">
                <Button
                    onClick={handleBackToProjects}
                    variant="primary"
                    className="px-4 py-2.5 rounded-lg text-sm font-medium inline-flex gap-2"
                >
                    <ArrowLeft size={18} className="rtl:rotate-180" />
                    {language === "en" ? "Back to Projects" : "العودة للمشاريع"}
                </Button>
            </div>
            {(isError && !isLoading && !project) &&
                <div className="absolute inset-0 w-full h-full flex justify-center items-center">
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className="text-red-500 text-xl font-semibold">
                        {language === "en" ? "Failed to load project" : "تعذر تخيل المشروع"}
                    </h2>
                    <p className="w-full max-w-md text-sm leading-6 text-subtitle items-center justify-center">
                        {language === "en" ? "Something went wrong while loading the project" : "خدث حطأ أثناء جلب المشروع"}
                    </p>
                    </div>
                </div>
            }
            {!isError &&
            <>
                {/* Header content */}
                <div className="max-w-4xl">
                    {(isFetching || isLoading || !project)
                        ? (
                            <>
                                <SkeletonBox className="w-[78.29px] h-[29.59px] rounded-full" />
                                <SkeletonBox className="mt-4 w-[300.29px] h-[59.99px] rounded-lg" />
                                <SkeletonBox className="mt-5 w-full max-w-3xl h-[99.99px] rounded-lg" />
                            </>
                        )
                        : (
                            <>
                                <span className="px-3 py-1.5 text-primary inline-flex rounded-full border border-primary 
                                    bg-primary/10 text-xs">
                                        {project.category?.name?.[language]}
                                </span>
                                <h1 className="mt-4 text-title font-bold text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                                    {project.title?.[language]}
                                </h1>
                                <p className="text-subtitle text-base leading-7 max-w-3xl mt-5 sm:text-lg sm:leading-8">
                                    {project.description?.[language]}
                                </p>
                            </>
                        )
                    } 
                    {/* links */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button
                            href={project?.liveUrl}
                            disabled={!project?.liveUrl}
                            variant="primary"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 rounded-xl text-sm font-semibold inline-flex items-center
                            gap-2 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <ExternalLink size={17} className="rtl:rotate-270" />
                            
                            {language === "en" ? "Live Demo" : "زيارة الموقع"}
                        </Button>
                        <Button
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project?.frontendGithubUrl}
                            disabled={!project?.frontendGithubUrl}
                            variant="primary"
                            className="px-5 py-3 rounded-xl text-sm font-semibold inline-flex items-center
                            gap-2 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <FaGithub size={17} />
                            {language === "en" ? "Frontend" : "فرونت إند"}
                        </Button>
                        <Button
                        target="_blank"
                        href={project?.backendGithubUrl}
                        disabled={!project?.backendGithubUrl}
                        rel="noopener noreferrer"
                        variant="primary"
                        className="px-5 py-3 rounded-xl text-sm font-semibold inline-flex items-center
                            gap-2 transition-all duration-300 hover:-translate-y-0.5"
                        >
                        <FaGithub size={17} />
                        
                        {language === "en" ? "Backend" : "باك إند"}
                        </Button>
                    </div>
                </div>
                <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                    {(isFetching || isLoading || !project)
                        ? (
                            <>
                                <SkeletonBox className="w-full rounded-2xl aspect-3/4" /> 
                                <div className="space-y-8 w-full">
                                    <div className="">
                                        <h2 className="text-xl font-semibold text-title">
                                            {language === "en" ? "Technologies" : "التقنيات"}
                                        </h2>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {Array(6).fill(null).map((_, index) => (
                                                <SkeletonBox key={index} className="w-[70.50px] rounded-lg h-[32.01px]" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="">
                                        <h2 className="text-xl font-semibold text-title">
                                            {language === "ar" ? "أهم الميزات" : "Key Features"}
                                        </h2>
                                        <div className="mt-5 space-y-3 bg-btn-secondary-disabled p-6 
                                            rounded-2xl border border-border"
                                        >
                                            {Array(4).fill(null).map((_, index) => (
                                                <SkeletonBox key={index} className="w-[200.50px] rounded-md h-[24.01px]" />
                                            ))}
                                        </div>
                                    </div>
                                </div> 
                            </>
                        )
                        : (
                            <>
                            {/* image */}
                            <div className="w-full overflow-hidden rounded-2xl border border-border shadow-sm">
                                <img 
                                    src={project?.image?.url} 
                                    alt={project?.title?.[language]} 
                                    className="w-full aspect-3/4 object-cover"
                                />
                            </div>
                            <div className="space-y-8">
                                <div className="">
                                    <h2 className="text-xl font-semibold text-title">
                                        {language === "en" ? "Technologies" : "التقنيات"}
                                    </h2>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tools?.map((tool, index) => (
                                            <span
                                                key={index}
                                                className="rounded-lg px-3 py-1.5 text-sm font-medium bg-btn-secondary-bg
                                                text-btn-secondary-text"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/* Features */}
                                <div>
                                    <h2 className="text-xl font-semibold text-title">
                                        {language === "ar" ? "أهم الميزات" : "Key Features"}
                                    </h2>

                                    <div className="mt-5 space-y-3 bg-btn-secondary-disabled p-6 
                                    rounded-2xl border border-border">
                                        {project.features?.[language]?.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-start gap-2"
                                            >
                                                <Check size={16} strokeWidth={2.5} className="text-primary"/>
                                                <span className="text-sm leading-6 text-subtitle">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    }
                    
                    
                </div>
            </>
            }
        </div>
    </Container>
  )
}

export default Project