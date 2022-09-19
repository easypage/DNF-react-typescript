import React from 'react';
import footerLogo from './../asset/images/footer.png';
function Footer() {
  return (
    <div className="flex justify-center mt-6 ">
      <a href="http://developers.neople.co.kr" target="_blank">
        <img src={footerLogo} alt="Neople 오픈 API" />
      </a>
    </div>
  );
}
export default Footer;
