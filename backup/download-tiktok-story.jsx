
import React from "react";

const DownloadTiktokStoryPage = () => {
  const guide = [
    {
      ways: "Open the TikTok / TikTok Lite app on your phone."
    },
    {
      ways: `Find the story you want to download.`
    },
    {
      ways: `Click the Share button and select Copy Link.`
    },
    {
      ways: `Paste the link you have copied from the TikTok app into the box provided on the TTSave page.`
    },
    {
      ways: `Click the button with the download icon.`
    },
    {
      ways: `Wait a moment and then click the Download Video button.
      `
    },
  ];
  const data = [
    {
      label: 'Format:',
      value: 'Mp4'
    },
    {
      label: 'Quality:',
      value: 'Original, Uncompressed'
    },
    {
      label: 'Download Speed:',
      value: 'Fast'
    },
    {
      label: 'Download Quota:',
      value: 'Unlimited'
    },
    {
      label: 'Cost:',
      value: 'Free'
    },
    {
      label: 'Services:',
      value: 'Status, Story & Short'
    },
  ];

  const devices = [
    "Smartphone (Android & iPhone)",
    "Laptop",
    "Tablet",
    "Ipad",
    "PC"
  ];
  const operate = [
    "Android",
    "iOS",
    "MacOS",
    "Linux",
    "Windows"
  ];

  return (
    <>
      <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto my-10">

        <div className="card my-1 shadow-xl">
          <div className="card-body text-justify">
            <div className="p-2">
              <h1 className="text-2xl font-bold text-purple-600 pb-4">GUIDE</h1>

              <ul className="p-4 card my-1 shadow-xl bg-gradient-to-t from-purple-600 to-pink-500">
                {guide.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-justify text-white py-2 font-semibold ">{item.ways}</li>

                  )
                })}
              </ul>
            </div>

            <div className="max-w-screen-xl mx-auto p-4">
              <div className=" shadow-md rounded my-6">
              <h1 className="text-2xl font-bold text-purple-600 pb-4">TikTok Story ttdownloader</h1>
                <table className="table-auto border border-gray-300">

                  <tbody className="flex flex-wrap">
                      
                    {data.map((item, index) => (
                      <React.Fragment key={index}>

                        <tr className="w-1/2 p-3 border bottom-gray-300 ">
                          <td className="w-full font-semibold">{item.label}</td>
                        </tr>
                        <tr className="w-1/2 p-3 border bottom-gray-300">
                          <td className="w-full">{item.value}</td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4">

              <h1 className="text-2xl font-bold text-purple-600 pb-4">Supported Devices</h1>
              <ul className="list-disc list-inside">
                {devices.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="py-2"><b>Note:</b> devices with iOS operating system are required to use Safari web browser application in order to download and save story video files (MP4) from TikTok.</p>
            </div>
            <div className="p-4">

              <h1 className="text-2xl font-bold text-purple-600 pb-4">Supported Operating Systems</h1>
              <ul className="list-disc list-inside">
                {operate.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="py-2"><b>Note:</b> You can use any web browser software that you like such as Google Chrome, Safari and Mozilla Firefox.</p>
            </div>








          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadTiktokStoryPage;
