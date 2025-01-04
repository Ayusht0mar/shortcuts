import ShortcutsTable from '@/components/ShortCutsTable';

const AdobeLightroomPage = () => {

    return ( 
        <div className="w-[96vw] md:w-[90vw] mx-auto my-16 max-w-7xl">
        <h1 className="text-5xl text-[#B7B7BF] font-extrabold">Adobe Lightroom Shortcuts</h1>
        <p className="text-[#B7B7BF] text-lg mt-4 max-w-xl">Adobe Lightroom is a powerful photo editing and organizing software designed for photographers. It allows you to enhance, organize, and share your photos with ease, offering a wide range of editing tools and presets. Here are some shortcuts to help you speed up your workflow and edit photos more efficiently in Lightroom.</p>
        <ShortcutsTable pageTool="Adobe Lightroom"/>
    </div>
     );
}
 
export default AdobeLightroomPage;