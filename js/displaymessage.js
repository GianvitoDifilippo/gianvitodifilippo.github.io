function displayMessage(text, x, y, element) {
    let newMessage = message.cloneNode(false);
    document.body.appendChild(newMessage);
    newMessage.textContent = text;
    let xPos = 0;
    let yPos = 0;
    if (element) {
        msgWidth = newMessage.getBoundingClientRect().width;
        msgHeight = newMessage.getBoundingClientRect().height;
        var rect = element.getBoundingClientRect();
        xRules = x.split(',');
        yRules = y.split(',');
        xRules.forEach(rule => {
            let ruleNum = parseFloat(rule);
            if (isNaN(ruleNum)) {
                switch (rule) {
                    case 'center-left':
                        xPos += rect.left + rect.width * 0.5;
                        break;
                    case 'center-right':
                        xPos += rect.left + rect.width * 0.5 - msgWidth;
                        break;
                    case 'center':
                    case 'center-center':
                        xPos += rect.left + (rect.width - msgWidth) * 0.5;
                        break;
                    case 'right-left':
                        xPos += rect.right;
                        break;
                    case 'right-center':
                        xPos += rect.right - msgWidth * 0.5;
                        break;
                    case 'right':
                    case 'right-right':
                        xPos += rect.right - msgWidth;
                        break;
                    case 'left-center':
                        xPos += rect.left - msgWidth * 0.5;
                        break;
                    case 'left-right':
                        xPos += rect.left - msgWidth;
                        break;
                    case 'left':
                    case 'left-left':
                    default:
                        xPos += rect.left;
                        break;
                }
            }
            else {
                xPos += ruleNum;
            }
        });
        yRules.forEach(rule => {
            let ruleNum = parseFloat(rule);
            if (isNaN(ruleNum)) {
                switch (rule) {
                    case 'center-top':
                        yPos += rect.top + rect.height * 0.5;
                        break;
                    case 'center-bottom':
                        yPos += rect.top + rect.height * 0.5 - msgHeight;
                        break;
                    case 'center':
                    case 'center-center':
                        yPos += rect.top + (rect.height - msgHeight) * 0.5;
                        break;
                    case 'bottom-top':
                        yPos += rect.bottom;
                        break;
                    case 'bottom-center':
                        yPos += rect.bottom - msgHeight * 0.5;
                        break;
                    case 'bottom':
                    case 'bottom-bottom':
                        yPos += rect.bottom - msgHeight;
                        break;
                    case 'top-center':
                        yPos += rect.top - msgHeight * 0.5;
                        break;
                    case 'top-bottom':
                        yPos += rect.top - msgHeight;
                        break;
                    case 'top':
                    case 'top-top':
                    default:
                        yPos += rect.top;
                        break;
                }
            }
            else {
                yPos += ruleNum;
            }
        });
        xPos += window.scrollX;
        yPos += window.scrollY;
        newMessage.style.zIndex = getComputedStyle(element).zIndex;
    }
    else {
        xPos = x;
        yPos = y;
        newMessage.style.zIndex = 1000;
    }
    newMessage.style.left = `${xPos}px`;
    newMessage.style.top = `${yPos}px`;
    newMessage.addEventListener('animationend', () => newMessage.remove());
    return newMessage;
}