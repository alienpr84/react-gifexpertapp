import useFetchGifs from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs( category )

  return (
    <div>
      <h3>{category}</h3>

			{ loading && <p>loading...</p> }

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

GifGrid.prototype = {
	category: PropTypes.string.isRequired,
}