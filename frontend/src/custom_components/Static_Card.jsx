import { getAnalytics } from "@/Services/UserService";
import React, { useEffect, useState } from "react";
function Static_Card() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getAnalytics().then((res) => {

        // iterate over the object and capitalize the first letter of the key
        res = Object.keys(res).map((key) => {
          return {
            title: key.charAt(0).toUpperCase() + key.slice(1),
            value: res[key],
          };
        });

        setData(res);
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {data.map((item, index) => (
          <div class="mx-auto flex max-w-xs flex-col gap-y-4 w-full border-2 rounded-lg py-5 bg-blue-50">
          <dt class="text-base leading-7 text-gray-600">
                {item.title}
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Static_Card;
