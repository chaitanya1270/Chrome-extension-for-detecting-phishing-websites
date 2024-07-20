Chrome Extension for Detecting Phishing Websites

Project Overview
The Phishing Detection Chrome Extension aims to classify every browsed URL under either the phished or non-phished category upon page load, thereby alerting the user of any malicious activity and preventing intrusion.

Features
Real-time Phishing Detection: Analyzes URL features and predicts if the site is phishing.
Alert System: Notifies users with alerts when a phishing site is detected.
Multiple Feature Analysis: Evaluates URLs based on various criteria like length, presence of special characters, and domain similarity.
Machine Learning Models: Utilizes neural networks, random forests, and support vector machines for prediction.


Files and Directories
background.js: Contains the background script for the Chrome extension, handling messages and executing scripts.
content.js: Injected into web pages to collect URL features and send them for analysis.
manifest.json: Metadata and permissions for the Chrome extension.
phishing_detection_models.py: Python script containing machine learning models for phishing detection.
Dataset.csv: Sample dataset used for training the machine learning models.
Target_Labels.csv: Labels corresponding to the dataset.


Installation and Usage
Prerequisites
Google Chrome browser
Python 3.x installed (for model training)
Required Python libraries: scikit-learn, pandas, numpy

Setting Up the Extension
1.Clone the Repository
    git clone https://github.com/chaitanya1270/Chrome-extension-for-detecting-phishing-websites.git

2.Load the Extension in Chrome
Open Chrome and go to chrome://extensions/.
Enable "Developer mode" using the toggle switch in the top right.
Click "Load unpacked" and select the directory containing the manifest.json file.

Training the Machine Learning Models
1.Install Dependencies
    pip install scikit-learn pandas numpy

2.Run the Training Script
    python phishing_detection_models.py
This will train the neural network, random forest, and SVM models, displaying accuracy and performance metrics.


Using the Extension
Once the extension is loaded and enabled in Chrome, it will automatically analyze URLs as you browse.
If a phishing website is detected, you will receive an alert notification.

Test URLs
To verify the extension, you can use the following test URLs:

1. "../Engineering Module/Phishing.html" (Test phished page created)
2.PhishTank (List of phished sites available)

Machine Learning Algorithms
1.Support Vector Machine (SVM)
2.Neural Networks
3.Random Forest
The SVM trained persistent model has been passed to the engineering module for phishing detection.

Engineering Modules
1. manifest.json
It provides Chrome with the basic information about the extension like name, permissions, associated scripts, and files.

2. content.js
It runs in a separate unprivileged JavaScript environment and has complete access to the DOM. Here, the trained SVM model (weights calculated in ./ML Algorithm Evaluation/run_algorithms.py) has been used as a persistent model to classify websites.

Feature Extraction Functions
    isIPInURL(): Checks if an IP address is present in the URL.
    isLongURL(): Determines if the URL length is suspiciously long.
    isTinyURL(): Checks if the URL length is very short.
    isAlphaNumericURL(): Checks for the presence of special characters like '@'.
    isRedirectingURL(): Analyzes if the URL contains multiple redirects.
    isHypenURL(): Checks for hyphens in the URL.
    isMultiDomainURL(): Counts the number of subdomains.
    isFaviconDomainUnidentical(): Compares the domain of the favicon to the main URL.
    isIllegalHttpsURL(): Checks for illegal use of HTTPS.
    isImgFromDifferentDomain(): Analyzes if images are loaded from different domains.
    isAnchorFromDifferentDomain(): Analyzes if anchor tags lead to different domains.
    isScLnkFromDifferentDomain(): Checks if script and link tags come from different domains.
    isFormActionInvalid(): Analyzes form action URLs.
    isMailToAvailable(): Checks for 'mailto' links.
    isStatusBarTampered(): Looks for status bar tampering.
    isIframePresent(): Checks for the presence of iframes.
The evaluated feature vector, further passed to predict(data) function, determines the prediction for the website.

3. background.js
In case we need access to external extensions or APIs, it is necessary to create means of communication between content.js and privileged parts of the extension. This interaction is termed as message passing, which allows different components of the extension to collaborate.

Note: The extension validates every URL call, i.e., in case of URL redirection, it will assess every intermittent URL hit as well.

For any queries, please contact [nagachaitu1270@gmail.com].
