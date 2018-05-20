class Car {
    constructor(cName, cYear, cSpeed, cOwner, cPeople, cDoors) {
        this.brand = cName;
        this.year = cYear;
        this.speed = cSpeed;
        this.owner = cOwner;
        this.people = cPeople;
        this.doors = cDoors;
    }
    getCarInfo() {
        document.write("Brand: " + this.brand + "  Year: " + this.year + "  Speed: " + this.speed + "km/h" + "  Owner: " + this.owner + "  Doors: " + this.doors + "<br/>");
    }
}

class Taxi extends Car {
    constructor(cApoint, cBpoint) {
        super("Bentley", 2004, 100, "John Doe", 4, 4);
        this.apoint = cApoint;
        this.bpoint = cBpoint;
    }
    getTaxiInfo() {
        document.write("Brand: " + this.brand + "  Year: " + this.year + "  Speed: " + this.speed + "km/h" + "  Owner: " + this.owner + "  Doors: " + this.doors + " From:" + this.apoint + " To:" + this.bpoint + "<br/>");
    }
}

class Truck extends Car {
    constructor(cWeight, cLength, cWidth, cHeight) {
        super("Mercedes", 2004, 100, "John Doe", 2, 2);
        this.weight = cWeight;
        this.length = cLength;
        this.width = cWidth;
        this.height = cHeight;
    }
    getTruckInfo() {
        document.write("Brand: " + this.brand + "  Year: " + this.year + "  Speed: " + this.speed + "km/h" + "  Owner: " + this.owner + "  Doors: " + this.doors + " Weight:" + this.weight + "tones" + " Lenght:" + this.length + "cm" + "Width: " + this.width + "cm" + "Height" + this.height + "cm"  + "<br/>");
    }
}

class Bus extends Car {
    constructor(cType) {
        super("Mercedes", 2004, 60, "John Doe", 40, 3);
        this.type = cType
    }
    getBusInfo() {
        document.write("Brand: " + this.brand + "  Year: " + this.year + "  Speed: " + this.speed + "km/h" + "  Owner: " + this.owner + "  Doors: " + this.doors + "Type:" + this.type + "<br/>");
    }
}

var bentley = new Car("Bentley", 2004, 100, "John Doe", 4, 4);
bentley.getCarInfo(bentley);

var taxi = new Taxi("Taxopark", "Park Gorkogo");
taxi.getTaxiInfo(taxi);

var truck = new Truck(8, 300, 200, 250);
truck.getTruckInfo(truck);

var bus = new Bus("intercity");
bus.getBusInfo(bus);