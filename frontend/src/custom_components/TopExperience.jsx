import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

const experinces = [
    {
        title: "My SDE Interview at MasterCard",
        description: "Software Development vgfctfef vygyv vgyf yfvb",
        company: "MasterCard",
        location: "Vadodara",
    },
    {
        title: "PyrimidFinTech",
        description: "Java Developer",
        company: "MasterCard",
        location: "Vadodara",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
        company: "MasterCard",
        location: "Vadodara",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
        company: "MasterCard",
        location: "Vadodara",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
        company: "MasterCard",
        location: "Vadodara",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
        company: "MasterCard",
        location: "Vadodara",
    },
]

const TopExperience = () => {
    return (
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="sr-only">Products</h2>

                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {experinces.map((experinces, index) => (
                        <div key={index}>
                            <Card className="w-[350px]">
                                <p className="text-sm font-medium leading-none">
                                    {experinces.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {experinces.description}
                                </p>
                                <CardContent>
                                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                                        <BellIcon />
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                {experinces.company}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {experinces.location}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default TopExperience;