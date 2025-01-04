import ShortcutsTable from "@/components/ShortCutsTable";

const VSCodeShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">VS Code Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Visual Studio Code (VS Code) is a popular, lightweight code editor that supports a wide range of programming languages and extensions. It offers powerful features for coding, debugging, and version control. Here are some shortcuts to help you navigate VS Code more efficiently and boost your productivity.</p>
            <ShortcutsTable pageTool="VS Code"/>
        </div>
     );
}
 
export default VSCodeShortcutsPage;

