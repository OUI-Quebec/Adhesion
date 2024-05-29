document.addEventListener("DOMContentLoaded", () => {
  const lignes = [
    document.getElementById("oui-quebec-ligne-1").childNodes,
    document.getElementById("oui-quebec-ligne-2").childNodes,
    document.getElementById("oui-quebec-ligne-3").childNodes,
    document.getElementById("oui-quebec-ligne-4").childNodes,
  ];

  lignes.forEach((ligne) => {
    init(ligne);
  });

  let lastScroll = 0;

  document.addEventListener("scroll", () => {
    if (scrollY && lastScroll !== 0) {
      let scrollDelta = lastScroll - scrollY;

      lignes.forEach((ligne, index) => {
        move(ligne, scrollDelta, index % 2 === 0 ? "RIGHT" : "LEFT");
      });
    }

    lastScroll = scrollY;
  });
});

function move(elements, delta, direction) {
  elements.forEach((element) => {
    if (element.localName === "object") {
      const directionDelta = direction === "RIGHT" ? -1 : 1;
      const currentPosition = parseInt(element.style.left, 10);
      element.style.left = currentPosition + delta * directionDelta + "px";
    }
  });
}

function init(elements) {
  elements.forEach((element) => {
    if (element.localName === "object") {
      element.style.left = "0px";
    }
  });
}
