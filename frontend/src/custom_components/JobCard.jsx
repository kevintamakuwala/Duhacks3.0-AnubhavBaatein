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
import { FaLocationDot } from "react-icons/fa6";

export function JobCard({ jobobj }) {

  console.log(jobobj);

  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0 p-4 bg-gray-50">
        <div className="space-y-1">
          <CardTitle className="text-xl font-semibold">{jobobj?.job?.title}</CardTitle>
          <CardDescription className="text-gray-600 flex items-center gap-1">
          <span><FaLocationDot /></span>{jobobj?.job?.location}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <BackpackIcon className="mr-1 h-4 w-4 text-gray-500" />
            <span>{jobobj?.company?.name}</span>
          </div>
          <div className="font-semibold">Salary: {jobobj?.job?.ctc} LPA</div>
        </div>
      </CardContent>
    </Card>
  );
}