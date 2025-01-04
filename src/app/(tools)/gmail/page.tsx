import ShortcutsTable from "@/components/ShortCutsTable";

const GmailShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Gmail Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Gmail is a widely-used email service that offers powerful features for managing your inbox, organizing emails, and staying productive. With its user-friendly interface and seamless integration with other Google services, Gmail makes communication easy and efficient. Here are some shortcuts to help you navigate Gmail more effectively and save time while managing your emails.</p>
            <ShortcutsTable pageTool="Gmail"/>
        </div>
     );
}
 
export default GmailShortcutsPage;