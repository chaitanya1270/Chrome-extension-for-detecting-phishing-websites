# Phishing Detection Chrome Extension

## Project Overview

The **Phishing Detection Chrome Extension** aims to classify every browsed URL into either the "phished" or "non-phished" category upon page load. This helps alert users to potential malicious activity and prevent security breaches.

## Features

- **Real-time Phishing Detection**: Analyzes URL features and predicts if the site is phishing.
- **Alert System**: Notifies users with alerts when a phishing site is detected.
- **Multiple Feature Analysis**: Evaluates URLs based on criteria like length, special characters, and domain similarity.
- **Machine Learning Models**: Utilizes neural networks, random forests, and support vector machines for prediction.

## Files and Directories

- **`background.js`**: Contains the background script for handling messages and executing scripts.
- **`content.js`**: Injected into web pages to collect URL features and send them for analysis.
- **`manifest.json`**: Metadata and permissions for the Chrome extension.
- **`phishing_detection_models.py`**: Python script containing machine learning models for phishing detection.
- **`Dataset.csv`**: Sample dataset used for training machine learning models.
- **`Target_Labels.csv`**: Labels corresponding to the dataset.

## Installation and Usage

### Prerequisites

- Google Chrome browser
- Python 3.x (for model training)
- Required Python libraries: `scikit-learn`, `pandas`, `numpy`

### Setting Up the Extension

1. **Clone the Repository**
    ```bash
    git clone https://github.com/chaitanya1270/Chrome-extension-for-detecting-phishing-websites.git
    ```

2. **Load the Extension in Chrome**
    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable **"Developer mode"** using the toggle switch in the top right.
    - Click **"Load unpacked"** and select the directory containing the `manifest.json` file.

### Training the Machine Learning Models

1. **Install Dependencies**
    ```bash
    pip install scikit-learn pandas numpy
    ```

2. **Run the Training Script**
    ```bash
    python phishing_detection_models.py
    ```
   This will train the neural network, random forest, and SVM models, displaying accuracy and performance metrics.

### Using the Extension

Once the extension is loaded and enabled in Chrome, it will automatically analyze URLs as you browse. If a phishing website is detected, you will receive an alert notification.

### Test URLs

To verify the extension, you can use the following test URLs:

- **Test Phished Page**: `../Engineering Module/Phishing.html`
- **PhishTank**: [List of phished sites available](https://www.phishtank.com/)

## Machine Learning Algorithms

The extension employs various machine learning algorithms for phishing detection:

- **Support Vector Machine (SVM)**
- **Neural Networks**
- **Random Forest**

The SVM trained persistent model has been integrated into the engineering module for phishing detection.

## Engineering Modules

### `manifest.json`

Provides Chrome with basic information about the extension, including name, permissions, associated scripts, and files.

### `content.js`

Runs in a separate unprivileged JavaScript environment with full access to the DOM. This script uses the trained SVM model (weights from `./ML Algorithm Evaluation/run_algorithms.py`) for website classification.

#### Feature Extraction Functions

- **`isIPInURL()`**: Checks if an IP address is present in the URL.
- **`isLongURL()`**: Determines if the URL length is suspiciously long.
- **`isTinyURL()`**: Checks if the URL length is very short.
- **`isAlphaNumericURL()`**: Checks for special characters like '@'.
- **`isRedirectingURL()`**: Analyzes if the URL contains multiple redirects.
- **`isHypenURL()`**: Checks for hyphens in the URL.
- **`isMultiDomainURL()`**: Counts the number of subdomains.
- **`isFaviconDomainUnidentical()`**: Compares the domain of the favicon to the main URL.
- **`isIllegalHttpsURL()`**: Checks for illegal use of HTTPS.
- **`isImgFromDifferentDomain()`**: Analyzes if images are loaded from different domains.
- **`isAnchorFromDifferentDomain()`**: Analyzes if anchor tags lead to different domains.
- **`isScLnkFromDifferentDomain()`**: Checks if script and link tags come from different domains.
- **`isFormActionInvalid()`**: Analyzes form action URLs.
- **`isMailToAvailable()`**: Checks for 'mailto' links.
- **`isStatusBarTampered()`**: Looks for status bar tampering.
- **`isIframePresent()`**: Checks for the presence of iframes.

The evaluated feature vector is passed to the `predict(data)` function to determine the website’s classification.

### `background.js`

Handles communication between `content.js` and privileged parts of the extension using message passing. This is crucial for interacting with external extensions or APIs.

> **Note**: The extension validates every URL call, including intermittent URLs during redirection.

## Contact

For any queries, please contact: [nagachaitu1270@gmail.com](mailto:nagachaitu1270@gmail.com)
