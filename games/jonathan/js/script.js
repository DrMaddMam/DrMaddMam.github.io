function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let level = "0";

function load() {
    level = getCookie("level");
    if (level == "1") {
        window.location.href = "../";
    }
}

let responsesI = 0;
let done = false;
let dblClickCheck = false;

async function saySmt() {
    if (!done) {
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
        done = true;
        return;
        }
    }
    else if (!dblClickCheck) {
        document.getElementById("middleText").textContent = "Goodbye";
        await sleep(2000);
        await setCookie("level", "1", 1);
        window.location.href = "../";
    }
}