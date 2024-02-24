import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
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
import { updateUser } from "@/Services/UserService";

const profileFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  currentCompany: z.string(),
  linkedin: z.string(),
  github: z.string(),
});

export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      currentCompany: "",
      linkedin: "",
      github: "",
    },
  });

  async function onSubmit(data) {
    console.log(data);
    await updateUser(data).then((response) => {
      console.log(response);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="ashish" {...field} />
              </FormControl>
              <FormDescription>
                Please select your valid name to display.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="21ceuos101@ddu.ac.in" {...field} />
              </FormControl>
              <FormDescription>
                Please select your valid college email to display.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="9725051028" {...field} />
              </FormControl>
              <FormDescription>
                Please select your valid phone number to display.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currentCompany"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Company</FormLabel>
              <FormControl>
                <Input placeholder="Bajrang Dal" {...field} />
              </FormControl>
              <FormDescription>
                Please select your valid company name to display.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alumni">Alumni</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Please select your valid role to display.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn</FormLabel>
              <FormControl>
                <Input placeholder="https://linkedin.com" {...field} />
              </FormControl>
              <FormDescription>
                Please select your valid LinkedIn URL to display.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="github"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github</FormLabel>
              <FormControl>
                <Input placeholder="https://github.com" {...field} />
              </FormControl>
              <FormDescription>
                Please select your valid Github URL to display.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}
