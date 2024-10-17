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
        <a className="w-36 min-h-36 p-5 bg-white flex flex-col gap-4 rounded-lg shadow-lg">
                <Image
                    className="m-auto"
                    src={imgsrc}
                    alt={title}
                    width="80"
                    height="80"
                />
                <p className="text-center">{title}</p>
        </a> 
        // <a href={href} className="border border-[#195CC8] flex flex-col gap-4 justify-center items-center text-center p-14 px-16 w-fit rounded-2xl bg-[#E8F0FC]">
        //         <Image
        //             src={imgsrc}
        //             alt={title}
        //             width={80}
        //             height={80}
        //         />
        //         <h3>{title}</h3>
        // </a>
     );
}
 
export default ToolCard;