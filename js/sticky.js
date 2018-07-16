function handleStickies(stickies) {
  const scroll = window.pageYOffset;
  for (let i = 0; i < stickies.length; i++) {
    if (scroll > stickies[i].top && (i == stickies.length-1 || scroll < stickies[i + 1].top)) {
      stickies[i].element.classList.add("sticky");
    } else {
      stickies[i].element.classList.remove("sticky");
    }
  }
}

const stickyNames = ["title1", "title2"];
stickies = stickyNames
  .map(name => {
    const element = document.getElementById(name);
    console.log(element);
    return {
      element,
      top: element.getBoundingClientRect().top + window.scrollY
    };
  })
  .sort((a, b) => {
    return a.top - b.top;
  });

window.onscroll = () => handleStickies(stickies);
