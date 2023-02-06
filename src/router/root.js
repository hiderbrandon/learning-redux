import { Outlet, Link } from "react-router-dom";


export default function Root() {
    return (
    <>
    <div id="sidebar">
        <nav>
            <ul>
                <li>
                    <Link to={`/hider`}>Hider's Project</Link>
                </li>
                <li>
                    <Link to={`/matheo`}>Matheo's project</Link>
                </li>
                <li>
                    <Link to={`/javier`}>javiers's project</Link>
                </li>
            </ul>
        </nav>
    </div>
    </>
    );
}