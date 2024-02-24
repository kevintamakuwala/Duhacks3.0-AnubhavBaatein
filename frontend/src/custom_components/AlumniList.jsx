import React from "react";
// import { JobCard } from "./JobCard";

function AlumniList({alumni}) {

  const alumniRow = alumni.map((a) => {
    return (
        <tr>
            <td class="whitespace-nowrap px-4 py-4">
                <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                        <img
                            class="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                            alt=""
                        />
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            {a.name}
                        </div>
                        <div class="text-sm text-gray-700">{alumni.email}</div>
                    </div>
                </div>
            </td>
            <td class="whitespace-nowrap px-12 py-4">
                <div class="text-sm text-gray-900 ">{a.role}</div>
                <div class="text-sm text-gray-700">{a.company}</div>
            </td>
            <td class="whitespace-nowrap px-4 py-4">
                <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Active
                </span>
            </td>
            <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                {a.position}
            </td>
            <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                <a href="#" class="text-gray-700">
                    View Experiences
                </a>
            </td>
        </tr>)
})

  return (
      {alumniRow}
  );
}

export default AlumniList;