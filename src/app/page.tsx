// pages/index.tsx

import React from 'react';
import { addWebsite, getWebsite } from '@/actions/website-action'; // Import your getWebsite function
import WebsiteDisplay from '@/components/WebsiteDisplay'; // Import your WebsiteDisplay component
import BusinessNavbar from '@/components/BusinessNavbar';


export default async function Home() {
  const websites = await getWebsite();
  // await addWebsite();

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <BusinessNavbar />
      {/* <h1 className="text-3xl my-3">Start Here!</h1> */}
      {/* <span>Treasure Keepsakes</span> */}
      
      {/* Use the WebsiteDisplay component to render the website data */}
      {/* <WebsiteDisplay websites={websites} /> */}

      {/* Other components or UI elements */}
    </div>
  );
}
