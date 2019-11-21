import json
import requests

print("")
print("This is the print before the api is called.")
print("")

r = requests.get('http://localhost:3000/')
data = r.json()

print("")
print("This is the print after the api is called.")
print("")

print(data('name')[0]['color'])

pause 