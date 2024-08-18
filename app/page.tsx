"use client";

import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Home() {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const supabase = createClient();
      const { data: recipes, error } = await supabase.from("recipes").select();
      if (error) {
        console.error("Error fetching recipes:", error);
      } else {
        console.log("recipes:", recipes);
        setRecipes(recipes || []);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container">
      <div className="w-full h-[80vh]">
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/586e8403-fc8c-41e6-ab51-d21c58c7693b.png")',
          }}
        >
          <div className="flex flex-col h-full w-full items-center justify-center gap-12">
            <h1 className="text-white text-4xl font-black tracking-wider">
              Explore 500,000+ recipes
            </h1>
            <div className="flex items-center relative bg-white p-1.5 w-[50%]">
              <input
                type="text"
                placeholder="Find a recipe"
                className="pl-10 pr-4 py-1.5 w-full border-none outline-none text-lg"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <button className="bg-primary text-white px-4 font-semibold py-3">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        test
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </div>
    </div>
  );
}
