import ToolCard from "./ToolCard";

const tools = [
    {
        title: "Adobe After Effects",
        imgsrc: "/toolslogo/adobe_after_effects.svg",
        href: "/adobeaftereffects"
    },
    {
        title: "Adobe Illustrator",
        imgsrc: "/toolslogo/adobe_illustrator.svg",
        href: "/"
    },
    {
        title: "Adobe Indesign",
        imgsrc: "/toolslogo/adobe_indesign.svg",
        href: "/"
    },
    {
        title: "Adobe Lightroom",
        imgsrc: "/toolslogo/adobe_lightroom.svg",
        href: "/"
    },
    {
        title: "Adobe Photoshop",
        imgsrc: "/toolslogo/adobe_photoshop.svg",
        href: "/"
    },
    {
        title: "Adobe XD",
        imgsrc: "/toolslogo/adobe_xd.svg",
        href: "/"
    },
    {
        title: "Figma",
        imgsrc: "/toolslogo/figma.svg",
        href: "/"
    },
    {
        title: "Framer",
        imgsrc: "/toolslogo/framer.svg",
        href: "/"
    },
    {
        title: "Sketch",
        imgsrc: "/toolslogo/sketch.svg",
        href: "/"
    },
    {
        title: "Zeplin",
        imgsrc: "/toolslogo/zeplin.svg",
        href: "/"
    },
]

const DesignShortcuts = () => {
    return ( 
        <div className="w-[84vw] mx-auto md:flex my-32 justify-between gap-8">
        <h2 className="font-extrabold text-2xl lg:text-6xl lg:leading-snug text-[#B7B7BF]">
            Design <br /> shortcuts
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 justify-start w-fit">
            {tools.map((tools) => (
                <ToolCard key={tools.title} {...tools}/>
            ))}
        </div>
    </div>
     );
}
 
export default DesignShortcuts;