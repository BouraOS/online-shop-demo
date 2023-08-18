import "./footer.css"
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
	    <div className="container">		
            <div className="row text-center center">						
                <div className="col-lg-12 col-sm-12 col-xs-12">
                    <div className="footer_menu">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/products">All product</NavLink></li>
                            <li><NavLink to="/">Contact</NavLink></li>
                        </ul>
                    </div>						
                    <div className="footer_copyright">
                        <p>© 2021 Sai. All Rights Reserved.</p>
                    </div>	
                    <div className="footer_profile">
                        <ul>
                            <li><a href="!#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="!#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="!#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="!#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                        </ul>
                    </div>						
                </div>						
            </div>				
	    </div>
    </div>
  )
}
