/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import image from "./blog.jpg";
import Breadcrumbs from '../../components/Breadcrumbs';
const blogDetail = () => {
  return (
    <>
     <Breadcrumbs pageTitle="Blog Detail" urls={[
      {
        title:"Home",
        url: "/",
        isActive:false
      },
      {
        title:"Blog",
        url: "/blog",
        isActive:false

      },
      {
        title:"Blog Detail",
        url: "blog/blogdetail",
        isActive:true

      },
    ]}/>
    <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto">

        <div className="card my-1 shadow-xl">
          <div className="card-body">
            <h2 className="text-lg font-bold mb-4">Blog Tittle</h2>
            <h1>dfvdfv</h1>
            <Image src={image} alt="Your Image" class="" />
            <h3 className="text-sm font-bold">Log Files</h3>
            <p>Free Password Generator follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
            <h3 className="text-sm font-bold">Cookies and Web Beacons</h3>
            <p>Like any other website, Free Password Generator uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
            <h3 className="text-sm font-bold">Third-Party Privacy Policies</h3>
            <p>Free Password Generator's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
            
          </div>
        </div>
    </div>

    </>
  )
}

export default blogDetail