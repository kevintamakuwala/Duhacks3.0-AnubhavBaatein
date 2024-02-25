import { getExperienceById } from "@/Services/ExperienceService";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ViewExperience = () => {

    const expid = useParams();

    const [experience, setExperience] = useState();

    useEffect(() => {

        const fetchData = async () => {

            try {
              const data = await getExperienceById(expid.id);
              setExperience(data);
            } catch (error) {
              console.error("Error fetching experiences:", error);
            }
          };

        fetchData();

    },[])

    return (
        <>
            <div class=" px-2 py-10">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div class="w-full md:w-1/2">
                        <h2 class="text-3xl font-bold text-black">{experience?.job?.title}</h2>
                        <div className=" mt-2  flex flex-wrap">
                            <p className=" bg-green-500 font-bold py-2 px-2 rounded flex justify-center w-fit text-white">{experience?.job?.company?.name}</p>
                            <p className="mt-2 mx-3 text-blue-500 ">{experience?.job?.type}</p>
                        </div>
                        <p class="mt-2 text-gray-600">
                            {experience?.description}
                        </p>
                    </div>
                    <div class="mt-10 w-full md:w-1/2 lg:mt-0">
                        <form class="flex lg:justify-center">
                            <div class="flex w-full max-w-md items-center space-x-2">
                                <div class="bg-slate-700 text-white p-6 rounded-lg">
                                    <h2 class="-2xl font-bold mb-4">Job Overview</h2>
                                    <p class="mb-2">CTC (INR): {experience?.job?.ctc} LPA</p>
                                    <p class="mb-2">Job Location: {experience?.job?.location}</p>
                                    <p class="mb-2">JOB LEVEL: {experience?.difficultyLevel}</p>
                                    <p class="mb-2">ROUND OF INTERVIEW : {experience?.rounds}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewExperience