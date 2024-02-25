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
import { Input } from "@/components/ui/input";
import { createJob } from "@/Services/JobService";

const jobFormSchema = z.object({
  title: z.string(),
  ctc: z.string(),
  type: z.string(),
  location: z.string(),
  industry: z.string(),
});

export function JobForm() {
  const form = useForm({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      title: "",
      ctc: "",
      type: "",
      location: "",
      industry: "",
    },
  });

  async function onSubmit(data) {
    if (data) {
      const response = await createJob(data).then((response) => {
        console.log(response);
        setUser(response);
        form.reset();
      });
    }
  }

  // Iterate through form schema and create form fields
  const fields = Object.keys(jobFormSchema.shape).map((key) => {

    // capitalize first letter of key
    let title = key.charAt(0).toUpperCase() + key.slice(1);

    // generate appropriate placeholder for input
    let placeholder = "Enter " + key + " here...";

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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields}
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}
