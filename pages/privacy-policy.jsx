/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

const PrivacyPolicy = () => {
  return (
    <>
    <Breadcrumbs pageTitle="Privacy Policy" urls={[
      {
        title:"Home",
        url: "/",
        isActive:false
      },
      {
        title:"Privacy Policy",
        url: "/privacy-policy",
        isActive:true

      }
    ]}/>
    <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto my-10">

        <div className="card my-1 shadow-xl">
          <div className="card-body text-justify">
            <h2 className="text-2xl font-bold mb-4 text-gray-600">Privacy Policy TT-Downloader</h2>
            <p>At ttdownloader.io is  accessible, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ttdownloader.io and how we use it.</p>
            <h3 className="text-md font-bold text-gray-600">Log Files</h3>
            <p>ttdownloader.io follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
            <h3 className="text-md font-bold text-gray-600">Cookies and Web Beacons</h3>
            <p>Like any other website, ttdownloader.io uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
            <h3 className="text-md font-bold text-gray-600">Third-Party Privacy Policies</h3>
            <p>ttdownloader.io's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
            <h3 className="text-md font-bold text-gray-600">Online Privacy Policy Only</h3>
            <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ttdownloader.io. This policy is not applicable to any information collected offline or via channels other than this website.</p>
            <h3 className="text-md font-bold text-gray-600">Consent</h3>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
          </div>
        </div>
    </div>

    </>
  )
}

export default PrivacyPolicy