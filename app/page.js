// /* eslint-disable react/no-unescaped-entities */
// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import { MessageCircleCodeIcon, X } from 'lucide-react'
// import { SmallChatModel } from '@/components'

// export default function Home() {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }

//   return (
//     <div className='relative flex flex-col items-center justify-center bg-[#ffffff] px-4'>
//       <div className='container mx-auto flex items-center p-4 pl-6'>
//         <Image src='/Stateemblem.png' width={35} height={35} alt='Symbol' />
//         <div className='pl-4 text-xl font-bold text-black md:text-2xl'>
//           Government of Rajasthan <br />
//           Department of Technical Education
//         </div>
//       </div>
//       <header className='block w-full bg-[#1359a1] shadow'>
//         <div className='container mx-auto hidden items-center justify-between p-4 xl:flex'>
//           <nav className='space-x-12 text-sm md:text-base'>
//             <p className='text-white hover:text-gray-300'>About Us</p>
//             <p className='text-white hover:text-gray-300'>Admissions</p>
//             <p className='text-white hover:text-gray-300'>Students Corner</p>
//             <p className='text-white hover:text-gray-300'>Employee Corner</p>
//             <p className='text-white hover:text-gray-300'>Documents</p>
//             <p className='text-white hover:text-gray-300'>RTI</p>
//             <p className='text-white hover:text-gray-300'>Tenders & Auctions</p>
//             <p className='text-white hover:text-gray-300'>Roster</p>
//             <p className='text-white hover:text-gray-300'>Colleges</p>
//             <p className='text-white hover:text-gray-300'>NOC</p>
//             <a href='/' className='text-white hover:text-gray-300'>
//               Other Links
//             </a>
//           </nav>
//         </div>

//         <div className='space-x-3 p-4 text-center text-white xl:hidden'>
//           <a href='/' className='text-white hover:text-gray-300'>
//             About Us
//           </a>
//           <a href='/' className='text-white hover:text-gray-300'>
//             Admissions
//           </a>
//           <a href='/' className='text-white hover:text-gray-300'>
//             Colleges
//           </a>
//         </div>
//       </header>

//       <main className='flex-1 p-4 md:p-8'>
//         <div className='flex flex-col gap-2 md:flex-row'>
//           <div className='flex w-full max-w-xs flex-col items-center md:max-w-sm'>
//             <div className='h-48 w-48 bg-gray-200'>
//               <Image
//                 width={200}
//                 height={200}
//                 src='/image1.png'
//                 alt='Officer'
//                 className='rounded-md border-2 border-black object-fill'
//               />
//             </div>
//             <p className='mt-2 text-center text-xs font-bold md:text-sm'>
//               Hon'ble Chief Minister
//               <br />
//               Shri Bhajan Lal Sharma
//             </p>
//           </div>

//           <div className='flex w-full max-w-xs flex-col items-center md:max-w-sm'>
//             <div className='h-48 w-48 bg-gray-200'>
//               <Image
//                 width={200}
//                 height={200}
//                 src='/image2.jpeg'
//                 alt='Officer'
//                 className='rounded-md border-2 border-black object-fill'
//               />
//             </div>
//             <p className='mt-2 text-center text-xs font-bold md:text-sm'>
//               Hon'ble Dy. Chief Minister
//               <br />
//               & Minister of Technical Education
//               <br />
//               Dr. Prem Chand Bairwa
//             </p>
//           </div>

//           <div className='flex w-full max-w-xs flex-col items-center md:max-w-sm'>
//             <div className='h-48 w-48 bg-gray-200'>
//               <Image
//                 width={200}
//                 height={200}
//                 src='/image3.jpeg'
//                 alt='Officer'
//                 className='rounded-md border-2 border-black object-fill'
//               />
//             </div>
//             <p className='mt-2 text-center text-xs font-bold md:text-sm'>
//               Secretary, Higher & Tech. Education Dept.
//               <br />
//               Dr. Arushi Ajey Malik (IAS)
//             </p>
//           </div>

//           <div className='flex w-full max-w-xs flex-col items-center md:max-w-sm'>
//             <div className='h-48 w-48 bg-gray-200'>
//               <Image
//                 width={200}
//                 height={200}
//                 src='/image4.jpg'
//                 alt='Officer'
//                 className='rounded-md border-2 border-black object-fill'
//               />
//             </div>
//             <p className='mt-2 text-center text-xs font-bold md:text-sm'>
//               Director, Technical Education (Polytechnic)
//               <br />
//               Shri Anshu Kumar Sahgal
//             </p>
//           </div>
//         </div>

//         <div className='mt-8 w-full bg-[#f8f8f8] p-4 shadow'>
//           <h2 className='mb-4 text-xl font-bold md:text-2xl'>Latest News</h2>
//           <div className='relative overflow-hidden text-[#007bff]'>
//             <div className='news-rotate space-y-2 text-left'>
//               <p className='text-base md:text-lg'>
//                 New policy announced by the Govt.
//               </p>
//               <p className='text-base md:text-lg'>
//                 Infrastructure development project approved.
//               </p>
//               <p className='text-base md:text-lg'>
//                 New education scheme launched.
//               </p>
//               <p className='text-base md:text-lg'>
//                 Health initiative for rural areas started.
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>

//       <footer className='bg-[#323131] p-8 text-white'>
//         <div className='container mx-auto grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left'>
//           <div>
//             <h3 className='mb-2 text-lg font-bold'>Contact No. & Email:</h3>
//             <div className='text-sm'>
//               <p>Phone No.: 0291-2434395</p>
//               <p>Fax: 0291-2430398</p>
//               <p>Email: dte_raj@rajasthan.gov.in</p>
//               <p>Nodal Officer: Ajay Agarwal, ADTE</p>
//             </div>
//           </div>

//           <div>
//             <h3 className='mb-2 text-lg font-bold'>Directorate Address</h3>
//             <div className='text-sm'>
//               <p>W-6, Gaurav Path, Residency Road,</p>
//               <p>Jodhpur (Rajasthan) - 342032</p>
//               <p>Website visit count: 5</p>
//             </div>
//           </div>

//           <div>
//             <h3 className='mb-2 text-lg font-bold'>
//               Website Design & Updated by:
//             </h3>
//             <div className='text-sm'>
//               <p>Directorate of Technical Education, Jodhpur</p>
//               <p>
//                 Copyright ©2019 Directorate Of Technical Education, Rajasthan
//               </p>
//               <p>Last Updated: 9/11/2024, 10:28:47 AM</p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {!isModalOpen && (
//         <button
//           onClick={toggleModal}
//           className='fixed bottom-5 right-5 rounded-full border-2 border-purple-400 bg-purple-300 p-3 hover:cursor-pointer md:bottom-10 md:right-10'
//         >
//           <MessageCircleCodeIcon size={40} />
//         </button>
//       )}

//       {isModalOpen && (
//         <div className='fixed bottom-3 right-3 mb-3 flex h-[80vh] w-[90%] max-w-md items-center justify-center rounded-2xl shadow-md md:bottom-10 md:right-10 md:h-[70vh] md:w-[30%]'>
//           <button
//             onClick={toggleModal}
//             className='absolute right-2 top-3 hover:scale-110'
//           >
//             <X strokeWidth={3} />
//           </button>
//           <SmallChatModel />
//         </div>
//       )}
//     </div>
//   )
// }

/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircleCodeIcon, X } from 'lucide-react'
import { SmallChatModel } from '@/components'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className='relative flex flex-col items-center justify-center bg-[#ffffff] px-4'>
      <div className='container mx-auto flex items-center justify-center gap-x-2 p-4 pl-6 md:justify-start'>
        <Image src='/Stateemblem.png' width={35} height={35} alt='Symbol' />
        <div className='text-md font-bold text-black md:text-2xl'>
          Government of Rajasthan <br />
          Department of Technical Education
        </div>
      </div>
      <header className='block w-full bg-[#1359a1] shadow'>
        <div className='container mx-auto hidden items-center justify-between p-4 xl:flex'>
          <nav className='space-x-12 text-sm md:text-base'>
            <a href='/' className='text-white hover:text-gray-300'>
              About Us
            </a>
            <a href='/' className='text-white hover:text-gray-300'>
              Admissions
            </a>
            <a href='/' className='text-white hover:text-gray-300'>
              Students Corner
            </a>
            <a href='/' className='text-white hover:text-gray-300'>
              Employee Corner
            </a>
            <a href='/' className='text-white hover:text-gray-300'>
              Documents
            </a>
            <a href='/' className='text-white hover:text-gray-300'>
              RTI
            </a>
            <a href='/' className='text-white hover:text-gray-300'>
              Tenders & Auctions
            </a>
            <a href='/' className='text-white hover:text-gray-300'>
              Roster
            </a>
            <a href='/' className='text-white hover:text-gray-300'>
              Colleges
            </a>
            <a href='/admin/login' className='text-white hover:text-gray-300'>
              Admin
            </a>
            <a href='/' className='text-white hover:text-gray-300'>
              Other Links
            </a>
          </nav>
        </div>

        <div className='space-x-3 p-4 text-center text-white xl:hidden'>
          <a href='/' className='text-white hover:text-gray-300'>
            About Us
          </a>
          <a href='/' className='text-white hover:text-gray-300'>
            Admissions
          </a>
          <a href='/' className='text-white hover:text-gray-300'>
            Colleges
          </a>
        </div>
      </header>

      <main className='flex-1 p-4 md:p-8'>
        <div className='flex flex-col gap-2 md:flex-row'>
          {/* Chief Minister */}
          <div className='flex w-full max-w-xs flex-col items-center md:max-w-sm'>
            <div className='h-56 w-48'>
              <Image
                width={192}
                height={192}
                src='/image1.png'
                alt='Officer'
                className='h-full w-full rounded-md border-2 border-black object-cover'
              />
            </div>
            <p className='md:text-md mt-2 text-center text-sm font-bold'>
              Hon'ble Chief Minister
              <br />
              Shri Bhajan Lal Sharma
            </p>
          </div>

          {/* Dy. Chief Minister */}
          <div className='flex w-full max-w-xs flex-col items-center md:max-w-sm'>
            <div className='h-56 w-48'>
              <Image
                width={192}
                height={192}
                src='/image2.jpeg'
                alt='Officer'
                className='h-full w-full rounded-md border-2 border-black object-cover'
              />
            </div>
            <p className='md:text-md mt-2 text-center text-sm font-bold'>
              Hon'ble Dy. Chief Minister
              <br />
              & Minister of Technical Education
              <br />
              Dr. Prem Chand Bairwa
            </p>
          </div>

          {/* Secretary */}
          <div className='flex w-full max-w-xs flex-col items-center md:max-w-sm'>
            <div className='h-56 w-48'>
              <Image
                width={192}
                height={192}
                src='/image3.jpeg'
                alt='Officer'
                className='h-full w-full rounded-md border-2 border-black object-cover'
              />
            </div>
            <p className='md:text-md mt-2 text-center text-sm font-bold'>
              Secretary, Higher & Tech. Education Dept.
              <br />
              Dr. Arushi Ajey Malik (IAS)
            </p>
          </div>

          {/* Director */}
          <div className='flex w-full max-w-xs flex-col items-center md:max-w-sm'>
            <div className='h-56 w-48'>
              <Image
                width={192}
                height={192}
                src='/image4.jpg'
                alt='Officer'
                className='h-full w-full rounded-md border-2 border-black object-cover'
              />
            </div>
            <p className='md:text-md mt-2 text-center text-sm font-bold'>
              Director, Technical Education (Polytechnic)
              <br />
              Shri Anshu Kumar Sahgal
            </p>
          </div>
        </div>

        <div className='mt-8 w-full bg-[#f8f8f8] p-4 shadow'>
          <h2 className='mb-4 text-xl font-bold md:text-2xl'>Latest News</h2>
          <div className='relative overflow-hidden text-[#007bff]'>
            <div className='news-rotate space-y-2 text-left'>
              <p className='text-base md:text-lg'>
                New policy announced by the Govt.
              </p>
              <p className='text-base md:text-lg'>
                Infrastructure development project approved.
              </p>
              <p className='text-base md:text-lg'>
                New education scheme launched.
              </p>
              <p className='text-base md:text-lg'>
                Health initiative for rural areas started.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className='bg-[#323131] p-8 text-white'>
        <div className='container mx-auto grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left'>
          <div>
            <h3 className='mb-2 text-lg font-bold'>Contact No. & Email:</h3>
            <div className='text-sm'>
              <p>Phone No.: 0291-2434395</p>
              <p>Fax: 0291-2430398</p>
              <p>Email: dte_raj@rajasthan.gov.in</p>
              <p>Nodal Officer: Ajay Agarwal, ADTE</p>
            </div>
          </div>

          <div>
            <h3 className='mb-2 text-lg font-bold'>Directorate Address</h3>
            <div className='text-sm'>
              <p>W-6, Gaurav Path, Residency Road,</p>
              <p>Jodhpur (Rajasthan) - 342032</p>
              <p>Website visit count: 5</p>
            </div>
          </div>

          <div>
            <h3 className='mb-2 text-lg font-bold'>
              Website Design & Updated by:
            </h3>
            <div className='text-sm'>
              <p>Directorate of Technical Education, Jodhpur</p>
              <p>
                Copyright ©2019 Directorate Of Technical Education, Rajasthan
              </p>
              <p>Last Updated: 9/11/2024, 10:28:47 AM</p>
            </div>
          </div>
        </div>
      </footer>

      {!isModalOpen && (
        <button
          onClick={toggleModal}
          className='fixed bottom-5 right-5 rounded-full border-2 border-purple-400 bg-purple-300 p-3 hover:cursor-pointer md:bottom-10 md:right-10'
        >
          <MessageCircleCodeIcon size={40} />
        </button>
      )}

      {isModalOpen && (
        <div className='fixed bottom-3 right-3 mb-3 flex h-[80vh] w-[90%] max-w-md items-center justify-center rounded-2xl shadow-md md:bottom-10 md:right-10 md:h-[70vh] md:w-[30%]'>
          <button
            onClick={toggleModal}
            className='absolute right-2 top-3 hover:scale-110'
          >
            <X strokeWidth={3} />
          </button>
          <SmallChatModel />
        </div>
      )}
    </div>
  )
}
