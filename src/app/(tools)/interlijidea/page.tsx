import ShortcutsTable from "@/components/ShortCutsTable";

const InterlijIdeaShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">IntelliJ IDEA Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Interlig Idea is a platform for managing and collaborating on ideas within organizations. It helps streamline innovation and decision-making processes. Here are some shortcuts to navigate Interlig Idea more efficiently and boost productivity.</p>
            <ShortcutsTable pageTool="IntelliJ IDEA"/>
        </div>
     );
}
 
export default InterlijIdeaShortcutsPage;