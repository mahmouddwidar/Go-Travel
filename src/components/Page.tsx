import { ReactElement } from "react";

interface PageProps {
    children: ReactElement[],
}


export default function Page(props: PageProps) {
    return <div>{ props.children }</div>;
}
