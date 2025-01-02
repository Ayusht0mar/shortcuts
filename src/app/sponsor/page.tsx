import Header from "@/components/Header";

const ShortcutsPage = () => {
    return (
        <div>
            <div className="bg-[#3f75ff]">  
                <Header/>
            </div>
            <div className="text-center mt-20">
                <p className="font-semibold text-5xl mb-10">Sponsor Shortcuts</p>
                <a href="mailto:hi@ayushtomar.in" className="text-lg">Contact now</a>
            </div>
        </div>
     );
}

export default ShortcutsPage;