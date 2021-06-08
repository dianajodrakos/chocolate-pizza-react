import React from 'react';

class ButtonList extends React.Component {
    render() {
        return (
            <div className="sm-logos">
                <ul className="sm-logos-list">
                    <li><img src="fb-icon.png" alt="facebook icon" width="18px" height="18px" /></li>
                    <li><img src="twit-icon.png" alt="twitter icon" width="18px" height="18px" /></li>
                    <li><img src="gp-icon.png" alt="google+ icon" width="18px" height="18px" /></li>
                    <li><img src="insta-icon.png" alt="instagram icon" width="18px" height="18px" /></li>
                    <li><img src="flic-icon.png" alt="flic icon" width="18px" height="18px" /></li>
                    <li><img src="pint-icon.png" alt="pinterest icon" width="18px" height="18px" /></li>
                </ul>
                <ul className="sm-logos-list">
                    <li><img src="rss-icon.png" alt="rss feed icon" width="18px" height="18px" /></li>
                    <li><img src="mail-icon.png" alt="email icon" width="18px" height="18px" /></li>
                </ul>
            </div>
        )
    }
}

export class Header extends React.Component {
    render() {
        return (
        <header className="logo-place">
            <div className="logo-container-container">
                {/* <img src="logo.png" alt="blog logo of a fork and spoon" width="35px" height="35px" /> */}
                <div className="logo-container">
                    <h1>Delicious</h1>
                    <h3>The Best Food Blog On The Web</h3>
                </div>
            </div>

            <ButtonList />

        </header>
        );
    }
}