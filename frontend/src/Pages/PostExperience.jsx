import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"



const PostExperience = () => {


    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];


    return (
        <>

            <div className='w-full'>

            <h1 className="text-5xl font-semibold text-center mt-8 text-gray-800">Post Experiences</h1>
            <div className='w-[90%] sm:w-[65%] m-auto my-8 p-5 '>

                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="jobtitle">Job Title</Label>
                    <Input type="text" id="jobtitle" placeholder="Enter Job Title" />
                </div>

                <div className='flex flex-col sm:flex-row  sm:mt-4 mt-5'>

                    <div className="grid w-full items-center gap-3 mr-5">
                        <Label htmlFor="ctcpackage">CTC package</Label>
                        <Input type="text" id="ctcpackage" placeholder="Enter Compensation Package(In LPA)" />
                    </div>
                    <div className="grid items-center gap-3 sm:mt-0 mt-5">
                        <Label htmlFor="jobtype">Job Type</Label>
                        <Select id="jobtype">
                            <SelectTrigger className="w-[15rem]">
                                <SelectValue placeholder="Select a Job Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="internship">Internship</SelectItem>
                                    <SelectItem value="full time">Full time</SelectItem>
                                    <SelectItem value="trainee">Trainee</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                </div>
                <div className="grid w-full items-center gap-3 mt-5">
                    <Label htmlFor="location">Location</Label>
                    <Input type="text" id="location" placeholder="Enter Job Location" />
                </div>

                <div className="grid w-full items-center gap-3 mt-5">
                    <Label htmlFor="company">Company Name</Label>
                    <Input type="text" id="company" placeholder="Enter Company Name" />
                </div>

                <div className="grid w-full items-center gap-3 mt-5">
                    <Label htmlFor="industry">Industry</Label>
                    <Input type="text" id="industry" placeholder="Enter industry to which the job belongs (Engineering, Marketing, Sales)" />
                </div>

                <div className="grid max-w-2xl items-center gap-3 mt-5">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Type a detailed description of the interview/experience..." />
                </div>

                <div className='flex flex-col sm:flex-row'>

                    <div className="grid w-full items-center gap-3 mt-5">
                        <Label htmlFor="difficulty">Difficulty Level</Label>
                        <Select id="difficulty">
                            <SelectTrigger className="w-[15rem]">
                                <SelectValue placeholder="Select Difficulty Level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="easy">Easy</SelectItem>
                                    <SelectItem value="medium">Meadium</SelectItem>
                                    <SelectItem value="hard">Hard</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>


                    <div className="grid w-full items-center gap-3 mt-5">
                        <Label htmlFor="interviewmonth">Interview Month</Label>
                        <Select id="interviewmonth">
                            <SelectTrigger className="w-[15rem]">
                                <SelectValue placeholder="Select Interview Month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        months.map((ele, index) => {
                                            return <SelectItem key={index} value={ele} >{ele}</SelectItem>
                                        })
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid w-full items-center gap-3 mt-5">
                        <Label htmlFor="rounds">No. of Rounds</Label>
                        <Input type="number" id="rounds" placeholder="Enter No. of Interview Rounds" />
                    </div>
                </div>

                <div className='w-full flex justify-end mt-6'>
                    <Button className="w-40" type="button">Add Post</Button>
                </div>
            </div>
            </div>
        </>
    )
}

export default PostExperience