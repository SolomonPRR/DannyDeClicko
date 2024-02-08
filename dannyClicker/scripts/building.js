class Building {
    constructor(buttonId, buildingType, basePrice, baseCPS) {
        this.basePrice = basePrice;
        this.price = basePrice;
        this.baseCPS = baseCPS;
        this.actualCPS = baseCPS / (1000 / tickRate);
        this.button = document.getElementById(buttonId);
        this.buildingType = buildingType;
    }

    basePrice;
    price;
    actualCPS;
    baseCPS;
    currentCPS = 0;
    button;
    buildingType;
    buildingCount = 0;

    // Triggered when the player buys a Building
    purchase() {
        score -= this.price;
        this.buildingCount++;
        this.price = Math.ceil(this.basePrice * 1.15 ** this.buildingCount);
        this.currentCPS += this.actualCPS;
        overallCPS += this.baseCPS;
        overallCPS = parseFloat(overallCPS.toFixed(1));
        this.clickRate = 1000 / this.currentCPS;
    }

    // Updates the button, grey if can't afford, price, number owned, etc
    buttonState() {
        this.button.disabled = score < this.price;
        this.button.innerHTML =
            'Build a ' +
            this.buildingType +
            '!<br />+' +
            this.baseCPS +
            ' CPS<br />Price: ' +
            this.price +
            '<br />[Owned: ' +
            this.buildingCount +
            ']';
    }
}
