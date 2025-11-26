export interface cardParts { 
    title: string;
    description: string;
    language: string;
    imageUrl: string;
}



function ProjectCard(title: string, description: string, language: string, imageUrl: string, id: string) {
    return (
        <div className="w-[60%] h-[100%] m-auto bg-[#F4F3EE] drop-shadow-lg/30 rounded-md grid grid-col p-[2%]" key={id}>
            <h2 className="text-lg">{title} ({language})</h2>
            <p className="text-xs">{description}</p>
            {/* <p className="text-xs">{language}</p> */}
            <img src={imageUrl} className="h-[50%] w-[50%]" />
            
        </div>
    );
}

export default ProjectCard;