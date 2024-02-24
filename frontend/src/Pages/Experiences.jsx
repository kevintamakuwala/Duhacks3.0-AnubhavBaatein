import { Custom_Pagination } from '@/custom_components/Custom_Pagination'
import ExperiencesList from '@/custom_components/ExperiencesList'
import React, { useState } from 'react'

function Experiences() {

    const [page, setPage] = useState(1);
    const [experiences, setExperiences] = useState([
        {
          "title": "UI/UX Designer",
          "location": "New York",
          "company": "Apple",
          "salary": "$130,000"
        },
        {
          "title": "Software Engineer",
          "location": "San Francisco",
          "company": "Microsoft",
          "salary": "$160,000"
        },
        {
          "title": "Data Scientist",
          "location": "Chicago",
          "company": "IBM",
          "salary": "$140,000"
        },
        {
          "title": "Product Manager",
          "location": "Seattle",
          "company": "Netflix",
          "salary": "$170,000"
        },
        {
          "title": "DevOps Engineer",
          "location": "Austin",
          "company": "Twitter",
          "salary": "$145,000"
        },
        {
          "title": "Machine Learning Engineer",
          "location": "Boston",
          "company": "Uber",
          "salary": "$155,000"
        },
        {
          "title": "Cybersecurity Analyst",
          "location": "Washington D.C.",
          "company": "LinkedIn",
          "salary": "$135,000"
        },
        {
          "title": "Mobile App Developer",
          "location": "Los Angeles",
          "company": "Airbnb",
          "salary": "$150,000"
        },
        {
          "title": "Full Stack Developer",
          "location": "Denver",
          "company": "Google",
          "salary": "$165,000"
        },
        {
            "title": "UI/UX Designer",
            "location": "New York",
            "company": "Apple",
            "salary": "$130,000"
        },
        {
            "title": "Machine Learning Engineer",
            "location": "Boston",
            "company": "Uber",
            "salary": "$155,000"
        },
        {
            "title": "Product Manager",
            "location": "Seattle",
            "company": "Netflix",
            "salary": "$170,000"
          },
    ]);


  return (
    <div className="container mx-auto px-4 py-8">
  <h1 className="text-5xl font-semibold mb-8 text-center text-gray-800">Interview Experiences</h1>
  <div className="gap-6">
    <div>
        <ExperiencesList experiences={experiences} setExperiences={setExperiences} />
    </div>
    <div className="mt-5">
      <Custom_Pagination current_page={page} setPage={setPage} total_pages={(experiences?.length)/12}/>
    </div>
  </div>
</div>

  )
}

export default Experiences
