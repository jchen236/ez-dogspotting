import React, { Component } from 'react';
import '../../Assets/css/default.min.css';
class Header extends Component {
    render() {
        return (
            <header>
                <div className = "logo">
                LOGO
                </div>

                <nav>
                    <ul>
                        <li classname = "first"><a href = "#">Group1</a></li>
                        <li><a href = "#">Group2</a></li>
                        <li className = "last"><a href = "#">Group3</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;