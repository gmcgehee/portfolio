import React from "react";

export interface cardParts { 
    title: string;
    description: string;
    imageUrl: string;
}

function ProjectCard({ title, description, imageUrl }: cardParts) {
    return (
        <div className="border p-[2vh] w-[35vw] h-[60vh] rounded-s">
            <div><h1 className="">{title}</h1>  {/* Fix the auto-sizing on this; it should look good no matter viewport */}
            <p className="">{description}</p>
            <img src={imageUrl} className="h-[50%] w-[50%]" />
            </div>
        </div>
    );
}

export default ProjectCard;