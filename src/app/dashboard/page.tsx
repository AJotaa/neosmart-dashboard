import { GreetingsText } from "../ui/dashboard/GreetingsText";
import { DashboardList } from "../ui/dashboard/DashboardList";

const testData = {
  user: {
    name: "Peter",
    categories: [
      {
        id: 0,
        name: "Legal",
        cost: null,
        slug: "legal",
        image_path: "legal.png",
        options: ["Criminal Defence", "Envairomental Law", "Civil Law"],
      },
      {
        id: 1,
        name: "Startups",
        cost: null,
        slug: "startups",
        image_path: "startups.png",
        options: [
          "Recruiting",
          "Compensation & Benefits",
          "Performance Management",
        ],
      },
      {
        id: 2,
        name: "Marketing",
        cost: null,
        slug: "marketing",
        image_path: "marketing.png",
        options: [
          "Content Marketing",
          "Digital Marketing Strategies",
          "Social Media and Community Management",
        ],
      },
      {
        id: 3,
        name: "People",
        cost: null,
        slug: "people",
        image_path: "people.png",
        options: [
          "Idea Generation and Validation",
          "Naming and Branding",
          "Market Research",
        ],
      },
    ],
  },
};
const URL = "http://localhost:3001/user";

export default async function DashboardPage() {
  let data = null;
  // try {
  //   const response = await fetch(URL);
  //   data = await response.json();
  // } catch (err) {
  //   throw err;
  // }

  data = testData.user;

  return (
    <main className="pt-16 w-full min-h-screen">
      <div className="mx-10 xl:mx-14">
        <GreetingsText name={data.name} />
        <DashboardList data={data.categories} />
      </div>
    </main>
  );
}
