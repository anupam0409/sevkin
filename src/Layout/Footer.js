import React from 'react';


function Footer() {
  return (
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-box about-widget">
                <h2 className="widget-title">About us</h2>
                <p>
                  At Sevkin, our mission is to:<br />

                  - Serve the best sev and namkeen snacks in the industry<br />
                  - Preserve traditional Indian flavors and cooking techniques<br />
                  - Build a community of snack lovers who share our passion<br />

                  <b>Join the Sevkin Family</b><br />

                  Follow us on social media to stay updated on new products, promotions, and
                  behind-the-scenes<br />
                  peeks into our kitchen. Share your Sevkin moments with us, and let's snack together!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box get-in-touch">
                <h2 className="widget-title">Get in Touch</h2>
                <ul>
                  <li>Sailana, Madhya Pradesh, India, 457550</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box pages">
                <h2 className="widget-title">Pages</h2>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="services.html">Shop</a></li>
                  <li><a href="news.html">News</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box subscribe">
                <h2 className="widget-title">Subscribe</h2>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <form action="index.html">
                  <input type="email" placeholder="Email"/>
                    <button type="submit"><img className="icon-style"
                      src="/sevkin/assets/img/icon/paperplane.png" alt="paperplane"></img></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;  