import React from 'react';
import * as  cssStyle from './style.module.css';

type SectionProps = {
    children?: React.ReactNode
    id?: string,
    className?: string,
    style?: React.CSSProperties
    subContainerClassName?: string
}

const AcrylicDiv = ({children, id, className, style, subContainerClassName}: SectionProps) => {

    return (
        <div id={id} className={`${cssStyle.container} ${className ?? ''}`} style={style}>
            <div className={`${cssStyle.subContainer} ${subContainerClassName ?? ''}`}>
                {children}
            </div>
        </div>
    )
}

export default AcrylicDiv;