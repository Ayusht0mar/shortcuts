import ShortcutsTable from "@/components/ShortCutsTable";

const GoogleChromeShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Google Chrome Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Google Chrome is a fast and user-friendly web browser that helps you browse the internet with ease. It offers features like tab management, extensions, and synchronization across devices. Here are some shortcuts to help you navigate Chrome faster and boost your browsing efficiency.</p>
            <ShortcutsTable pageTool="Google Chrome"/>
        </div>
     );
}
 
export default GoogleChromeShortcutsPage;