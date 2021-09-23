import React, {ReactNode, ReactNodeArray} from "react";

import HeaderBlock from "organisms/header/auth";
import Sidebar from "organisms/sidebar";

interface IProps {
    content: ReactNodeArray | ReactNode,
    classes?: string,
    id?: string,
    isHomePage?: boolean,
    sidebar?: ReactNodeArray | ReactNode,
    bottom?: ReactNodeArray | ReactNode,
    title?: string,
    currentPath?: string
}

export default function PageTemplate(props: IProps) {
    return <div className='internal-page page-body-wrapper'>
        <HeaderBlock/>
        <div className='content-wrapper'>
            <Sidebar/>
            <main className='main-content'>
                <div className='content'>
                    {props.content}
                </div>
            </main>
        </div>
    </div>
}