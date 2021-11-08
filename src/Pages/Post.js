import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post (){
    const [postData, setPost] = useState(null);

    useEffect(()=>{
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                author,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);
    
    if(!postData) return<div>Loading...</div>
    return (
        <main className="min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Blog Post Page</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my page of blog posts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index)=>( 
                        <article>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <span 
                                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-800"
                                    key={index}
                                >
                                    <img 
                                        src={post.mainImage.asset.url}
                                        alt={post.mainImage.alt}
                                        className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    <span className="block relative h-full flex justify-end item-end pr-4 pb-4">
                                       <span
                                            className="text-lg flex flex-col font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded"
                                       >
                                       <h3 
                                        >
                                            {post.title}
                                        </h3>
                                        <h3
                                        >
                                            {post.title}
                                        </h3>
                                       </span>

                                    </span>
                                </span>
                            </Link>
                        </article>
                    )) }
                </div>
            </section>
        </main>
    )
}