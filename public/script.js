function sendFeedback() {
  fetch("/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      feedback: document.getElementById("feedback").value
    })
  }).then(() => loadFeedback());
}

function loadFeedback() {
  fetch("/feedback")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("list");
      list.innerHTML = "";
      data.forEach(f => {
        const li = document.createElement("li");
        li.innerText = `${f.name}: ${f.feedback}`;
        list.appendChild(li);
      });
    });
}

loadFeedback();
