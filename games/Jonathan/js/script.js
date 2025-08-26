function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let responsesI = 0;

async function saySmt() {
  let responses = ["Hello, I'm Jonathan!", "Hi again!", "Hi?", "Can you stop?", "Go away!", "Stop poking me.", "Leave me alone.", "...", ""];
  document.getElementById("middleText").textContent = responses[responsesI];
  if (responsesI < responses.length) {
    responsesI++;
  }
  else if (responsesI = responses.length) {
    document.getElementById("speakBtn").hidden = true;
    responsesI = 0;
    await sleep(10000);
    document.getElementById("speakBtn").hidden = false;
  }
}