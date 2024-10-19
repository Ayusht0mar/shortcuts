import ToolCard from "./ToolCard";

const tools = [
    {
        title: "Atom",
        imgsrc: "/toolslogo/atom.svg",
        href: "/"
    },
    {
        title: "Docker",
        imgsrc: "/toolslogo/docker.svg",
        href: "/"
    },
    {
        title: "IntelliJ IDEA",
        imgsrc: "/toolslogo/jb_IntelliJIDEA.svg",
        href: "/"
    },
    {
        title: "VS Code",
        imgsrc: "/toolslogo/vs_code.svg",
        href: "/visualstudiocode/"
    },
    {
        title: "Wordpress",
        imgsrc: "/toolslogo/wordpress.svg",
        href: "/"
    },
    {
        title: "Sublime",
        imgsrc: "/toolslogo/sublime_text.svg",
        href: "/"
    },
]

const DevelopmentShortcuts = () => {
    return ( 
        <div className="w-[84vw] mx-auto md:flex my-32 justify-between gap-8">
            <h2 className="font-extrabold text-3xl mb-6 md:mb-0 lg:text-6xl lg:leading-snug text-[#B7B7BF]">
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