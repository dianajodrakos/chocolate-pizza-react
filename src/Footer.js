import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
          <footer>
            <div className="footer-logo">
              <span className="footer-line"></span>
              <img src="small-logo.png" width="30px" height="30px" alt="small logo" />
              <span className="footer-line"></span>
            </div>
            <p>Delicious © 2013 • All Rights Reserved.</p>
            <p>Proudly published with Ghost.</p>
        </footer>
        );
    }
}
