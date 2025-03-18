export const mainCategory = [
  {
    name: "Men",
    categoryId: "men",
    level: 1,
    link: "/collections/all?gender=Men",
    levelTwoCategory: [
      {
        name: "Topwear",
        categoryId: "men_topwear",
        parentCategoryId: "men",
        level: 2,
      },
      {
        name: "Bottomwear",
        categoryId: "men_bottomwear",
        parentCategoryId: "men",
        level: 2,
      },
      {
        // Innerwear And Sleepwear
        name: "Innerwear",
        categoryId: "men_innerwear_and_sleepwear",
        parentCategoryId: "men",
        level: 2,
      },
      {
        // Blanks & Packs
        name: "Blanks",
        categoryId: "men_black&packs",
        parentCategoryId: "men",
        level: 2,
      },
    ],
  },
  {
    name: "Women",
    categoryId: "women",
    level: 1,
    levelTwoCategory: [
      {
        name: "Topwear",
        categoryId: "women_topwear",
        parentCategoryId: "women",
        level: 2,
      },
      {
        name: "Bottomwear",
        categoryId: "women_bottomwear",
        parentCategoryId: "women",
        level: 2,
      },
      {
        name: "Innerwear And Sleepwear",
        categoryId: "women_innerwear_and_sleepwear",
        parentCategoryId: "women",
        level: 2,
      },
      {
        name: "Dresses & Jumpsuits",
        categoryId: "women_dresses_jumpsuits",
        parentCategoryId: "women",
        level: 2,
      },
      {
        name: "Sportswear",
        categoryId: "women_sportswear",
        parentCategoryId: "women",
        level: 2,
      },
      {
        name: "Maternity Wear",
        categoryId: "women_maternity_wear",
        parentCategoryId: "women",
        level: 2,
      },
      {
        name: "Plus Size",
        categoryId: "women_plus_size",
        parentCategoryId: "women",
        level: 2,
      },
    ],
  },
  {
    name: "Threads",
    categoryId: "electronics",
    level: 1,
    levelTwoCategory: [
      {
        name: "Laptops",
        categoryId: "laptops_id",
        parentCategoryId: "electronics",
        level: 2,
      },
      {
        name: "Tablets",
        categoryId: "tablets_id",
        parentCategoryId: "electronics",
        level: 2,
      },
      {
        name: "Headphones & Earbuds",
        categoryId: "headphones_earbuds",
        parentCategoryId: "electronics",
        level: 2,
      },
      {
        name: "Accessories",
        categoryId: "electronics_accessories",
        parentCategoryId: "electronics",
        level: 2,
      },
    ],
  },
  {
    name: "Accessories",
    categoryId: "home_furniture",
    level: 1,
    levelTwoCategory: [
      {
        name: "Living Room Furniture",
        categoryId: "furniture_living_room",
        parentCategoryId: "furniture",
        level: 2,
      },
      {
        name: "Bedroom Furniture",
        categoryId: "furniture_bedroom",
        parentCategoryId: "furniture",
        level: 2,
      },
      {
        name: "Office Furniture",
        categoryId: "furniture_office",
        parentCategoryId: "furniture",
        level: 2,
      },
      {
        name: "Dining Room Furniture",
        categoryId: "furniture_dining_room",
        parentCategoryId: "furniture",
        level: 2,
      },
    ],
  },
];
