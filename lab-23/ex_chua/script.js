function getBreeds() {
  return axios.get("https://dog.ceo/api/breeds/list/all").then((data) => {
    return data.data.message;
  });
}

function getSubBreeds(breed) {
  return axios.get(`https://dog.ceo/api/breed/${breed}/list`).then((data) => {
    return data.data.message;
  });
}

function renderBreeds(breeds) {
  const $loading = $(".loading");
  const $breedSelector = $(".breed-selector");
  const $select = $("#breed");

  for (const breed in breeds) {
    const breedName = breed[0].toUpperCase() + breed.slice(1);
    $select.append(`<option value="${breed}">${breedName}</option>`);
  }

  $loading.addClass("hidden");
  $breedSelector.removeClass("hidden");
}

function get3RandomImages(breed, subBreed) {
  return axios
    .get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/3`)
    .then((data) => {
      return data.data.message;
    });
}

function renderSubBreeds(subBreeds) {
  const $subBreedsList = $(".sub-breed-list");
  const $imageContainer = $(".images-container");
  const $imageList = $imageContainer.find(".image-list");

  $subBreedsList.empty();

  const breed = $("#breed").val();

  if (subBreeds.length === 0) {
    $subBreedsList.append(`<p>No sub-breeds found</p>`);
    $imageContainer.addClass("hidden");
  } else {
    for (const subBreed of subBreeds) {
      const subBreedName = subBreed[0].toUpperCase() + subBreed.slice(1);

      $(`<li><a href="#">${subBreedName}</a></li>`)
        .click(function (e) {
          e.preventDefault();
          get3RandomImages(breed, subBreed).then(renderImages);
        })
        .appendTo($subBreedsList);
    }

    $imageList.empty();
    $imageList.append(`<p>Select a sub-breed</p>`);
    $imageContainer.removeClass("hidden");
  }
}

function renderImages(images) {
  const $imageList = $(".images-list");

  $imageList.empty();

  for (const image of images) {
    $(`<img src="${image}" alt=""/>`).appendTo($imageList);
  }
}

$(function () {
  getBreeds().then(renderBreeds);

  $("#get-sub-breed").on("click", function () {
    const breed = $("#breed").val();

    if (breed === "") {
      return;
    }

    getSubBreeds(breed).then(renderSubBreeds);
  });
});
