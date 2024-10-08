const PodcastCard = ({ podcast }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">{podcast.title}</h2>
        <p>{podcast.description}</p>
        <p className="mt-2 text-sm">
          <span className="font-semibold">Category:</span> {podcast.categoryName}
        </p>
      </div>
    );
  };
  
  export default PodcastCard;