import { useState, useEffect, useCallback } from "react";
import { debounce } from "@/utils/debounce";

export const usePodcasts = (limit = 10) => {
  const [podcasts, setPodcasts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPodcasts = async (searchQuery, page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/podcasts?search=${searchQuery}&page=${page}&limit=${limit}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }
      setPodcasts(data.data || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetch = useCallback(debounce(fetchPodcasts, 500), []);

  useEffect(() => {
    debouncedFetch(search, currentPage);
  }, [search, currentPage, debouncedFetch]);

  return {
    podcasts,
    search,
    setSearch,
    loading,
    error,
    currentPage,
    totalPages,
    setCurrentPage,
  };
};
