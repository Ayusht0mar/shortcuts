import Image from "next/image";

const Header = () => {
    return ( 
        <header className="py-6 px-6">
          <div className="bg-white rounded-full py-4 px-8">
            <div className="flex justify-between ">
                    <Image
                      src="/logo.svg"
                      alt="Logo"
                      width={48}
                      height={48}
                      />
                      <button>Sponsor</button>
            </div>
          </div>
        </header>
     );
}
 
export default Header;