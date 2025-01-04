import ShortcutsTable from "@/components/ShortCutsTable";

const DockerShortcutsPage = () => {
    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
            <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Docker Shortcuts</h1>
            <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Docker is a platform used for developing, shipping, and running applications in lightweight, portable containers. It simplifies deployment and ensures consistency across different environments. Here are some shortcuts to help you work more efficiently and manage containers in Docker.</p>
            <ShortcutsTable pageTool="Docker"/>
        </div>
     );
}
 
export default DockerShortcutsPage;