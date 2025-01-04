import ShortcutsTable from '@/components/ShortCutsTable';

const AdobeXDPage = () => {

    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
        <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Adobe XD Shortcuts</h1>
        <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Adobe XD is a design and prototyping tool used for creating user interfaces and user experiences. It enables designers to create interactive prototypes, wireframes, and high-fidelity designs for web and mobile apps. Here are some shortcuts to help you streamline your design process and work more efficiently in Adobe XD.</p>
        <ShortcutsTable pageTool="Adobe XD"/>
    </div>
     );
}
 
export default AdobeXDPage;