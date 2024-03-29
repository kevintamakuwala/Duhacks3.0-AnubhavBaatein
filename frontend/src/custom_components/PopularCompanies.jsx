import {useEffect, useState} from "react"
import { cn } from "@/lib/utils"
import { BellIcon, CheckIcon } from "@radix-ui/react-icons"
import { topCompanies } from "@/Services/CompanyService"

// const companies = [
//     {
//         title: "MasterCard",
//         description: "Software Development",
//     },
//     {
//         title: "PyrimidFinTech",
//         description: "Java Developer",
//     },
//     {
//         title: "Your subscription is expiring soon!",
//         description: "2 hours ago",
//     },
//     {
//         title: "Your subscription is expiring soon!",
//         description: "2 hours ago",
//     },
//     {
//         title: "Your subscription is expiring soon!",
//         description: "2 hours ago",
//     },
//     {
//         title: "Your subscription is expiring soon!",
//         description: "2 hours ago",
//     },
// ]

const PopularCompanies = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await topCompanies();
            setCompanies(data);
          } catch (error) {
            console.error('Error fetching experiences:', error);
          }
    
        };
    
        fetchData();

      }, []);

    return (
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="sr-only">Products</h2>

                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {companies.map((companies, index) => (
                        <div key={index}>
                                <div className="flex-1 space-y-1">
                                    <p className="text-lg font-medium leading-none">
                                        {companies.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {/* {companies.description} */}
                                        Software Development
                                    </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default PopularCompanies;