import React from 'react'

const StepsToFollow = () => {
    const ways = [
        {
            ways: "- play a video that you want to save to your mobile device, using the ttdownloader.io app"
        },
        {
            ways: `- tap "Share" (the arrow button on top of a chosen video), and then tap "Copy link`

        },
        {
            ways: `- go back to  ttdownloader.io service and paste the link in the text field on the page and tap on the "Save" button`
        },

    ]

    return (
        <>

            <div className="p-4">
                <h3 className="text-2xl font-bold text-purple-600 pb-4">STEPS TO BE FOLLOWED</h3>

                <ul className="p-4 card my-1 shadow-xl bg-gradient-to-t from-purple-600 to-pink-500">
                    {ways.map((item, index) => {
                        return (
                            <li key={index} className="text-lg text-justify text-white py-2 font-semibold ">{item.ways}</li>

                        )
                    })}
                </ul>
            </div>

        </>
    )
}

export default StepsToFollow