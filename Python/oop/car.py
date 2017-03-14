class Car(object):
    """docstring for Car."""
    def __init__(self, price=0, speed=0, fuel="Empty", mileage=0, tax = 0.12):

        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage

        if self.price > 10000:
            self.tax = 0.15
        self.tax = tax
        self.display_all()

    def display_all(self):
        print self.price
        print self.speed
        print self.fuel
        print self.mileage
        print self.tax
        print "-"*90

myexpCar= Car(20000)
myCar10 = Car(tax=0.25, mileage=100000)
myCar1 = Car(2000,35,"full",15)
myCar2 = Car(2000,5,"Not Full",15)
myCar3 = Car(2000,15, "Kind of Full", 95)
myCar4 = Car(2000,25,"Full", 25)
myCar5 = Car(2000,45,"Empty",25)
myCar6 = Car(200000000,35,"Empty", 35,0.25)
