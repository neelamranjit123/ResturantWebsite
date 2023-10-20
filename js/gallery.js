const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const images = document.querySelector(".frame").children;
  const totalNumberImages = images.length;
  
  let count = 0; // I need it to record which image is currently being displayed.
  
  prev.addEventListener("click", (e) => {
    // control it to display the previous image
    retrieveImage("prev");
  });
  
  next.addEventListener("click", (e) => {
    // control it to display the next image
    retrieveImage("next");
  });
  
  function retrieveImage(direction) {
    if (direction == "next") {
      count++;
      if (count == totalNumberImages) {
        count = 0;
      }
    } else {
      if (count == 0) {
        count = totalNumberImages - 1;
      } else {
        count--;
      }
    }
  
    for (let i = 0; i < totalNumberImages; i++) {
      images[i].classList.remove("main");
    }
  
    images[count].classList.add("main");
  }
