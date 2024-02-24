import { getExperiences } from '@/Services/ExperienceService';
import { Custom_Pagination } from '@/custom_components/Custom_Pagination'
import ExperiencesList from '@/custom_components/ExperiencesList'
import React, { useEffect, useState } from 'react'
function Experiences() {

  const [page, setPage] = useState(1);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getExperiences();
        setExperiences(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }

    };

    fetchData();
  }, []);


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-semibold mb-8 text-center text-gray-800">Interview Experiences</h1>
      <div className="gap-6">
        <div>
          <ExperiencesList experiences={experiences} setExperiences={setExperiences} />
        </div>
        <div className="mt-5">
          <Custom_Pagination current_page={page} setPage={setPage} total_pages={(experiences?.length) / 12} />
        </div>
      </div>
    </div>

  )
}

export default Experiences
