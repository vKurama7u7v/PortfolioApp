import { map, size } from "lodash";

export const counterPostsByCategory = (data, category) => {
  const result = data.filter(
    (post) => post.attributes.categories.data.attributes.category === category
  );
  return size(result);
};
