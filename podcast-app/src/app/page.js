"use client";

import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import PodcastCard from "../components/PodcastCard";
import { usePodcasts } from "../hooks/usePodcasts";

export default function Podcasts() {
  const {
    podcasts,
    search,
    setSearch,
    loading,
    error,
    currentPage,
    totalPages,
    setCurrentPage,
  } = usePodcasts();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Podcasts</h1>

      <div className="mb-8">
        <input
          type="text"
          className="px-4 py-2 w-full rounded border border-gray-300 focus:outline-none"
          placeholder="Search for podcasts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading && <Loader />}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && podcasts.length === 0 && (
        <div className="flex flex-col justify-center text-gray-500 items-center mt-10">
          <h2 className="text-xl font-semibold">No Podcasts Found</h2>
          <p>Try adjusting your search.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {podcasts.length > 0 &&
          podcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
