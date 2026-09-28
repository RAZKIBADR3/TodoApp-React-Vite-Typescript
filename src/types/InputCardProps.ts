import type { RefObject } from "react";

export type InputCardProps = {
    title: string,
    ref: RefObject<HTMLInputElement | null>
};