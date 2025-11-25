export interface cardParts { 
    title: string;
    description: string;
    language: string;
    imageUrl: string;
}

function ProjectCard(title: string, description: string, language: string, imageUrl: string, id: string) {
    return (
        <div className="border w-[60%]" key={id}>
            <p>{title}</p>  {/* Fix the auto-sizing on this; it should look good no matter the viewport */}
            <p className="">{description}</p>
            <p>{language}</p>
            <img src={imageUrl} className="h-[50%] w-[50%]" />
            
        </div>
    );
}

export default ProjectCard;