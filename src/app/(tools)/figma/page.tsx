import ShortcutsTable from '@/components/ShortCutsTable';

const FigmaPage = () => {

    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
        <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Figma Shortcuts</h1>
        <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Adobe After Effects is a  .</p>
        <ShortcutsTable pageTool="Figma"/>
    </div>
     );
}
 
export default FigmaPage;