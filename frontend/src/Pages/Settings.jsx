import { ProfileForm } from "@/custom_components/ProfileForm";
import { Separator } from "@radix-ui/react-select";

export const metadata= {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

export default function Settings() {
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="flex-1 lg:max-w-2xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                  This is how others will see you on the site.
                </p>
              </div>
              <Separator />
              <ProfileForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
