export async function getMovies() {
  // fake DB request happens  here //
  return {
    data: [
      { title: "Spidermans" },
      { title: "Batmans" },
    ],
  };
}

export async function getMovie(id?: string) {
  // fake DB request happens  here //
  if (id) {
    return {
      data: [
        { id, title: "Batmans" },
      ],
    };
  }
  return { data: {} };
}
