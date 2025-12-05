export const headers = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
};
export const items = [
  {
    label: "Movies",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      {
        label: "Popular Movies",
        ariaLabel: "Popular Movies",
        href: "/movies/category/popular",
      },
      {
        label: "Top Rated",
        ariaLabel: "Top Rated Movies",
        href: "/movies/category/top_rated",
      },
      {
        label: "Upcoming",
        ariaLabel: "Upcoming Movies",
        href: "/movies/category/upcoming",
      },
      {
        label: "Now Playing",
        ariaLabel: "Now Playing Movies",
        href: "/movies/category/now_playing",
      },
    ],
  },

  {
    label: "TV Series",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      {
        label: "Popular",
        ariaLabel: "Popular TV Series",
        href: "/tv/category/popular",
      },
      {
        label: "Airing Today",
        ariaLabel: "TV Airing Today",
        href: "/tv/category/airing_today",
      },
      {
        label: "On The Air",
        ariaLabel: "Currently On The Air",
        href: "/tv/category/on_the_air",
      },
      {
        label: "Top Rated",
        ariaLabel: "Top Rated TV Shows",
        href: "/tv/category/top_rated",
      },
    ],
  },

  {
    label: "celebrities",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      {
        label: "Popular celebrities",
        ariaLabel: "Popular People in Entertainment",
        href: "/celebrities",
      },
    ],
  },
];
