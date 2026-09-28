import {
    Palette,
    Monitor,
    Server,
    ShoppingCart,
    ShieldCheck,
    CloudCog,
} from "lucide-react";

const aboutData = {
    en: {
        title: "About Me",
        subtitle: "Do you want to know about me?",
        description: "I’m Moatasem Ezzeldin, a Full Stack JavaScript Developer with more than 3 years of experience in designing and developing websites and web applications, from building modern and responsive user interfaces with React and JavaScript to developing backend systems and REST APIs using Node.js and Express. I’m currently a fourth-year Computer Engineering student at the Faculty of Electrical and Electronic Engineering at Aleppo University. I build a variety of web applications, including SaaS platforms, e-commerce stores, personal websites, portfolios, and user and content management systems. I work with MongoDB and Mongoose, as well as SQL databases when needed, and build secure authentication systems using JWT, OAuth, session management, and role-based authorization. I also focus on building well-structured APIs, reusable components, and responsive interfaces, with an emphasis on clean, maintainable, and scalable code.",
        r: [
                {
                    icon: Palette,
                    title: "UI / UX Design",
                    description:
                        "Designing modern and intuitive interfaces focused on user experience and ease of use.",
                },
                {
                    icon: Monitor,
                    title: "Frontend Development",
                    description:
                        "Building interactive and responsive interfaces using React and JavaScript with reusable components.",
                },
                {
                    icon: Server,
                    title: "Backend Development",
                    description:
                        "Building backend systems and REST APIs with Node.js and Express using a structured and scalable architecture.",
                },
                {
                    icon: ShoppingCart,
                    title: "E-Commerce Development",
                    description:
                        "Building complete e-commerce stores with products, carts, orders, users, and content management.",
                },
                {
                    icon: ShieldCheck,
                    title: "Authentication & Security",
                    description:
                        "Building secure authentication systems using JWT, OAuth, sessions, and role-based authorization.",
                },
                {
                    icon: CloudCog,
                    title: "SaaS Applications",
                    description:
                        "Developing full-featured SaaS applications with user, role, data, and system-specific functionality management.",
                },
        ]
    },
    ar: {
        title: "نبذة عني",
        subtitle: "هل ترغب بمعرفة المزيد عني؟",
        description: "أنا معتصم عز الدين، مطور Full Stack JavaScript لدي خبرة تمتد لأكثر من 3 سنوات في تصميم وتطوير مواقع وتطبيقات الويب، بدءًا من بناء واجهات المستخدم الحديثة والمتجاوبة باستخدام React وJavaScript، وصولًا إلى تطوير الأنظمة الخلفية وواجهات REST API باستخدام Node.js وExpress. أدرس حاليًا هندسة الحواسيب في السنة الرابعة في كلية الهندسة الكهربائية والإلكترونية بجامعة حلب، وأعمل على تطوير مجموعة متنوعة من تطبيقات الويب، تشمل أنظمة SaaS، المتاجر الإلكترونية، المواقع الشخصية، ومعارض الأعمال، بالإضافة إلى أنظمة إدارة المستخدمين والمحتوى. أستخدم MongoDB وMongoose وقواعد بيانات SQL عند الحاجة، وأعمل على بناء أنظمة المصادقة والحماية باستخدام JWT وOAuth وإدارة الجلسات والصلاحيات. كما أهتم ببناء APIs منظمة، ومكونات قابلة لإعادة الاستخدام، وواجهات متجاوبة تعمل على مختلف الأجهزة، مع التركيز على كتابة كود نظيف وقابل للصيانة والتوسع.",
        r: [
                {
                    icon: Palette,
                    title: "تصميم واجهات وتجربة المستخدم",
                    description:
                        "تصميم واجهات عصرية وبسيطة تركز على تجربة المستخدم وسهولة الاستخدام.",
                },
                {
                    icon: Monitor,
                    title: "تطوير الواجهات الأمامية",
                    description:
                        "بناء واجهات تفاعلية ومتجاوبة باستخدام React وJavaScript مع مكونات قابلة لإعادة الاستخدام.",
                },
                {
                    icon: Server,
                    title: "تطوير الأنظمة الخلفية",
                    description:
                        "تطوير أنظمة خلفية وواجهات REST API باستخدام Node.js وExpress مع بنية منظمة وقابلة للتوسع.",
                },
                {
                    icon: ShoppingCart,
                    title: "تطوير المتاجر الإلكترونية",
                    description:
                        "بناء متاجر إلكترونية متكاملة تشمل المنتجات والسلة والطلبات والمستخدمين وإدارة المحتوى.",
                },
                {
                    icon: ShieldCheck,
                    title: "المصادقة والحماية",
                    description:
                        "بناء أنظمة مصادقة آمنة باستخدام JWT وOAuth والجلسات والصلاحيات.",
                },
                {
                    icon: CloudCog,
                    title: "تطبيقات SaaS",
                    description:
                        "تطوير تطبيقات SaaS متكاملة مع إدارة المستخدمين والأدوار والبيانات والوظائف الخاصة بكل نظام.",
                },
        ],
    },
};

export default aboutData;