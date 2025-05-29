#Netflix-FullStackTakeHome

![](./assets/UI.gif)

## Setup

The following steps are under the impression you already have the following dependencies installed:
- [NodeJS](https://nodejs.org/en/download)

1. Clone GitHub Package `git clone https://github.com/willsower/Netflix-FullStackTakeHome.git`
2. Get into the project `cd Netflix-FullStackTakeHome`
3. In the root directory run `npm run install-all` to install all dependencies in the root and sub directories (client/server)
4. In the `/server` directory, create a `.env` file and add your Yelp API Key under the alias `YELP_API_KEY=api-key-here`
5. Run the application with `npm run dev` in the root directory
6. Access the app running `http://localhost:5173/` in your browser

By default, the client runs on `localhost:5173` (Vite), and the Express backend runs on `localhost:3001`

## Overview

This project utilizes the [Yelp Business Search API](https://docs.developer.yelp.com/reference/v3_business_search). You can retrieve your developer key from this site after logging in.

**Frontend**
- React / Vite
- Material UI

**Backend**
- NodeJS/Express Server

## What I focussed On

- Backend Design: Focussed on server mapping. (e.g., Models/Request/Response from Yelp API -> My Server <--> UI Client)
- Modularity: Tried to maintain modularity throughout my code. Avoided hardcoding (e.g., didn't tie everything to "Boba") in case in future we want to update our search params
  - Made common re-usable components such as the Select Input component (can be used for multi select if needed, single select, and the sort that we have here)
- UI/UX: Initially wasexploring DataGrid MUI/Card Layouts. Realized it limited a lot of the user experience and wasn't very clean (saw inspiration from other websites like the yelp or google maps search).
- Created mock data in the `__mocks__` folder for my own testing (no time for UTs sadly, just user testing on my end)
- Did my best in thinking about my commits, and commit messages (I always do conventional commits, but will align with whatever team standards there are)
 
## TradeOffs

- MUI Data Grid vs Custom List View: Data Grid would have sped up my development so I could'vde focussed on the additional features below (in the I did not complete). But quality > quantity and I thought DataGrid was clunky for this use case (e.g., custom list for better user experience and flexibility since it's easier for cursor based pagination instead of clicking next/back on data grid)
- Folder structure in Server...I think DDD (Domain Driven Design) is becoming more popular these days and having all your files within the scope of a sub folder (same with UI). I didn't think this was necessary for the scope of this project so maintained the normal file structure you would see (e.g., controllers, routes, services)
- Netflix Office Display (Radio Buttons vs DropDown): May not be a big thing but I would probably have it be a search for location long term. I thought radio buttons would be okay since it's only three but wouldn't scale. To stay in the confines of the problem decided to create a modular select input instead so it could be reused (which is more scalable than a radio)
- Reset offset on filter change & sort change vs keeping offset: Decided to reset on this to keep things simple. I think maybe for sort it might be good to keep the amount, however this could be discussed as a requirement down the road.

## Things I Noted But Did Not Complete

These are the things I would have liked to add but didn't due to the 4 hour time limit.

- Having components ready for internationalization and localization (e.g., reduce hard coded strings and template strings for this)
- Styled (MUI term) maybe could have them in dedicated files (probably goes with having more time for the styling)
- Ensuring components were accessibility compliant (e.g., can be accessed properly and have screen readers view)
- Local Storage on the filters: This wasn't necessarily a requirement but it would be something I would've asked if the end user would want their settings saved (which could be done via local storage based on url)
- Documentation within code: Some common components should contain at the very least tsdocs (such as SelectInput on usability). I use comments sparingly because I believe code should be readable without, however when it's a common component that acts as a lib, then I need to add
- Additional information for the components by calling BusinessDetails (for description) of place (this probably would need to be a batch call or Promise.all)
- Better error handling, where API would display error messaging on the UI (this could be done via Snackbar or Alert component in React and I probably would've made a useMessage hook for displaying)
  - 404 Page since if user goes to any other page than `/` it will just error
- Unit Tests via Jest were skipped, Integration tests via Cypress were skipped
- Having a proper Mono Repo setup (e.g., Using Lerna or some other monorepo framework). However usually on scale I opt into seperating the repositories out from backend, frontend, and some sort of shared (so we don't have the duplicate types/interfaces between the two repositories)
- Have 2x `any's` in the `transformers` folder, this is more because it's the response of the API Request from yelp, however would like to see if there was a library or something I could do to use instead of any
- More time on styling (I think the UI could be a little cleaner, but it gets the message across and I'm proud of what I did within the 4 hours. It goes by fast!!)
