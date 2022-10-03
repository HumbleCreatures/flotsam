
type Category = {
  id: number;
  name: string;
}

const categoryDatabase: Category[] = [
  { name: "electronics", id: 1 },
  { name: "jewelery", id: 2 },
  { name: "men's clothing", id: 3 },
  { name: "women's clothing", id: 4 }
]

export async function getCategoryByName(name: string): Promise<Category | undefined> {
  return new Promise(res => setTimeout(() => {
    const category = categoryDatabase.find(category => category.name === name);
    res(category);
  }, 10));
};
