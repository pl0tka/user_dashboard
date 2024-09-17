# User Management Table

This application displays a table of user data, with filtering options for each column. It uses Redux Toolkit for state management, RTK Query for data fetching, and styled-components for styling.

## Challenges and Design Decisions

One of the key challenges I faced was managing multiple filters in Redux. Initially, I created separate states for each of the four filter inputs, but this approach proved to be inefficient and not scalable. To address this, I refactored the state management to use a single `filterData` object within Redux.

This new approach simplified the state management by consolidating all filter inputs into one object, which allowed for more efficient handling of the filters. Not only did this make the code more maintainable, but it also made adding new filters much easier. The updated implementation supports dynamic filtering based on any property, streamlining both current and future filter integrations.

Additionally, I separated the rendering and error handling logic into distinct components. This approach enhances the scalability and maintainability of the application by isolating concerns. Components like `LoadingPage` and `ErrorPage` can be reused across different parts of the application, making it easier to manage and extend as new features are added.
