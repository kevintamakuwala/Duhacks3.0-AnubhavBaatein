import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createExperience } from "@/Services/ExperienceService";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { createCompany } from "@/Services/CompanyService";
import { createJob } from "@/Services/JobService";

const experienceFormSchema = z.object({
  title: z.string(),
  ctc: z.string(),
  type: z.string(),
  location: z.string(),
  company: z.string(),
  industry: z.string(),
  description: z.string(),
  difficulty: z.string(),
  month: z.string(),
  rounds: z.string(),
  keywords : z.string(),
  categories : z.string()
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const PostExperience = () => {

  // const {id} = localStorage.getItem("id");
  const id = "124";

  const form = useForm({
    resolver: zodResolver(experienceFormSchema),
    defaultValues: {
      title: "",
      ctc: "",
      type: "",
      location: "",
      company: "",
      industry: "",
      description: "",
      difficulty: "",
      month: "",
      rounds: "",
      keywords: "",
      categories : ""
    },
  });

  async function onSubmit(data) {

    const keyword = data?.keywords?.split(",")

    data.keywords = keyword;

    const category = data?.categories?.split(",")

    data.categories = category;


    if (data) {

      const res = await createCompany({name : data?.company}).then((res)=>{
        console.log("Company Creation : ");
        console.log(res);
        return res.data;
      });

      data.companyId = res;

      const jobData = {
        title : data.title,
        ctc : data.ctc,
        type : data.type,
        location : data.location,
        industry : data.industry,
        companyId : data.companyId
      }

      const job = await createJob(jobData).then((res) => {
        console.log("Job Creation");
        console.log(res);
        return res.data;
      })

      data.jobId = job;

      data.userId = id;

      console.log(data);

      const response = await createExperience(data).then((response) => {
        console.log(response);
        setUser(response);
        form.reset();
      });
    }
  }

  // create form fields according to schema

  const fields = Object.keys(experienceFormSchema.shape).map((key) => {
    let title = key.charAt(0).toUpperCase() + key.slice(1);
    let placeholder = "Enter " + key + " here...";

    // for selecting job type and difficulty level we use Select component
    if (key === "type") {
      return (
        <FormField
          control={form.control}
              name={key}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{title}</FormLabel>
              <FormControl>
                <Select id={key}>
                  <SelectTrigger>
                    <SelectValue placeholder={"Select " + title} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="full time">Full time</SelectItem>
                      <SelectItem value="trainee">Trainee</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    } else if (key === "difficulty") {
      return (
        <FormField
          control={form.control}
              name={key}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{title}</FormLabel>
              <FormControl>
                <Select id={key}>
                  <SelectTrigger>
                    <SelectValue placeholder={"Select " + title} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Meadium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    } else if (key === "month") {
      return (
        <FormField
          control={form.control}
          name={key}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{title}</FormLabel>
              <FormControl>
                <Select id={key}>
                  <SelectTrigger>
                    <SelectValue placeholder={"Select " + title} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {months.map((ele, index) => {
                        return (
                          <SelectItem key={index} value={index + 1}>
                            {ele}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    }
    else if (key === "description") {
        return (
            <FormField
            control={form.control}
                name={key}
                className="col-span-2"
            render={({ field }) => (
                <FormItem>
                <FormLabel>{title}</FormLabel>
                <FormControl>
                    <Textarea placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        );
      }
    
      // make all form fields in two columns 

    return (
      <FormField
        control={form.control}
            name={key}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{title}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
              <Card className="w-full my-6">
                <CardHeader>
                  <CardTitle>Post Experience</CardTitle>
                  <CardDescription>
                    Share your interview experience with the community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)}>
                          {/* make all form fields in two column */}
                      <div className="grid w-full items-center gap-4 md:grid-cols-2">
                        {fields}
                      </div>
                      <Button type="submit" className="mt-4">
                        Post Experience
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
      </div>
  );
};

export default PostExperience;
