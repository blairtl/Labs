import time
import datetime
print("All inputs should be their numerical values (i.e. July would be 7).")
print(" ")
print("What day of the month were you born?")
BirthDay = int(input())
print("What month were you born?")
BirthMonth = int(input())
print("What year were you born?")
BirthYear = (input())

from datetime import datetime

Age = datetime(int(BirthYear), int(BirthMonth), int(BirthDay))

delta = datetime.now() - Age

seconds = int(int(delta.days * 24 *60 *60)+int(delta.seconds))

print("Your age in seconds is: %d" % (seconds))





