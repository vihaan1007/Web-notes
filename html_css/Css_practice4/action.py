class Circle:
    def __init__(self, r):
        self.r = r
    def Circumference(self):
        return 2 * 3.1415926535 * self.r
    def Area(self):
        return 3.1415926535 * (pow(self.r, 2))