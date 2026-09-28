import type { RefObject } from "react";
import type { DataCardProps } from "../../Home/types/DataCardProps";
import type { Post } from "../../Home/types/Post";
import PostCard from "./PostCard";

function PostsCard({data, setData}: DataCardProps) {

    const deletePost = (post: Post) => {
        console.log(data, post);
        setData(data.filter(p => p !== post))
    }

    const editPost = (post: Post) => {
        setData(  
            data.map((p) => p == post ? {...p, editOpen:true } : p)
        );
    }

    const updatePost = (post:Post, inputRef: RefObject<HTMLInputElement | null>) => {
        const value = inputRef.current?.value;
        if (!value) return;

        setData(  
            data.map((p) => p == post ? {content:value, editOpen:false } : p)
        );
    }

    return(
        <div className="py-2 px-10 flex flex-col w-full gap-3">
            {data.map((post, i) => <PostCard post={post} key={i} deletePost={deletePost} editPost={editPost} updatePost={updatePost}/>)}
        </div>
    )
}

export default PostsCard