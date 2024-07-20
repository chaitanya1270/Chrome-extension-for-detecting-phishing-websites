chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.prediction == 1) {
        chrome.scripting.executeScript({
            target: {tabId: sender.tab.id},
            func: () => alert("Warning: Phishing detected!!")
        });
    } else if (request.prediction == -1) {
        chrome.scripting.executeScript({
            target: {tabId: sender.tab.id},
            func: () => alert("No phishing detected")
        });
    }
});

function predict(data) {
    let weight = [
        0.333346292, -0.111200396, -0.777821806, 0.11105859, 0.389430647, 
        1.99992062, 0.444366975, -0.277951957, -0.0000600531647, 0.333200243,
        2.66644002, 0.666735991, 0.555496098, 0.0557022408, 0.222225591,
        -0.166678858
    ];
    let f = 0;
    for (let j = 0; j < data.length; j++) {
        f += data[j] * weight[j];
    }
    return f > 0 ? 1 : -1;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "checkPhishing") {
        let testdata = request.testdata;
        let prediction = predict(testdata);
        sendResponse({prediction: prediction});
    }
});
