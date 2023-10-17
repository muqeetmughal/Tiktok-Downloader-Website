import React from 'react'
import Link from 'next/link';

const Breadcrumbs = (props) => {
    const{pageTitle,urls}=props
  return (
   <>
    <div className="bg-gradient-to-b to-purple-600 from-pink-500 p-5">
      <div className="container mx-auto p-4 flex justify-between sm:max-w-screen-sm sm:mx-auto">
        <h1 className="text-3xl font-semibold text-white mt-0 mb-2">{pageTitle}</h1>
        <nav className="text-white font-semibold text-white">
          <ol className="list-none p-0 inline-flex">

          {
            urls.map((breadcrumb,index)=>{
                return(
                    <>
                    <li key={index} className="flex items-center ">
              <Link href={breadcrumb.url}>{breadcrumb.title}</Link>
              {
                !breadcrumb.isActive && (
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
                )
              }
              
            </li>
                    </>
                )
            })
          }
            
          </ol>
        </nav>
      </div>
    </div>
   </>
  )
}

export default Breadcrumbs