(function() {
    'use strict';

    const problematicIframes = new Set();

    function checkAndUpdateElements(doc, pattern, regex) {
        // Select all elements with IDs starting with the given pattern
        const elements = doc.querySelectorAll(`[id^="${pattern}"]`);
        
        elements.forEach(element => {
            // Extract the number from the ID
            const match = element.id.match(regex);
            if (match) {
                const number = match[1];
                const labelId = `label-${pattern}${number}`;

                // Check if the label already exists
                if (!element.querySelector(`#${labelId}`)) {
                    // Output the ID to the console
                    console.log(`Element ID: ${element.id}, Number: ${number}`);
                }
            }
        });

        // Check nested iframes
        const iframes = doc.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            if (problematicIframes.has(iframe)) {
                return;
            }
            try {
                const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                if (iframeDocument) {
                    checkAndUpdateElements(iframeDocument, pattern, regex);
                }
            } catch (e) {
                problematicIframes.add(iframe);
            }
        });
    }

    function checkIframes() {
        // Select the top-level iframe within the div with id "forms-iframe"
        const topLevelIframe = document.querySelector('#forms-iframe iframe');
        if (topLevelIframe) {
            if (problematicIframes.has(topLevelIframe)) {
                return;
            }
            try {
                const iframeDocument = topLevelIframe.contentDocument || topLevelIframe.contentWindow.document;
                if (iframeDocument) {
                    checkAndUpdateElements(iframeDocument, 'role-', /^role-(\d+)/);
                    checkAndUpdateElements(iframeDocument, 'form-content-', /^form-content-(\d+)/);
                }
            } catch (e) {
                problematicIframes.add(topLevelIframe);
            }
        } else {
            console.log("No iframe found within the div with ID 'forms-iframe'");
        }
    }

    // Call the function once
    checkIframes();
})();
