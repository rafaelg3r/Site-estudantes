export function initCarousels() {
  const carousels = ["pt", "mat", "geo", "his", "fis", "bio", "lit", "emp-ino", "dir-hum", "com-mar", "ing", "art", "qmc"] // Removido ""

  carousels.forEach((id) => {
    const carouselElement = document.querySelector(`#task-carousel-${id}`)
    if (carouselElement) {
      new Splide(carouselElement, {
        type: "normal",
        perPage: 2,
        omitEnd: true,
        breakpoints: {
         1200: {
            perPage: 1,
          },
        },
      }).mount()
    }
  })
}
