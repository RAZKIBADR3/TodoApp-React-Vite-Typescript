import type { Dispatch, SetStateAction } from "react";
import type { Post } from "./Post";

export type DataCardProps = {
    data: Post[],
    setData: Dispatch<SetStateAction<Post[]>>
};