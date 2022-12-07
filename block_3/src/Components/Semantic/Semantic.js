import React from 'react';
import {Link} from "react-router-dom";

const Semantic = () => {
    return (
        <div>
            <Link to="/" className='nav-link'>{'<- '} &nbsp; Main</Link>
            <main>
                Some main TAG
                <section>
                    <h2> Section TAG</h2>
                </section>
                <article>
                    <h2>Article TAG example</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.</p>
                </article>
            </main>
        </div>
    );
};

export default Semantic;