class CommonActions {

    swipeLeftUntilElementFound(targetElement) {
        const screenSize = driver.getWindowSize();
        let midPointX = Number(screenSize.width * 0.7);
        let midPointY = Number(screenSize.height * 0.3);
        let endX = Number(midPointX - (screenSize.height * 0.3));
        let endY = Number(midPointY - (screenSize.height * 0.3));

        let elementXpath = targetElement.selector;
        let found = driver.findElements('xpath', elementXpath).length > 0;
        while (found == false) {
            driver.touchAction([
                { action: 'press', x: midPointX, y: midPointY },
                { action: 'wait', ms: 1000 },
                { action: 'moveTo', x: endX, y: midPointY },
                'release'
            ]);
            found = driver.findElements('xpath', elementXpath).length > 0;
        }
        let secondEndX = Number(midPointX - (screenSize.height * 0.15));
        driver.touchAction([
            { action: 'press', x: midPointX, y: midPointY },
            { action: 'wait', ms: 1000 },
            { action: 'moveTo', x: secondEndX, y: endY },
            'release'
        ]);

    }
}

module.exports = new CommonActions();