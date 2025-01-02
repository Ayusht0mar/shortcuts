import ToolCard from "./ToolCard";

const tools = [
    {
        title: "Adobe After Effects",
        imgsrc: "/toolslogo/adobe_after_effects.svg",
        href: "/adobeaftereffects/"
    },
    {
        title: "Adobe Illustrator",
        imgsrc: "/toolslogo/adobe_illustrator.svg",
        href: "/adobeillustrator/"
    },
    {
        title: "Adobe Indesign",
        imgsrc: "/toolslogo/adobe_indesign.svg",
        href: "/adobeindesign/"
    },
    {
        title: "Adobe Lightroom",
        imgsrc: "/toolslogo/adobe_lightroom.svg",
        href: "/adobelightroom/"
    },
    {
        title: "Adobe Photoshop",
        imgsrc: "/toolslogo/adobe_photoshop.svg",
        href: "/adobephotoshop/"
    },
    {
        title: "Adobe XD",
        imgsrc: "/toolslogo/adobe_xd.svg",
        href: "/adobexd/"
    },
    {
        title: "Figma",
        imgsrc: "/toolslogo/figma.svg",
        href: "/figma/"
    },
    {
        title: "Framer",
        imgsrc: "/toolslogo/framer.svg",
        href: "/framer/"
    },
    {
        title: "Sketch",
        imgsrc: "/toolslogo/sketch.svg",
        href: "/sketch/"
    },
    {
        title: "Zeplin",
        imgsrc: "/toolslogo/zeplin.svg",
        href: "/zeplin/"
    },
]

const DesignShortcuts = () => {
    return ( 
        <div className="w-[84vw] mx-auto md:flex my-32 justify-between gap-8">
            <h2 className="font-extrabold text-3xl mb-6 md:mb-0 lg:text-6xl leading-snug text-[#B7B7BF]">
            Design <br /> Shortcuts
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