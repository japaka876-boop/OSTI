import type { Metadata } from "next";
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
        {/* HubSpot CRM & Chatbot Tracker */}
        {/* <Script
          id="hs-script-loader"
          strategy="lazyOnload"
          src="//js.hs-scripts.com/TU_HUBSPOT_ID.js"
        /> */}
      </body>
    </html>
  );
}
