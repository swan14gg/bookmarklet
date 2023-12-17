javascript: {
  const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const sectioningContents = ["article", "section", "aside", "nav"];
  const hgroups = ["hgroup"];
  const applyStyles = (el, tag, color) => {
    Object.assign(el.style, {
      border: `2px solid ${color}`,
      position: "relative",
      overflow: "hidden",
    });

    const label = document.createElement("div");
    label.textContent = `${tag}: ${el.textContent.trim().slice(0, 20)}`;
    Object.assign(label.style, {
      backgroundColor: color,
      color: "black",
      position: "absolute",
      right: 0,
      bottom: 0,
      padding: "2px 5px",
      fontSize: "8px",
      border: `1px solid ${color}`,
      opacity: 0.8,
      transition: "opacity 0.3s",
      zIndex: 10,
    });

    el.addEventListener("mouseover", (event) => {
      event.stopPropagation();
      Object.assign(label.style, {
        opacity: 1,
        zIndex: 1000,
      });
    });

    el.addEventListener("mouseout", (event) => {
      event.stopPropagation();
      Object.assign(label.style, {
        opacity: 0.8,
        zIndex: 10,
      });
    });

    el.appendChild(label);
  };

  [headings, sectioningContents, hgroups].forEach((tags, index) =>
    document
      .querySelectorAll(tags.join(","))
      .forEach((el) =>
        applyStyles(
          el,
          el.tagName,
          ["wheat", "lightgreen", "lightcoral"][index]
        )
      )
  );
}
