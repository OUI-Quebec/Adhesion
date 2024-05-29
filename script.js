document.addEventListener("DOMContentLoaded", () => {
  const ligne1 = document.getElementById("oui-quebec-ligne-1");

  let lastScroll = 0;

  document.addEventListener("scroll", () => {
    if (scrollY && lastScroll !== 0) {
      let scrollDelta = lastScroll - scrollY;
      move(ligne1.childNodes, scrollDelta, "RIGHT");
      //   let currentPosition = parseInt(ligne1.style.left, 10);

      //   ligne1.style.left = currentPosition + scrollDelta + "px";
      console.log("delta", scrollDelta);
      console.log("position", parseInt(ligne1.style.left, 10));
    }

    lastScroll = scrollY;
  });
});

function move(elements, delta, direction) {
  
  elements.forEach((element) => {
    if (element.localName === "object") {
        console.log(element.style.left);
        if(element.style.left)
      let currentPosition = parseInt(element.style.left, 10);
      element.style.left = currentPosition + delta + "px";
    }
  });
}
