import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    {/* Column-1 */}
                    <div className="col-md-3 col-sm-6 text-warning">
                        <h4>Contuct With Us</h4>
                        <ul className="list-unstyled">
                            <li>Call: 01777777777</li>
                            <li>Phone: +9324534532</li>
                            <li>Email: EasyLearning@gmail.com</li>
                        </ul>
                    </div>
                    {/* Column-2 */}
                    <div className="col-md-3 col-sm-6 text-warning">
                        <h4>Contuct With Us</h4>
                        <ul className="list-unstyled">
                            <li>Call: 01777777777</li>
                            <li>Phone: +9324534532</li>
                            <li>Email: EasyLearning@gmail.com</li>
                        </ul>
                    </div>
                    {/* Column-3 */}
                    <div className="col-md-3 col-sm-6 text-warning">
                        <h4>Contuct With Us</h4>
                        <ul className="list-unstyled">
                            <li>Call: 01777777777</li>
                            <li>Phone: +9324534532</li>
                            <li>Email: EasyLearning@gmail.com</li>
                        </ul>
                    </div>
                    {/* Column-4 */}
                    <div className="col-md-3 col-sm-6 text-warning">
                        <h4>Contuct With Us</h4>
                        <ul className="list-unstyled">
                            <li>Call: 01777777777</li>
                            <li>Phone: +9324534532</li>
                            <li>Email: EasyLearning@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;