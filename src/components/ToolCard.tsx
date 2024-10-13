import Image from "next/image";

const ToolCard = ({
    title,
    imgsrc, 
    href
} : {
    title:string;
    imgsrc: string;
    href: string;
}) => {
    return ( 
        <div className="border border-[#195CC8] flex flex-col gap-4 justify-center items-center text-center p-14 px-16 w-fit rounded-2xl bg-[#E8F0FC]">
            <Image
                src={imgsrc}
                alt={title}
                width={80}
                height={80}
            />
            <h3>{title}</h3>
        </div>
     );
}
 
export default ToolCard;