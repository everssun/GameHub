import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPlatform = data.find(
      (platform) => platform.id.toString() === event.target.value
    );
    if (selectedPlatform) {
      onSelectPlatform(selectedPlatform);
    }
  };

  if (error) return null;
  return (
    <select className="form-select" onChange={handleChange}>
      <option value="">Platforms</option>
      {data.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;
