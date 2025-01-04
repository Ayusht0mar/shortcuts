import ShortcutsTable from '@/components/ShortCutsTable';

const FigmaPage = () => {

    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
        <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Figma Shortcuts</h1>
        <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Figma is a collaborative design tool used for creating user interfaces, prototypes, and visual assets. It allows teams to work together in real-time, ensuring seamless collaboration and faster design iterations. Here are some shortcuts to help you work more efficiently and navigate Figma with ease.</p>
        <ShortcutsTable pageTool="Figma"/>
    </div>
     );
}
 
export default FigmaPage;