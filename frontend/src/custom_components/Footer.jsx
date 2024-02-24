import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="text-lg mb-4 md:mb-0">
        <span className="font-bold">Jobpilot</span> <span className="text-gray-400">- Job Portal</span>
      </div>
      <div className="text-sm text-gray-400">
        <p>Call now: (319) 555-0115</p>
        <p>6391 Elgin St. Celina, Delaware 10299, New York, United States of America</p>
        <p>&copy; 2021 Jobpilot - All rights reserved</p>
      </div>
    </div>
    <div className="mt-8">
      <ul className="flex flex-wrap text-sm text-gray-400">
        <li className="mr-6 mb-4"><a href="#">About</a></li>
        <li className="mr-6 mb-4"><a href="#">Contact</a></li>
        <li className="mr-6 mb-4"><a href="#">Pricing</a></li>
        <li className="mr-6 mb-4"><a href="#">Blog</a></li>
        <li className="mr-6 mb-4"><a href="#">Candidate</a></li>
        <li className="mr-6 mb-4"><a href="#">Browse Jobs</a></li>
        <li className="mr-6 mb-4"><a href="#">Browse Employers</a></li>
        <li className="mr-6 mb-4"><a href="#">Candidate Dashboard</a></li>
        <li className="mr-6 mb-4"><a href="#">Saved Jobs</a></li>
        <li className="mr-6 mb-4"><a href="#">Employers</a></li>
        <li className="mr-6 mb-4"><a href="#">Post a Job</a></li>
        <li className="mr-6 mb-4"><a href="#">Browse Candidates</a></li>
        <li className="mr-6 mb-4"><a href="#">Employers Dashboard</a></li>
        <li className="mr-6 mb-4"><a href="#">Applications</a></li>
        <li className="mr-6 mb-4"><a href="#">Support</a></li>
        <li className="mr-6 mb-4"><a href="#">Faqs</a></li>
        <li className="mr-6 mb-4"><a href="#">Privacy Policy</a></li>
        <li className="mr-6 mb-4"><a href="#">Terms & Conditions</a></li>
      </ul>
    </div>
  </div>
</footer>


);

export default Footer;