import { useRef, type RefObject } from "react";
import type { Post } from "../../Home/types/Post";

type PostCardProps = {
  post: Post;
  deletePost: (post: Post) => void;
  editPost: (post: Post) => void;
  updatePost: (post:Post, inputRef: RefObject<HTMLInputElement | null>) => void;
};


function PostCard({post, deletePost, editPost, updatePost}: PostCardProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    return(
        <div className="w-full py-2 px-3 border rounded-md border-cyan-500 flex justify-between items-center">
            { post.editOpen
                ? <input defaultValue={post.content} ref={inputRef} className="rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 
                    placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-500 sm:text-sm/6" type="text"/>

                : <h1 className="capitalize text-black font-medium text-xl">{post.content}</h1>
            }

            <div className="flex gap-1">
                { post.editOpen 
                    ?   <i className="cursor-pointer bg-green-500 rounded-sm text-white p-1" onClick={() => updatePost(post, inputRef)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </i>

                    :   <i className="cursor-pointer bg-gray-700 rounded-sm text-white p-1" onClick={() => editPost(post)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </i>
                }

                <i className="cursor-pointer bg-red-700 rounded-sm text-white p-1" onClick={() => deletePost(post)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </i>
            </div>
        </div>
    )
}

export default PostCard