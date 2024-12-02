import Image from "next/image";

const Header = () => {
    return ( 
        <header className="p-4 md:p-6">
          <div className="bg-white rounded-full py-2 md:py-4 px-4 md:px-8">
            <div className="flex justify-between ">
                    <Image
                      src="/logo.svg"
                      alt="Logo"
                      width={48}
                      height={48}
                      />
                      <button className="bg-[#3f75ff] p-2 px-4 h-fit my-auto rounded-full text-white"><p>Sponsor</p></button>
            </div>
          </div>
        </header>
     );
}
 
export default Header;