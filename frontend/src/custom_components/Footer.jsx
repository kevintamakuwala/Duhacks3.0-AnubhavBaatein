import React from 'react';
import { IoIosMail } from "react-icons/io";

const Footer = () => (
  <footer className="bg-gray-800 text-white  flex flex-col justify-between items-center">
  <div className="container flex justify-between sm:flex-row flex-col mx-auto px-4 py-6">
    <div className="flex flex-col sm:justify-evenly ">
      <div className="text-xl  md:mb-0">
        <span className="font-bold">AnubhavBaatein</span> <span className="text-gray-400"></span>
      </div>
      
    
    <div className="mt-8">
      <ul className="flex flex-wrap flex-col text-md text-gray-400">
        <li className="mr-6 mb-4"><a href="#">About</a></li>
        <li className="mr-6 mb-4"><a href="#">Contact</a></li>
      </ul>
    </div>
    </div>

    <div className="text-sm flex flex-col space-y-2 text-gray-400 mt-8 sm:mt-14">
        <p className='flex justify-start items-center gap-1'><IoIosMail />prajapatiashish40567@gmail.com</p>
        <p className='flex justify-Start items-center gap-1'><IoIosMail />kevintamakuwala16@gmail.com</p>
        <p className='flex justify-start items-center gap-1'><IoIosMail />dhruvishavaghani0509@gmail.com</p>
        <p className='flex justify-start items-center gap-1'><IoIosMail />akshayvaghasiya3636@gmail.com</p>
      </div>
  </div>
  <p className='text-sm text-gray-400'>&copy; AnubhavBaatein - All rights reserved</p>
</footer>


);

export default Footer;
