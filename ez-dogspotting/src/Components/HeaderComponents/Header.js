import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div classsName = "logo">
                LOGO
                </div>

                <nav>
                    <ul>
                        <li><a href = "#">Group1</a></li>
                        <li><a href = "#">Group2</a></li>
                        <li><a href = "#">Group3</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;