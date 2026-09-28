import { useState } from "react";
import FormCard from "./FormCard";
import PostsCard from "./PostsCard";
import type { Post } from "../../Home/types/Post";

export default function Todos(){
    const [data, setData] = useState<Post[]>([]);

    // const appUrl = import.meta.env.VITE_APP_URL;
  return (
    <>
        <div className="Home min-h-screen lg:w-2/3 sm:w-3/4 mx-auto flex flex-col items-center justify-baseline mt-4 p-4 gap-4" id="todos">
            <FormCard setData={setData} data={data} />
            <PostsCard setData={setData} data={data} />
        </div>

        {/* <div>app url : {appUrl}</div> */}
    </>
  )
}