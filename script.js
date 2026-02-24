let interviewCount = 0;
let rejectedCount = 0;

function updateCounts() {
  const total = document.querySelectorAll(".job-card").length;
  document.getElementById("total-count").innerText = total;
}

function updateStatus(button, newStatus) {
  const card = button.closest(".job-card");
  const badge = card.querySelector(".status-badge");
  const actionButtons = card.querySelector(".action-buttons");

  card.setAttribute("data-status", newStatus);

  if (newStatus === "interview") {
    badge.innerText = "INTERVIEWING";
    badge.className =
      "status-badge px-3 py-1 rounded text-xs font-bold bg-emerald-50 text-emerald-600";
    interviewCount++;
    document.getElementById("interview-count").innerText = interviewCount;
  } else if (newStatus === "rejected") {
    badge.innerText = "REJECTED";
    badge.className =
      "status-badge px-3 py-1 rounded text-xs font-bold bg-red-50 text-red-600";
    rejectedCount++;
    document.getElementById("rejected-count").innerText = rejectedCount;
  }

  if (actionButtons) actionButtons.style.display = "none";

  const activeBtn = document.querySelector(".filter-btn.bg-blue-600");
  filterJobs(activeBtn.id.replace("btn-", ""));
}

function deleteJob(button) {
  const card = button.closest(".job-card");
  const status = card.getAttribute("data-status");

  if (status === "interview") {
    interviewCount--;
    document.getElementById("interview-count").innerText = interviewCount;
  } else if (status === "rejected") {
    rejectedCount--;
    document.getElementById("rejected-count").innerText = rejectedCount;
  }

  card.remove();

  updateCounts();

  const activeBtn = document.querySelector(".filter-btn.bg-blue-600");
  filterJobs(activeBtn.id.replace("btn-", ""));
}

function filterJobs(filter) {
  const cards = document.querySelectorAll(".job-card");
  const buttons = document.querySelectorAll(".filter-btn");
  const noDataBox = document.getElementById("no-data");

  buttons.forEach((btn) => {
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("text-slate-600");
  });
  document
    .getElementById(`btn-${filter}`)
    .classList.add("bg-blue-600", "text-white");

  let visibleCount = 0;
  cards.forEach((card) => {
    const cardStatus = card.getAttribute("data-status");
    if (filter === "all" || cardStatus === filter) {
      card.classList.remove("hidden-card");
      visibleCount++;
    } else {
      card.classList.add("hidden-card");
    }
  });

  if (visibleCount === 0) noDataBox.classList.remove("hidden");
  else noDataBox.classList.add("hidden");
}

updateCounts();
