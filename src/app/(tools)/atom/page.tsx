import ShortcutsTable from "@/components/ShortCutsTable";

const AtomShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Atom Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Atom is a versatile, open-source text editor designed for developers. It offers a customizable workspace where you can write code, manage projects, and collaborate with ease. Here are some shortcuts to help you navigate Atom faster.</p>
            <ShortcutsTable pageTool="Atom"/>
        </div>
     );
}
 
export default AtomShortcutsPage;