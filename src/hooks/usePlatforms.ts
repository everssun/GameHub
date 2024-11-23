import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const res = useData<Platform>("/platforms/lists/parents");
  return res;
};

export default usePlatforms;
