import { MdEmail, } from "react-icons/md";
import { FaMapLocationDot, } from "react-icons/fa6";
import {
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaMobileAlt,
  FaWhatsapp,
  FaPhone,
  FaTelegramPlane,
} from "react-icons/fa";

const contactData = {
    en: {
        title: "Contact Me",
        description: "Have a project idea or an opportunity in mind? I’d love to hear from you and discuss how we can turn your ideas into a real digital experience.",
        form: {
            nameField: {
                label: "Full Name",
                placeholder: "Join Dear",
            },
            emailField: {
                label: "Email Address",
                placeholder: "exmple@gmail.com",
            },
            subjectField: {
                label: "Subject",
                placeholder: "Enter your subject",
            },
            messageField: {
                label: "Message",
                placeholder: "Enter your message",
            },
            btnSubmit: {
                text: "Send",
                textLoading: "Sending...",
            },
            successMessage: "Your message was sent successfully, thank you.",
        },
        info: {
            title: "Let's Connect",
            description: "Have a project in mind, a job opportunity, or simply want to discuss an idea? Feel free to reach out. I'm always open to new opportunities and interesting collaborations.",
            whatDo: {
                title: "What I Do",
                items: [
                    {icon: FaLaptopCode, label: "Frontend Development",},
                    {icon: FaServer, label: "Backend Development",},
                    {icon: FaLayerGroup, label: "MERN Stack Development",},
                    {icon: FaMobileAlt, label: "Responsive Web Design",},
                ],
            },
            location: {
                title: "Location",
                items: [
                    {icon: FaMapLocationDot, label: "Jaramana, Rif Dimashq, Syria",},
                ],
            },
            contactInfo: {
                title: "Contact Links",
                items: [
                    {
                        icon: MdEmail, 
                        label: "moutasem083@gmail.com", 
                        target: undefined, 
                        rel: undefined, 
                        href: "mailto:moutasem083@gmail.com",
                        isRotateIconRTL: false,
                    },
                    {
                        icon: FaWhatsapp, 
                        label: "+963934636708", 
                        target:"_blank", 
                        rel: "noopener noreferrer", 
                        href: "https://wa.me/963934636708",
                        isRotateIconRTL: false,
                    },{
                        icon: FaPhone, 
                        label: "+963934636708", 
                        target:"_blank", 
                        rel: "noopener noreferrer", 
                        href: "tel:+963934636708",
                        isRotateIconRTL: true,
                    },{
                        icon: FaTelegramPlane, 
                        label: "MoatasemEzzeldin", 
                        target: undefined, 
                        rel: undefined, 
                        href: "https://t.me/MoatasemEzzeldin",
                        isRotateIconRTL: true,
                    },
                ],
            },
        },
    },
    ar: {
        title: "تواصل معي",
        description: "لديك فكرة مشروع أو فرصة عمل؟ يسعدني أن أسمع منك ونتحدث عن كيفية تحويل أفكارك إلى تجربة رقمية حقيقية.",
        form: {
            nameField: {
                label: "الاسم والكنية",
                placeholder: "Join Dear",
            },
            emailField: {
                label: "الإيميل",
                placeholder: "exmple@gmail.com",
            },
            subjectField: {
                label: "الموضوع",
                placeholder: "أدخل الموضوع",
            },
            messageField: {
                label: "الرسالة",
                placeholder: "أدحل الرسالة",
            },
            btnSubmit: {
                text: "إرسال",
                textLoading: "يرسل...",
            },
            successMessage: "تم إرسال رسالتك بنجاح، شكرًا لتواصلك.",
        },
        info: {
            title: "لنتواصل",
            description: "لديك مشروع في ذهنك، فرصة عمل، أو ترغب ببساطة في مناقشة فكرة؟ لا تتردد في التواصل معي. أنا دائماً منفتح على الفرص الجديدة والتعاونات المميزة.",
            whatDo: {
                title: "ماذا أفعل",
                items: [
                    {icon: FaLaptopCode, label: "تطوير الواجهات الأمامية",},
                    {icon: FaServer, label: "تطوير الواجهات الخلفية",},
                    {icon: FaLayerGroup, label: "تطوير شامل MERN",},
                    {icon: FaMobileAlt, label: "تصميم مواقع متجاوبة",},
                ],
            },
            location: {
                title: "الموقع",
                items: [
                    {icon: FaMapLocationDot, label: "جرمانا, ريف دمشق, سوريا",},
                ],
            },
            contactInfo: {
                title: "لينكات التواصل",
                items: [
                    {
                        icon: MdEmail, 
                        label: "moutasem083@gmail.com", 
                        target: undefined, 
                        rel: undefined, 
                        href: "mailto:moutasem083@gmail.com",
                        isRotateIconRTL: false,
                    },
                    {
                        icon: FaWhatsapp, 
                        label: "+963934636708", 
                        target:"_blank", 
                        rel: "noopener noreferrer", 
                        href: "https://wa.me/963934636708",
                        isRotateIconRTL: false,
                    },{
                        icon: FaPhone, 
                        label: "+963934636708", 
                        target:"_blank", 
                        rel: "noopener noreferrer", 
                        href: "tel:+963934636708",
                        isRotateIconRTL: true,
                    },{
                        icon: FaTelegramPlane, 
                        label: "MoatasemEzzeldin", 
                        target: undefined, 
                        rel: undefined, 
                        href: "https://t.me/MoatasemEzzeldin",
                        isRotateIconRTL: true,
                    },
                ],
            },
        },
    },
};

export default contactData;