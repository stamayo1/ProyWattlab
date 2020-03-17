import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="navbar fixed-buttom navbar-dark bg-dark" style={{ backgroundColor: 'black', color: 'white'}}>
                <p>&copy; {(new Date().getFullYear())} wattlab, Inc.</p>
            </footer>
        );
    }
}

export default Footer;