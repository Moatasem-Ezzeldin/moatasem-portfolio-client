import { useState } from "react";
import { Container, SectionTitle, Button, ProjectCard, SkeletonBox } from "../../../../components/index";
import { useGetProjectsQuery } from "../../../../redux/api/projectApi";
import { useGetCategoriesQuery } from "../../../../redux/api/categoryApi";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = ({ projectsData, name, language }) => {
    const [page, setPage] = useState(1);
    const limit = 8;
    const [keyword, setKeyword] = useState("");
    const [activeCategory, setActiveCategory] = useState("")
    const { data: dataProjects, isLoading: isLoadingProjects, isError: isErrorProjects } 
    = useGetProjectsQuery({
        page, limit, keyword, category: activeCategory,
    });
    const { data: dataCategories, isLoading: isLoadingCategories, isError: isErrorCategories } = useGetCategoriesQuery();

    const projects = dataProjects?.data;
    const categories = dataCategories?.data;
    const pagination = dataProjects?.paginationResult;

    return (
        <div name={name} className="bg-body relative border-t border-border py-10 min-h-screen">
            <Container className="w-full h-full">
                <SectionTitle title={projectsData.title} />
                {/* Search */}
                <input
                    value={keyword}
                    disabled={isLoadingProjects || isErrorProjects}
                    onChange={(e) => {
                        setActiveCategory("");
                        setKeyword(e.target.value);
                        setPage(1);
                    }}
                    placeholder= {language=== "en" ? "Search by title or description": "ابحث بالعنوان أو الشرح"}
                    className="w-full max-w-md px-4 py-3 rounded-md outline-none border border-border
                    bg-surface text-title placeholder:text-subtitle transition-all duration-100 ease-in-out
                    focus:ring-2 focus:ring-primary"
                />
                {/* filter by Category */}
                {isErrorCategories 
                ? (
                    <div className="w-full flex items-center justify-start mt-8">
                        <h3 className="text-red-500 font-semibold text-lg">
                            {language === "en" ? "Failed to load categories" : "تعذر تخيل التصنيفات"}
                        </h3>
                    </div>
                )
                : (
                    isLoadingCategories 
                    ? (
                        <div className="w-full max-w-2xl flex flex-wrap gap-3 mt-8">
                            {Array(3).fill(null).map((_, index) => (
                                <SkeletonBox key={index} className="w-[70.50px] rounded-full h-[32.01px]" />
                            ))}
                        </div>
                    )
                    : (
                        categories 
                        ? (
                            keyword === "" && (
                            <div className="w-full max-w-2xl flex flex-wrap gap-3 mt-8">
                                {/* All */}
                                <Button
                                        variant={activeCategory === "" ? "primary" : "secondary"}
                                        onClick={() => setActiveCategory("")}
                                        className="px-2.5 py-1.25 rounded-full text-sm "
                                    >
                                        {language === "en" ? "All" : "الكل"}
                                    </Button>
                                {categories.map((item) => (
                                    <Button
                                        key={item._id}
                                        variant={activeCategory === item._id ? "primary" : "secondary"}
                                        onClick={() => setActiveCategory(item._id)}
                                        className="px-2.5 py-1.25 rounded-full text-sm "
                                    >
                                        {item.name[language]}
                                    </Button>
                                ))}
                            </div>
                            )    
                        )
                        : (
                            <div className="w-full flex items-center justify-start mt-8">
                                <h3 className="text-subtitle font-semibold text-lg">
                                    {language === "en" ? "No categories found" : "لا يوجد تصنيفات"}
                                </h3>
                            </div>
                        )
                    )
                )
                }


                {isErrorProjects
                ? (
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                        <h3 className="text-red-500 font-semibold text-lg">
                            {language === "en" ? "Failed to load projects" : "تعذر تخيل المشاريع"}
                        </h3>
                    </div>
                )
                : (
                    isLoadingProjects 
                    ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-8">
                            {Array(3).fill(null).map((_, index) => (
                                <SkeletonBox key={index} className="w-full h-[360.01px] rounded-2xl" />
                            ))}
                        </div>
                    )
                    : (
                        projects 
                        ? (
                            <div 
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-8"
                            >
                                {projects.map((item) => (
                                <ProjectCard key={item._id} project={item} language={language}/>
                                ))}
                            </div>   
                        )
                        : (
                            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                <h3 className="text-subtitle font-semibold text-lg">
                                    {language === "en" ? "No projects found" : "لا يوجد مشاريع"}
                                </h3>
                            </div>
                        )
                    )
                )
                }
                {/* pagination */}
                {pagination && pagination?.numberOfPages !== 1 &&
                    <div className="mt-8 flex items-center justify-between sm:justify-center gap-5">
                        {/* prev */} 
                        <Button
                            variant="primary"
                            className="w-10 h-10 rounded-lg flex justify-center items-center"
                            onClick={() => setPage((p) => p - 1)}
                            disabled={!pagination?.prev}
                        >
                            <ChevronLeft size={16} className="rtl:rotate-180" />
                        </Button>
                        <span className="text-sm text-title">
                            {language === "en" ? (
                                <>
                                Page{" "}
                                <span className="text-primary font-semibold">
                                    {pagination?.currentPage}
                                </span>{" "}
                                of{" "}
                                <span className="text-subtitle font-semibold">
                                    {pagination?.numberOfPages}
                                </span>
                                </>
                            ) : (
                                <>
                                الصفحة{" "}
                                <span className="text-primary font-semibold">
                                    {pagination?.currentPage}
                                </span>{" "}
                                من{" "}
                                <span className="text-subtitle font-semibold">
                                    {pagination?.numberOfPages}
                                </span>
                                </>
                            )}
                        </span>
                        {/* next */}
                        <Button
                            variant="primary"
                            className="w-10 h-10 rounded-lg flex justify-center items-center"
                            onClick={() => setPage((p) => p + 1)}
                            disabled={!pagination?.next}
                        >
                            <ChevronRight size={16} className="rtl:rotate-180" />
                        </Button>
                    </div>
                }
            </Container>
        </div>
    )
}

export default Projects;