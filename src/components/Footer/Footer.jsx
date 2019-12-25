import React from 'react';
import fb from '../../images/fb.png';

const Footer = (props) => {
   return ( 
      <div>
         <a href="https://www.instagram.com/basofibonacci/?hl=en" target="_blank"><img src="https://en.instagram-brand.com/wp-content/themes/ig-branding/prj-ig-branding/assets/images/ig-logo-black.svg" alt="insta"/></a>
         <a href="https://www.facebook.com/baso.fibonacci" target="_blank"><img src={fb} alt="fb" height="37" width="37"/></a>
      </div>
    );
}
 
export default Footer;