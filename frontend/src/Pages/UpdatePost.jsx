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
import { createExperience, updateExperience } from "@/Services/ExperienceService";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { createCompany } from "@/Services/CompanyService";
import { createJob } from "@/Services/JobService";
import { createCategory } from "@/Services/CategoryService";
import { useParams } from "react-router-dom";

const experienceFormSchema = z.object({
  description: z.string(),
});

const UpdatePost = () => {

  // const id = useParams();
  const id = "5cc27dbf-add6-44f8-adfe-01cdb0dee735";

  const form = useForm({
    resolver: zodResolver(experienceFormSchema),
    defaultValues: {
      description: "",
    },
  });

  async function onSubmit(data) {
    const experience = {
      id: id,
      description : data.description
    }

    const response = await updateExperience(experience).then((response) => {
      form.reset();
    });
  }


  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-96 my-6">
        <CardHeader>
          <CardTitle>Update Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <FormField
                  control={form.control}
                  name="description"
                  className="w-full"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="mt-4 w-full">
                Update Experience
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default UpdatePost;
