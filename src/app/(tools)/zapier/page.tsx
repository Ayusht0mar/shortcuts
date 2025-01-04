import ShortcutsTable from "@/components/ShortCutsTable";

const ZapierShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Zapier Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Zapier is an automation tool that connects apps and workflows, helping you save time by automating repetitive tasks. Here are some shortcuts to help you navigate Zapier more efficiently and streamline your automation processes.</p>
            <ShortcutsTable pageTool="Zapier"/>
        </div>
     );
}
 
export default ZapierShortcutsPage;