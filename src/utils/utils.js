function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function extractListItems(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const listItems = doc.querySelectorAll("li");
  return Array.from(listItems).map((li) => li.textContent.trim());
}

function extractContentFromDescription(descriptionHTML) {
  if (typeof window === "undefined" || !descriptionHTML)
    return {
      content: "",
      featureList1: [],
      featureList2: [],
    };

  const parser = new DOMParser();
  const doc = parser.parseFromString(descriptionHTML, "text/html");

  const content = doc.querySelector("p")?.innerText?.trim() || "";

  const featureItems = Array.from(doc.querySelectorAll("li"))
    .map((li) => li.innerText.trim())
    .filter(Boolean);

  const mid = Math.ceil(featureItems.length / 2);
  const featureList1 = featureItems.slice(0, mid);
  const featureList2 = featureItems.slice(mid);

  return { content, featureList1, featureList2 };
}

function parseHTMLList(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const items = doc.querySelectorAll("li");
  return Array.from(items).map((li) => li.textContent.trim());
}

export {
  stripHtml,
  extractListItems,
  extractContentFromDescription,
  parseHTMLList,
};
