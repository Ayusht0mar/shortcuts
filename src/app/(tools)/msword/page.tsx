import ShortcutsTable from "@/components/ShortCutsTable";

const MswordShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Microsoft Word Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Microsoft Word is a versatile word processing tool used for creating, editing, and formatting documents. Here are some shortcuts to help you navigate MS Word more efficiently and boost your productivity while working on documents.</p>
            <ShortcutsTable pageTool="Microsoft Word"/>
        </div>
     );
}
 
export default MswordShortcutsPage;