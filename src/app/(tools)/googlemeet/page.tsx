import ShortcutsTable from "@/components/ShortCutsTable";

const GoogleMeetShortcutsPage = () => {
    return (
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Google Meet Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Google Meet is a video conferencing platform that allows individuals and teams to connect, collaborate, and communicate virtually. It offers features like screen sharing, real-time captions, and seamless integration with Google Workspace. Here are some shortcuts to help you navigate Google Meet more efficiently and enhance your virtual meeting experience.</p>
            <ShortcutsTable pageTool="Google Meet"/>
        </div>
     );
}
 
export default GoogleMeetShortcutsPage;