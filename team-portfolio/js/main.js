const form = document.querySelector("#workout-form");
const exerciseInput = document.querySelector("#exercise");
const durationInput = document.querySelector("#duration");
const recordList = document.querySelector("#record-list");
const emptyMessage = document.querySelector("#empty-message");

// 저장된 기록을 불러옵니다.
let records = JSON.parse(localStorage.getItem("workoutRecords")) || [];

function showRecords() {
  recordList.innerHTML = "";

  if (records.length === 0) {
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";

  records.forEach(function(record, index) {
    const li = document.createElement("li");
    const infoBox = document.createElement("div");
    const info = document.createElement("strong");
    const date = document.createElement("span");
    const deleteButton = document.createElement("button");

    info.textContent = record.name + " - " + record.duration + "분";
    date.textContent = record.date || "";
    date.className = "record-date";
    infoBox.className = "record-info";
    infoBox.appendChild(info);
    infoBox.appendChild(date);

    deleteButton.textContent = "삭제";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function() {
      records.splice(index, 1);
      saveRecords();
      showRecords();
    });

    li.appendChild(infoBox);
    li.appendChild(deleteButton);
    recordList.appendChild(li);
  });
}

function saveRecords() {
  localStorage.setItem("workoutRecords", JSON.stringify(records));
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = exerciseInput.value.trim();
  const duration = Number(durationInput.value);

  if (name === "" || duration <= 0) {
    alert("운동 이름과 시간을 올바르게 입력해주세요.");
    return;
  }

  const today = new Date();
  const recordDate = today.getFullYear() + ". " +
    (today.getMonth() + 1) + ". " + today.getDate() + ".";

  records.push({
    name: name,
    duration: duration,
    date: recordDate
  });

  saveRecords();
  showRecords();
  form.reset();
});

showRecords();
