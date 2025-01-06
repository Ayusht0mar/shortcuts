import DevelopmentShortcuts from "@/components/DevelopmentShortcuts";
import Header from "@/components/Header";

const DevelopmentPage = () => {
    return ( 
        <div>
            <div className="bg-[#3f75ff] mb-32">
                <Header/>
            </div>
            <DevelopmentShortcuts/>
        </div>
     );
}
 
export default DevelopmentPage;