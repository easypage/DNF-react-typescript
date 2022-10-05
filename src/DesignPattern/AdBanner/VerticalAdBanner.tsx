import React from 'react';
import '../../css/adBanner.css';

function VerticalAdBanner() {
  return (
    <div className="hidden xl:block">
      <a href="https://github.com/easypage/DNF-react-typescript" target="_blank" className="adBanner w-VerticalBanner h-VerticalBanner absolute right-VerticalAdBannerRight top-10"></a>
    </div>
  );
}

export default VerticalAdBanner;
