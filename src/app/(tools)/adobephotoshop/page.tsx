import ShortcutsTable from '@/components/ShortCutsTable';

const AdobePhotoshopPage = () => {

    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
        <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Adobe Photoshop Shortcuts</h1>
        <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Adobe Photoshop is a leading photo editing software used for creating and enhancing images, graphics, and digital art. With its powerful tools for retouching, compositing, and color correction, Photoshop is essential for professionals and creatives alike. Here are some shortcuts to help you work faster and more efficiently in Photoshop.</p>
        <ShortcutsTable pageTool="Adobe Photoshop"/>
    </div>
     );
}
 
export default AdobePhotoshopPage;