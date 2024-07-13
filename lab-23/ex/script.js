// Fetch breeds data and render initial list
fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((json) => renderBreeds(json.message));

function renderBreeds(breeds) {
  const $breedsList = $(".breeds-list");

  const options = Object.keys(breeds).flatMap((breedCategory) =>
    breeds[breedCategory].map((breedName) => breedName)
  );

  const html = options
    .map((breedName) => `<option>${breedName}</option>`)
    .join("");

  $breedsList.html(`<select>${html}</select>`);
}

$(".get-sub-breed").click(function () {
  const selectedBreed = $(".breeds-list select").val();

  if (selectedBreed) {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/list`)
      .then((response) => response.json())
      .then((json) => {
        const subBreeds = json.message;

        if (subBreeds.length > 0) {
          renderSubBreeds(selectedBreed, subBreeds);
        } else {
          renderSubBreedsNotFound();
        }
      })
      .catch((error) => {
        console.error(`Error fetching sub-breeds for ${selectedBreed}:`, error);
        renderSubBreedsNotFound();
      });
  }
});

function renderSubBreeds(selectedBreed, subBreeds) {
  const $subBreedsList = $(".list-sub-breed");

  const html =
    `<ul>` +
    subBreeds
      .map((subBreedName) => `<li><a href="">${subBreedName}</a></li>`)
      .join("") +
    `</ul>`;

  $subBreedsList.html(html);
}

function renderSubBreedsNotFound() {
  const $subBreedsList = $(".list-sub-breed");

  $subBreedsList.html("<p>Không có sub breed</p>");
}
