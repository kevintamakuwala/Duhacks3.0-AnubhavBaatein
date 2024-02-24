import {
    BackpackIcon,
    ChevronDownIcon,
    CircleIcon,
    PlusIcon,
    StarIcon,
  } from "@radix-ui/react-icons";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  export function JobCard({ job }) {
    return (
      <Card className="bg-white rounded-lg shadow-md overflow-hidden">
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0 p-4 bg-gray-50">
          <div className="space-y-1">
            <CardTitle className="text-xl font-semibold">{job?.title}</CardTitle>
            <CardDescription className="text-gray-600">
              {job?.location}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <BackpackIcon className="mr-1 h-4 w-4 text-gray-500" />
              <span>{job?.company}</span>
            </div>
            <div className="font-semibold">Salary: {job?.salary}</div>
          </div>
        </CardContent>
      </Card>
    );
  }
  