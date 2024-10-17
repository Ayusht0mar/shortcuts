import ToolCard from "./ToolCard";

const tools = [
    {
        title: "Android Studio",
        imgsrc: "/toolslogo/logo-adobeillustrator.png",
        href: "/"
    },
    {
        title: "Adobe",
        imgsrc: "/toolslogo/logo-adobeillustrator.png",
        href: "/"
    },
    {
        title: "Adobe",
        imgsrc: "/toolslogo/logo-adobeillustrator.png",
        href: "/"
    },
    {
        title: "Adobe",
        imgsrc: "/toolslogo/logo-adobeillustrator.png",
        href: "/"
    },
    {
        title: "Adobe",
        imgsrc: "/toolslogo/logo-adobeillustrator.png",
        href: "/"
    },
    {
        title: "Adobe",
        imgsrc: "/toolslogo/logo-adobeillustrator.png",
        href: "/"
    },
    {
        title: "Adobe",
        imgsrc: "/toolslogo/logo-adobeillustrator.png",
        href: "/"
    },
    {
        title: "Adobe",
        imgsrc: "/toolslogo/logo-adobeillustrator.png",
        href: "/"
    }
]

const DevelopmentShortcuts = () => {
    return ( 
        <div className="w-[84vw] mx-auto md:flex justify-between gap-8">
            <h2 className="font-extrabold text-2xl lg:text-6xl lg:leading-snug text-[#B7B7BF]">
                Development <br /> shortcuts
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 justify-start w-fit">
                {tools.map((tools) => (
                    <ToolCard key={tools.title} {...tools}/>
                ))}
            </div>
        </div>
     );
}
 
export default DevelopmentShortcuts;