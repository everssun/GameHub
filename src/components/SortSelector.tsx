import usePlatforms from "../hooks/usePlatforms";

const SortSelector = () => {
  // const { data, error } = usePlatforms();
  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     const selectedPlatform = data.find(
  //       (platform) => platform.id.toString() === event.target.value
  //     );
  //     if (selectedPlatform) {
  //       onSelectPlatform(selectedPlatform);
  //     }
  //   };

  //   if (error) return null;
  return (
    <select className="form-select">
      <option value="">Order by: Relevance</option>
      <option value="">Relevance</option>
      <option value="">Date added</option>
      <option value="">Name</option>
      <option value="">Release date</option>
      <option value="">Popularity</option>
      <option value="">Average rating</option>
    </select>
  );
};

export default SortSelector;
