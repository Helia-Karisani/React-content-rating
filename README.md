
# React Content Rating 

This project is a React application that allows users to rate content using "Like" and "Dislike" buttons. It demonstrates dynamic state handling, class-based components, and real-time UI updates in response to user interaction.

## What I Did

- Cloned and adapted the IBM boilerplate for content rating.
- Built a class-based `ContentRating` component located in  
  [`src/Components/ContentRating.jsx`](src/Components/ContentRating.jsx)
- Styled the component using [`ContentRating.css`](src/Components/ContentRating.css)
- Integrated the component into the app via [`App.jsx`](src/App.jsx)

## Key Features

- Displays custom content that users can rate
- Handles button click events using arrow functions inside the component state
- Dynamically updates the count of:
  - Likes 
  - Dislikes 
  - Total Ratings 
- Uses `setState` to reflect real-time feedback in the UI

## Project Structure

```

src/
├── Components/
│    ├── ContentRating.jsx
│    └── ContentRating.css
├── App.jsx
├── App.css
└── index.css

````

## How to Run

1. Install dependencies:
   ```bash
   npm install
````

2. Preview the application:

   ```bash
   npm run preview
   ```

3. Open in browser at:

   ```
   http://localhost:4173

