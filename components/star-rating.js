const ratingStars = [...document.querySelectorAll(".star-list-item-grey")];

function executeRating(stars) {
  const starClassActive = "star-list-item-yellow";

  const starClassInActive = "star-list-item-grey";

  let i;

  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);
      console.log("clicked", i);

      if (star.className === starClassInActive)
        for (i; i >= 0; --i) {
          stars[i].className = starClassActive;
        }
      else {
        for (i; i < stars.length; ++i) {
          stars[i].className = starClassInActive;
        }
      }
    };
  });
}

executeRating(ratingStars);
