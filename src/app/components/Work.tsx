
interface WorkProps {
    title: string,
    imageURL: string,
    type: string
}

export default function Work({title, imageURL, type}: WorkProps) {

    // const bg_image: string = "bg-[url(" + imageURL + ")]";

    // const background: string = "bg-[url(" + imageURL + ")]";
    
    return (
        <a className={`${type} relative h-64 w-[300px] bg-cover bg-center hover:rounded-2xl duration-500`} style={{backgroundImage: `url(${imageURL})`}}>
            <div className="title-container hover:bg-white hover:bg-opacity-50 inset-0 absolute duration-500 flex justify-center items-center">
                <p className="title opacity-100 hidden">{title}</p>
            </div>
        </a>
    )
    
}