import { Box } from "@mui/material";
import { electronicsLevelThree } from "../../data/category/level three/electronicsLevelThree";
import { furnitureLevelThree } from "../../data/category/level three/furnitureLevelThree";
import { menLevelThree } from "../../data/category/level three/menLevelThree";
import { womenLevelThree } from "../../data/category/level three/womenLevelThree";
import { electronicsLevelTwo } from "../../data/category/level two/electrnicsLevelTwo";
import { furnitureLevelTwo } from "../../data/category/level two/furnitureLevelTwo";
import { menLevelTwo } from "../../data/category/level two/menLevelTwo";
import { womenLevelTwo } from "../../data/category/level two/womenLevelTwo";
import { useNavigate } from "react-router-dom";

const categoryTwo = {
  men: menLevelTwo,
  women: womenLevelTwo,
  electronics: electronicsLevelTwo,
  home_furniture: furnitureLevelTwo,
};

const categoryThree = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
  home_furniture: furnitureLevelThree,
};

const CategorySheet = ({ selectedCategory, setShowSheet }) => {
  const navigate = useNavigate();

  const childCategory = (category, parentCategoryId) => {
    return category.filter(
      (child) => child.parentCategoryId == parentCategoryId
    );
  };

  return (
    <Box className="bg-white shadow-lg lg:h-[400px] overflow-y-auto px-20 border-t border-gray200">
      <div className="flex text-sm flex-wrap">
        {categoryTwo[selectedCategory]?.map((item) => (
          <div className="p-8 lg:w-[20%]" key={item.name}>
            <div className="group transition-all flex justify-center w-24 relative">
              <p className="common-title left-0 my-3 text-[16px] cursor-pointer inline-block no-underline text-gray500 p-2 duration-500">
                {item.name}
              </p>
              <div className="border-b-2 border-transparent absolute bottom-3 w-1.5 duration-500 group-hover:w-3/4 group-hover:border-gray500 group-hover:duration-500"></div>
            </div>
            <ul className="space-y-3 mt-6">
              {childCategory(
                categoryThree[selectedCategory],
                item.categoryId
              ).map((subItem) => (
                <div key={subItem.name}>
                  <li
                    onClick={() => navigate("/products/" + subItem.categoryId)}
                    className="text-[16px] font-display text-gray400 hover:text-gray500 duration-500 cursor-pointer"
                  >
                    {subItem.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
