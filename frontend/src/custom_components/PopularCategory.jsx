import { topCategory } from "@/Services/CategoryService";
import { BellIcon, CheckIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react";

const category = [
    {
        title: "DSA",
        description: "373 experinces",
    },
    {
        title: "Aptitude Test",
        description: "373 experinces",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]

const PopularCategory = () => {

    const [categorys, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await topCategory();
            
            data.map((ele) => {
                setCategory([...categorys,{ name : ele.title}])
            })
            
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
                    {/* {category.map((category, index) => (
                        <div key={index}>
                            <div className=" flex items-center space-x-4 rounded-md border p-4">
                                
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {category.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))} */}

                    {categorys.map((category, index) => (
                        <div key={index}>
                            <div className=" flex items-center space-x-4 rounded-md border p-4">
                                
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {category.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        20 Exeprerinces
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default PopularCategory;