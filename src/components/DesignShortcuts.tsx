import Image from "next/image";
import ToolCard from "./ToolCard";

const tools = [
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
    },
    {
        title: "Adobe",
        imgsrc: "/toolslogo/logo-adobeillustrator.png",
        href: "/"
    }
]

const DesignShortcuts = () => {
    return ( 
        <div className="w-[84vw] mx-auto md:flex gap-8">
            <div className="flex flex-col gap-4">
                <Image
                    src="/developmenticon.svg"
                    alt="Development Icon"
                    height={60}
                    width={60}
                />
                <h2 className="font-extrabold text-2xl">
                    Development shortcuts
                </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-start w-fit">
                {tools.map((tools) => (
                    <ToolCard key={tools.title} {...tools}/>
                ))}
            </div>
        </div>
     );
}
 
export default DesignShortcuts;