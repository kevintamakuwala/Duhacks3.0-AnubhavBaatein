import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JobForm } from "@/custom_components/JobForm";
import React from "react";

function AddJob() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col">
          <div className="flex-1 space-y-4 px-8 py-6">
            <div className="w-full md:w-[350px] mx-auto">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Add Job</h2>
                <p className="text-gray-600 mb-4">Add a job to the job board</p>
                <JobForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddJob;
