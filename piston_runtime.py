# This script is used to retrieve the runtimes from the Piston API
import requests
# Define the endpoint URL
url = "https://emkc.org/api/v2/piston/runtimes"

# Send a GET request
response = requests.get(url)

if response.status_code == 200:
    runtimes_data = response.json()
    
    # Print the details for each runtime
    for runtime in runtimes_data:
        print(f"Language: {runtime['language']}, Version: {runtime['version']}")
else:
    print(f"Failed to retrieve data. Status Code: {response.status_code}")