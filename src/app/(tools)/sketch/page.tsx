import ShortcutsTable from '@/components/ShortCutsTable';

const SketchPage = () => {

    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
        <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Sketch Shortcuts</h1>
        <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Sketch is a digital design tool focused on creating user interfaces, websites, and icons. It allows for vector-based design, prototyping, and collaboration. Here are some shortcuts to help you navigate Sketch more efficiently and streamline your design process.</p>
        <ShortcutsTable pageTool="Sketch"/>
    </div>
     );
}
 
export default SketchPage;