javascript: (() => {
  const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const sectioningContents = ["article", "section", "aside", "nav"];
  const hgroups = ["hgroup"];
  const applyStyles = (el, tag, color) => {
    el.style.border = `2px solid ${color}`;
    el.style.position = "relative";
    el.style.overflow = "hidden";

    const label = document.createElement("div");
    label.textContent = `${tag.toUpperCase()}: ${el.textContent
      .trim()
      .substring(0, 20)}`;
    label.style.backgroundColor = color;
    label.style.color = "black";
    label.style.position = "absolute";
    label.style.right = "0";
    label.style.bottom = "0";
    label.style.padding = "2px 5px";
    label.style.fontSize = "8px";
    label.style.border = `1px solid ${color}`;
    label.style.opacity = "0.8";
    label.style.transition = "opacity 0.3s";
    label.style.zIndex = "10";

    el.addEventListener("mouseover", (event) => {
      event.stopPropagation();
      label.style.opacity = "1";
      label.style.zIndex = "1000";
    });

    el.addEventListener("mouseout", (event) => {
      event.stopPropagation();
      label.style.opacity = "0.8";
      label.style.zIndex = "10";
    });

    el.appendChild(label);
  };

  headings.forEach((tag) => {
    const elements = document.querySelectorAll(tag);
    elements.forEach((el) => applyStyles(el, tag, "wheat"));
  });

  sectioningContents.forEach((tag) => {
    const elements = document.querySelectorAll(tag);
    elements.forEach((el) => applyStyles(el, tag, "lightgreen"));
  });

  hgroups.forEach((tag) => {
    const elements = document.querySelectorAll(tag);
    elements.forEach((el) => applyStyles(el, tag, "lightcoral"));
  });
})();
