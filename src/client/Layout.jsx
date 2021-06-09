import React from 'react';
// styles
import './styles/Layout.css';

const Layout = ( props ) => {
    return (
        <div className="Layout">
            {props.children}
        </div>
    )
}

export default Layout;