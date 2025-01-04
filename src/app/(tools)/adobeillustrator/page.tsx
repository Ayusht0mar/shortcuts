import ShortcutsTable from '@/components/ShortCutsTable';

const AdobeAfterIllustrator = () => {


    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
        <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Adobe Illustrator Shortcuts</h1>
        <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Adobe Illustrator is a powerful vector graphics editor used for creating logos, illustrations, and more. With its precise tools and advanced features, it allows designers to craft scalable artwork for various media. Here are some shortcuts to help you work faster and more efficiently in Illustrator.</p>
        <ShortcutsTable pageTool="Adobe Illustrator"/>
    </div>
     );
}
 
export default AdobeAfterIllustrator;