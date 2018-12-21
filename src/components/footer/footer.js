import React, { Component } from 'react';
import './footer.css';
import { AuthorIntroduction } from '../../styled-components/itsame-nam/itsame-nam';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <AuthorIntroduction />
                <div className="copyright">NAM LE &#169; 2018</div>
            </div>
        )
    }
}

export default Footer;