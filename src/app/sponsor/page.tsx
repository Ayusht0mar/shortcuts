import Header from "@/components/Header";

const ShortcutsPage = () => {
    return (
        <div>
            <div className="bg-[#3f75ff]">  
                <Header/>
            </div>
            <div className="bg-[#3D3D3D] mt-10 w-[94vw] md:w-[90vw] rounded-3xl mx-auto px-10 py-20">
                <div className="mb-20">
                    <p className="font-semibold text-5xl mb-4 text-white">Sponsor Shortcuts</p>
                    <p className="text-white max-w-md text-lg ">Bring your product to the best users of your niche. <br /> Our visitors are developers, designers, managers and other working professionals. Become our sponsor and show people your products</p>
                </div>
                <a href="mailto:hi@ayushtomar.in" className="text-lg bg-white font-semibold px-4 py-2 rounded-full">Contact now</a>
            </div>
        </div>
     );
}

export default ShortcutsPage;