import ShortcutsTable from "@/components/ShortCutsTable";

const OutlookShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">MS Outlook Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Microsoft Outlook is a widely-used email and calendar management tool that helps you stay organized and productive. It integrates email, calendar, and tasks in one platform, making communication and scheduling easier. Here are some shortcuts to help you navigate MS Outlook more efficiently and save time while managing your emails and calendar.</p>
            <ShortcutsTable pageTool="Microsoft Outlook"/>
        </div>
     );
}
 
export default OutlookShortcutsPage;