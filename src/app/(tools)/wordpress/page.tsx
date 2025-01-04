import ShortcutsTable from "@/components/ShortCutsTable";

const WordpressShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Wordpress Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">WordPress is a popular platform for creating and managing websites. It offers flexibility with themes, plugins, and an easy-to-use editor. Here are some shortcuts to help you navigate WordPress more efficiently and enhance your site management.</p>
            <ShortcutsTable pageTool="WordPress"/>
        </div>
     );
}
 
export default WordpressShortcutsPage;