import useFetchGifs from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs( category )

  return (
    <div>
      <h3>{category}</h3>

			{ loading && 'loading...' }

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem
						key={img.id}
						{...img}
					/>
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
