import ShortcutsTable from "@/components/ShortCutsTable";

const SublimeShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Sublime Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Sublime Text is a fast and lightweight code editor known for its powerful features, such as syntax highlighting, multi-caret editing, and seamless plugin integration. Here are some shortcuts to help you navigate Sublime Text more efficiently and boost your coding productivity.</p>
            <ShortcutsTable pageTool="Sublime Text"/>
        </div>
     );
}
 
export default SublimeShortcutsPage;