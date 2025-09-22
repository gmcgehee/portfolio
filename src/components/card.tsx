import React from "react";

interface cardParts {
    title: string;
    description: string;
    imageUrl: string;
}

export default function ProjectCard({ title, description, imageUrl }: cardParts) {
    return (
        <div className="flex flex-col items-center justify-center text-center p-[20px] border rounded-[10px] bg-gray-800 ml-[1vh] mr-[1vh] mb-[1vh]">
            <h1 className="text-2xl text-center min-h-[10%] mt-auto mb-auto pb-[10px]">{title}</h1>
            <p className="text-xl p-[5px]">{description}</p>
            <img src={imageUrl} className="mr-[2vh] ml-[2vh] w-[100%]" />
        </div>
    );
}