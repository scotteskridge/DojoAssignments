class Animal(object):
    """docstring for Animal."""
    def __init__(self, name="Empty", health = 100):
        self.name = name
        self.health = health
        # self.displayHealth()

    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayStatus(self):
        print self.health
        print self.name

# modi = Animal("Modi")
# modi.walk()
# modi.displayHealth()
#
# animal=Animal("walkingAnimal")
# animal.walk().walk().walk().run().run().displayHealth()

class Dog(Animal):
    """docstring for Dog."""
    def __init__(self, name):
        super(Dog, self).__init__()
        self.name = name
        self.health += 50
    def petTheDog(self):
        self.health += 5
        return self

class Dragon(Animal):
    """docstring for Dragon."""
    def __init__(self, name):
        super(Dragon, self).__init__()
        self.name=name
        self.health += 70
    def fly(self):
        self.health -= 10
        return self
    def displayStatus(self):
        super(Dragon, self).displayStatus()
        print "I'm a dragon"

class Egg(Dragon):
    def __init__(self, name):
        super(Dragon, self).__init__()
        self.name=name

    def displayStatus(self):
        super(Egg, self).displayStatus()
        print "But I'm little"
        return self


theEgg = Egg("eggy")
theEgg.displayStatus()

# myanimal = Animal("It")
# myanimal.displayStatus()


# modi = Dog("modi")
#
# modi.displayStatus()
# myDragon = Dragon("toothless")
# myDragon.walk().walk().walk().run().run().fly().fly().displayStatus()
# modi.walk().walk().walk().run().run().petTheDog().displayHealth()
# modi.fly() this won't work
