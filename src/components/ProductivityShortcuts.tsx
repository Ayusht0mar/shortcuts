import ToolCard from "./ToolCard";

const tools = [
    {
        title: "Chrome",
        imgsrc: "/toolslogo/chrome_os.svg",
        href: "/"
    },
    {
        title: "Google Calendar",
        imgsrc: "/toolslogo/g-calendar.svg",
        href: "/"
    },
    {
        title: "Gmail",
        imgsrc: "/toolslogo/gmail.svg",
        href: "/"
    },
    {
        title: "Google Meet",
        imgsrc: "/toolslogo/google-meet.svg",
        href: "/"
    },
    {
        title: "MS Outlook",
        imgsrc: "/toolslogo/ms_outlook.svg",
        href: "/"
    },
    {
        title: "MS Powerpoint",
        imgsrc: "/toolslogo/ms_powerpoint.svg",
        href: "/"
    },
    {
        title: "MS Word",
        imgsrc: "/toolslogo/ms_word.svg",
        href: "/"
    },
    {
        title: "Notion",
        imgsrc: "/toolslogo/notion.svg",
        href: "/"
    },
    {
        title: "Zapier",
        imgsrc: "/toolslogo/zapier.svg",
        href: "/"
    },
]

const ProductivityShortcuts = () => {
    return ( 
        <div className="w-[84vw] mx-auto md:flex my-32 justify-between gap-8">
        <h2 className="font-extrabold text-2xl lg:text-6xl lg:leading-snug text-[#B7B7BF]">
            Productivity <br /> shortcuts
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 justify-start w-fit">
            {tools.map((tools) => (
                <ToolCard key={tools.title} {...tools}/>
            ))}
        </div>
    </div>
     );
}
 
export default ProductivityShortcuts;