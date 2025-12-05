import { query } from "@/lib/utils";

const buildUrl = (...segments: string[]) => segments.join("/");

const Service = {
  /** ------------------------------------
   *  GENERAL DATA
   * ------------------------------------ */
  getGenres: (type: string) => query(buildUrl("genre", type, "list")),

  getData: (type: string, kind: string, page = 1) =>
    query(buildUrl(type, kind), { page }),

  getTrending: (type: string, time_window = "week", page = 1) =>
    query(buildUrl("trending", type, time_window), { page }),

  getSeosons: (id: string) => query(buildUrl("tv", id, "seasons")),

  searchData: (type: string, value: string) =>
    query(buildUrl("search", type), {
      query: value,
      language: "en-US",
      page: 1,
      include_adult: false,
    }),

  getDataWithGenres: (type: string, page = 1, with_genres?: string) =>
    query(buildUrl("discover", type), {
      page,
      ...(with_genres && { with_genres }),
    }),

  /** ------------------------------------
   *  DETAILS & MOVIE INFO
   * ------------------------------------ */
  getDetails: (type: string, id: string) => query(buildUrl(type, id)),
  getDetailsSeason: (number: string, id: string) =>
    query(buildUrl("tv", id, "season", number)),
  getCrew: (type: string, id: string) => query(buildUrl(type, id, "credits")),

  getRecommendations: (type: string, id: string, page = 1) =>
    query(buildUrl(type, id, "recommendations"), { page }),

  translate: (type: string, id: string) =>
    query(buildUrl(type, id, "translations")),

  providers: (type: string, id: string) =>
    query(buildUrl(type, id, "watch", "providers")),

  // celebrities
  getCelebrities: (page = 1) =>
    query(buildUrl("person/popular?language=en-US"), { page }),

  /** ------------------------------------
   *  MEDIA / EXTRAS
   * ------------------------------------ */
  logos: (type: string, id: string) =>
    query(buildUrl(type, id, "images?include_image_language=en-US")),

  videos: (type: string, id: string) =>
    query(buildUrl(type, id, "videos?language=en-US")),
};

export default Service;
