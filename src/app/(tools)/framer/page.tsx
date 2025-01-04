import ShortcutsTable from '@/components/ShortCutsTable';

const FramerPage = () => {

    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
        <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Framer Shortcuts</h1>
        <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Framer is a powerful design and prototyping tool that allows you to create interactive, high-fidelity prototypes with advanced animations and real-time collaboration. It bridges the gap between design and development, helping teams deliver responsive and immersive user experiences. Here are some shortcuts to help you work more efficiently and streamline your design process in Framer.</p>
        <ShortcutsTable pageTool="Framer"/>
    </div>
     );
}
 
export default FramerPage;