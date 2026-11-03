const fetchFruitsButton = document.getElementById("get-fruits-btn");
const fruitsList = document.getElementById("fruits-list");

async function fetchFruits() {
  try {
    const response = await fetch("http://127.0.0.1:8000/fruits/");
    const fruitsData = await response.json();

    if (!response.ok) {
      console.log(
        `Failed to get fruits. Server responded with status: ${response.status}`,
      );
    }

    console.log(fruitsData);

    renderFruits(fruitsData);
  } catch (error) {
    console.error(error);
  }
}

function renderFruits(fruitsData) {
  const fruitsList = document.getElementById("fruits-list");
  fruitsList.replaceChildren();

  fruitsData.forEach((fruit) => {
    const { name, weight, color } = fruit;

    const fruitItem = document.createElement("li");
    fruitItem.textContent = `${name}, ${weight} kg, ${color}`;

    fruitsList.appendChild(fruitItem);
  });
}

fetchFruitsButton.addEventListener("click", fetchFruits);
