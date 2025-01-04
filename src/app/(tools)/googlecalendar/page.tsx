import ShortcutsTable from "@/components/ShortCutsTable";

const GoogleCalendarShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Google Calendar Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Google Calendar is a versatile time management and scheduling tool that helps you organize your events, set reminders, and collaborate with others. It integrates seamlessly with other Google services, making it easy to stay on top of your appointments and deadlines. Here are some shortcuts to help you navigate Google Calendar more efficiently and manage your time with ease.</p>
            <ShortcutsTable pageTool="Google Calendar"/>
        </div>
     );
}
 
export default GoogleCalendarShortcutsPage;