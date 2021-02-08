# Observations
- It looks like all of the API calls are being made on page load.  You could look into storing the data of the api call into a variable, and then only update the UI when one is chosen.
- The Random recipe data will change over time, so you will need to fetch data for that one more often, but the UI could be handled the same as the other API calls (I put that common logic into a function for ya).
- A Random Recipe is being fetched on the click of the close button, not when the random button is clicked, I can see how that might be by design though.

## Overall suggestions for improvement
- You could create a function that does the fetch to the API with a url (string parameter) to return the data.
- I'd separate the fetch of data from the UI updating code.  That way you don't have to always call the api when you want to update the UI.
- The flicker of the image is caused by clicking the close button, because it updates the UI.  When you select a new one from the dropdown it briefly shows that random one, then loads the selection