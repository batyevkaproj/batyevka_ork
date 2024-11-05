"use client";

import Script from 'next/script';

const BinotelScripts = () => {
  return (
    <>
      <Script
        id="binotel-chat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, w, s) {
              var widgetHash = '5MTQTWW9PZ2zUvrsJdjU',
              bch = d.createElement(s);
              bch.type = 'text/javascript';
              bch.async = true;
              bch.src = '//widgets.binotel.com/chat/widgets/' + widgetHash + '.js';
              var sn = d.getElementsByTagName(s)[0];
              sn.parentNode.insertBefore(bch, sn);
            })(document, window, 'script');
          `
        }}
      />
      <Script
        id="binotel-getcall"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, w, s) {
              var widgetHash = 'b6mp5v4e5i6yxaozc0fs',
              gcw = d.createElement(s);
              gcw.type = 'text/javascript';
              gcw.async = true;
              gcw.src = '//widgets.binotel.com/getcall/widgets/'+ widgetHash +'.js';
              var sn = d.getElementsByTagName(s)[0];
              sn.parentNode.insertBefore(gcw, sn);
            })(document, window, 'script');
          `
        }}
      />
    </>
  );
};

export default BinotelScripts;