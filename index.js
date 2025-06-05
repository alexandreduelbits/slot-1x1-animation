const icons = ["🍒", "🍋", "🍊", "⭐", "🍇", "🍉", "💎"];
const lane1Items = [6, 0, 5, 1, 4, 2, 3];
const lane2Items = [0, 1, 2, 3, 5, 4, 6];
const lane3Items = [1, 0, 3, 5, 4, 6, 2];

const orderItemsLane1 = [5, 0, 6, 3, 2, 4, 1];
const orderItemsLane2 = [2, 1, 0, 6, 4, 5, 3];
const orderItemsLane3 = [3, 0, 1, 2, 6, 4, 5];

const slotRow1 = document.getElementById("slotRow1");
const slotRow2 = document.getElementById("slotRow2");
const slotRow3 = document.getElementById("slotRow3");

const lane1Option = document.getElementById("lane1Value");
const lane2Option = document.getElementById("lane2Value");
const lane3Option = document.getElementById("lane3Value");

function updateSlotRow(lane, items) {
  lane.innerHTML = "";
  for (let i = 0; i < 11; i++) {
    items.forEach((item) => {
      const slotItem = document.createElement("div");
      slotItem.className = "slot-item";
      slotItem.textContent = icons[item];
      lane.appendChild(slotItem);
    });
  }
}

function spinLane(lane, target, items, delay) {
  lane.style.transition = "none";
  lane.style.transform = `translateY(0)`;

  setTimeout(() => {
    const itemIndex = items.findIndex((item) => item == target);

    const itemSize = 90;
    const laneWidth = itemSize * icons.length;
    const distance = 3 * laneWidth + (itemIndex + 1) * itemSize;

    console.log({ target, itemIndex, itemSize, laneWidth, distance });

    lane.style.transition = `transform ${delay}s linear`;
    lane.style.transform = `translateY(${distance}px)`;
  }, 10);
}

document.addEventListener("DOMContentLoaded", function () {
  const spinButton = document.getElementById("spinButton");

  updateSlotRow(slotRow1, lane1Items);
  updateSlotRow(slotRow2, lane2Items);
  updateSlotRow(slotRow3, lane3Items);

  spinButton.addEventListener("click", function () {
    spinLane(slotRow1, +lane1Option.value, orderItemsLane1, 1);
    spinLane(slotRow2, +lane2Option.value, orderItemsLane2, 1.25);
    spinLane(slotRow3, +lane3Option.value, orderItemsLane3, 1.5);
  });
});
