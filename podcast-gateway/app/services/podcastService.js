const podcasts = require("../data/podcastData");

const searchPodcasts = (query) => {
  const { title, categoryName, search } = query;

  if (!title && !categoryName && !search) {
    return podcasts;
  }

  let filteredPodcasts = podcasts;

  if (title) {
    filteredPodcasts = filteredPodcasts.filter(
      (podcast) => podcast.title.toLowerCase() === title.toLowerCase()
    );
  }
  if (categoryName) {
    filteredPodcasts = filteredPodcasts.filter(
      (podcast) =>
        podcast.categoryName.toLowerCase() === categoryName.toLowerCase()
    );
  }
  if (search) {
    filteredPodcasts = filteredPodcasts.filter(
      (podcast) =>
        podcast.title.toLowerCase().includes(search.toLowerCase()) ||
        podcast.categoryName.toLowerCase().includes(search.toLowerCase())
    );
  }
  return filteredPodcasts;
};

const getPaginatedPodcasts = (query) => {
  const { page = 1, limit = 10 } = query;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const podcasts = searchPodcasts(query);

  const paginatedResults = podcasts.slice(startIndex, endIndex);

  return {
    currentPage: parseInt(page),
    totalCount: podcasts.length,
    totalPages: Math.ceil(podcasts.length / limit),
    data: paginatedResults,
  };
};

module.exports = {
  getPaginatedPodcasts,
};
