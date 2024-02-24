
const experience = [
    {
        title: "My SDE Interview Experience",
        company: "Google", tag: "SDE Interview",
        description: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id."
    }
]

const ViewExperience = () => {
    return (
        <>
            <div class="mx-auto max-w-7xl px-2 py-10 lg:px-0">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div class="w-full md:w-1/2">
                        <h2 class="text-3xl font-bold text-black">{experience[0].title}</h2>
                        <div className=" mt-2  flex flex-wrap">
                            <p className=" bg-green-500 font-bold py-2 px-2 rounded flex justify-center w-fit text-white">{experience[0].company}</p>
                            <p className="mt-2 mx-3 text-blue-500 ">{experience[0].tag}</p>
                        </div>
                        <p class="mt-2 text-gray-600">
                            {experience[0].description}
                        </p>
                    </div>
                    <div class="mt-10 w-full md:w-1/2 lg:mt-0">
                        <form class="flex lg:justify-center">
                            <div class="flex w-full max-w-md items-center space-x-2">
                                <div class="bg-blue-500 text-white p-6 rounded-lg">
                                    <h2 class="-2xl font-bold mb-4">Job Overview</h2>
                                    <p class="mb-2">CTC (INR): 12 LPA</p>
                                    <p class="mb-2">JOB POSTED: 14 Jun, 2021</p>
                                    <p class="mb-2">JOB EXPIRED ON: 14 Aug, 2021</p>
                                    <p class="mb-2">Job Location: Bengaluru, Karnataka</p>
                                    <p class="mb-2">JOB LEVEL: Internship</p>
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