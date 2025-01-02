import ShortcutsTable from "@/components/ShortCutsTable";

const GoogleChromeShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Google Chrome Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Notion is an all-in-one workspace for your notes, tasks, wikis, and databases. It is a great tool for organizing your life and work. Here are some shortcuts to help you navigate Notion faster.</p>
            <ShortcutsTable pageTool="Google Chrome"/>
        </div>
     );
}
 
export default GoogleChromeShortcutsPage;