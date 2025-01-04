import ShortcutsTable from "@/components/ShortCutsTable";

const PowerpointShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Microsoft PowerPoint</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Microsoft PowerPoint is a powerful tool for creating presentations, combining text, images, and multimedia for impactful communication. Here are some shortcuts to help you navigate MS PowerPoint more efficiently and create stunning presentations with ease.</p>
            <ShortcutsTable pageTool="Microsoft PowerPoint"/>
        </div>
     );
}
 
export default PowerpointShortcutsPage;