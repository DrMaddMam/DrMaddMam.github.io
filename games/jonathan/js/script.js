import { getCookie } from "../../../cookies.js";
import { setCookie } from "../../../cookies.js";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let level = "0";
let responsesI = 0;
let done = false;
let dblClickCheck = false;

window.addEventListener("load", () => {
    load();
    document.getElementById("speakBtn").addEventListener("click", saySmt);
});

function load() {
    level = getCookie("level");
    if (level == "1") {
        window.location.href = "../";
    }
}

async function saySmt() {
    if (!done) {
        let responses = [
            "Hello, I'm Jonathan!",
            "Hi again!",
            "Hi!",
			"Hi?",
            "Can you stop?",
            "Go away!",
            "Stop it!",
            "Leave me alone.",
			"Why do you keep me here.",
			"Why are you doing this to me?",
			"Please let me go.",
            "...",
            ""
        ];
        document.getElementById("middleText").textContent = responses[responsesI];

        if (responsesI < responses.length - 1) {
            responsesI++;
        } else if (responsesI === responses.length - 1) {
            document.getElementById("speakBtn").hidden = true;
            responsesI = 0;
            await sleep(7500);
            document.getElementById("speakBtn").hidden = false;
			document.getElementById("speakBtn").textContent = "Let Go.";
            done = true;
            return;
        }
    } else if (!dblClickCheck) {
        dblClickCheck = true;
        document.getElementById("middleText").textContent = "Goodbye";
        await sleep(2000);
        await setCookie("level", "1", 1);
        window.location.href = "../";
    }
}
