
class Bike(object):
    def __init__(self, price=0, max_speed=0, miles=0):
        self.price=price
        self.max_speed=max_speed
        self.miles=miles

    def displayInfo(self):
        print "Here is your price max speed and miles driven"
        print str(self.price) + " " + str(self.max_speed) + " " + str(self.miles)

    def ride(self):
        print "you rode for 10 miles"
        self.miles += 10
        return self

    def reverse(self):
        print "you rode backwards did that role back the miles?"
        self.miles -= 5
        self.displayInfo()
        return self

tricycle = Bike(10,12,15)
tricycle.ride().ride().ride().reverse().reverse()
# tricycle.ride()
# tricycle.ride()
# tricycle.reverse()

bicycle = Bike()
bicycle.ride().ride().ride().reverse().reverse()
# bicycle.ride()
# bicycle.ride()
# bicycle.reverse()
# bicycle.reverse()

""" to avoid negative values of miles throw an if this.miles >0 before the -= """
