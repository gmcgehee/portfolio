export interface cardParts { 
    title: string;
    description: string;
    language: string;
    imageUrl: string;
}



const ProjectCard = (title: string, description: string, language: string, imageUrl: string, id: string, url: string) => {

   // url = url === null ? "https://github.com" : url


    return (
        <div className="w-[60%] h-[100%] m-auto bg-(--card-bg) text-(--card-text) drop-shadow-lg/30 rounded-md grid grid-col gap-[1%] p-[2%] animate-(--animate-sink) hover:animate-(--animate-rise) mt-0 mb-0" key={id} onClick={ () => {window.open(url, '_blank')!.focus()}}>
            <h2 className="text-lg">{title} ({language})</h2>
            <p className="text-xs">{description}</p>
            <img src={imageUrl} className="m-auto mb-[0] mt-[2%] w-[10rem] h-[10rem]" />

        <div className="text-center mb-[2%]" id={id} onClick={ () => {window.open(url, '_blank')!.focus()}}>
            Check it out!
        </div>
            
        </div>
    );
}

export default ProjectCard;