import React, { useState } from 'react'

const Accordian = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    const accordionData = [
        {
            title: "Do I have to pay to download TikTok video?",
            content: "No, you don't have to pay for anything, because our Tik Tok download service is always free! We support all modern browsers such as Google Chrome, Mozilla Firefox, Safari, Microsoft Edge etc..",
        },
        {
            title: "Do I need to install extensions to use TikTok video downloader?",
            content: "No. To save tiktok and remove TikTok watermark online, you just need a link. Paste it into the input field and select the appropriate format for conversion. Our TikTok watermark remover app will do the rest.",
        },
        {
            title: "Where are TikTok videos saved after downloading?",
            content: "When you save from TikTok without trademark, files are usually saved to your default location. In your browser settings, you can change and manually select the destination folder for your files.",
        },
        {
            title: "Do I need to have a ttdownloader.io account to download TikTok video?",
            content: `No, you do not need to have a ttdownloader.io account. You can launch download TikTok no watermark process when you have a link to it, just paste it into the input field at the top of the page and click "Download". Our TikTok download service will remove watermark from TikTok and the video will be ready to use in a few seconds.`,
        },
    ];
    return (
        <>

            <div className="max-w-full mx-auto p-2 py-5">
            <h2 className="text-2xl font-bold text-gray-600 pb-4">FAQs</h2>
                {accordionData.map((item, index) => (
                    <div key={index} className="mb-4">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full p-4 text-left bg-gray-200 hover:bg-gray-300 text-md font-semibold flex justify-between"
                        >
                            {item.title}
                            <span className={openIndex === index ? 'transform rotate-180' : ''}>&#9660;</span>
                        </button>
                        {openIndex === index && (
                            <div className="p-4 border-l border-r border-b">{item.content}</div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Accordian