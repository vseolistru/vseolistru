import React from 'react';

const Fonts = () => {
    return (
        <div>
            <h1>Типы шрифтов</h1>
            <ul type="square" className="fontlist">
                <li>EOT</li>
                <li>TTF</li>
                <li>OTF</li>
                <li>SVG</li>
                <li>WOFF</li>
                <li>WOFF2</li>
            </ul>
            <p className="simple">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="complex">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ol type="I">
                <li>EOT</li>
                <li>TTF</li>
                <li>OTF</li>
                <li>SVG</li>
                <li>WOFF</li>
                <li>WOFF2</li>
            </ol>
        </div>
    );
};

export default Fonts;