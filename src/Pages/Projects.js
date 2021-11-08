import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project (){
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error)
    }, []);

    if(!projectData) return <div>Loading...</div>
    return(
        <main className="min-h-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my project page!</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a
                                href={project.link} 
                                alt={project.title} 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                    {project.title}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-s space-x-4">
                            <span>
                                <strong className="font-bold ">Finished on: </strong>
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Place: </strong>
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type:</strong>{" "}
                                {project.projectType}
                            </span>
                            <p
                                className="my-6 text-lg text-gray-700 leading-relaxed"
                            >
                                {project.description}
                            </p>
                            <a 
                                href={project.link} 
                                rel="noopener noreferrer" 
                                target="_blank"
                                className="text-red-500 font-bold hover:underline hover:text-red-400"
                            >
                                View the Project {" "}
                                <span role="img" aria-label="right-pointer">
                                    👉
                                </span>
                            </a>
                        </div>
                    </article>
                          
                    ))}
             
                </section>
            </section>
        </main>
    )
}