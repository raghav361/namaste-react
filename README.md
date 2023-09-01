# Namaste React

# Parcel

- DEV Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support for Older Browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - Remove Unused Code
- Different DEV and PROD Bundles

# Food Delivery App

Header

- Logo
- Nav Items
  Body
- Search
- Restaurant Container
- Restaurant Card
  - Image
  - Name of Restaurant, Star, Rating, Cuisine, Delivery Time
    Footer
- Copyright
- Links
- Address
- Contact

# Export/Import

- Default Export/Import

  - export default Component;
  - import Component from "path";

- Named Export/Import
  - export const Component;
  - import {Component} from "path";

# React Hooks

- Normal JS Utility Functions

  - useState()

    - Local State Variable - Super Powerful State Variables in React.
    - Whenever state variables are updated, React triggers a reconciliation cycle (re-renders the component).
    - Never create the state variables outside of the component.
    - Always call the useState() inside the component.
    - Always try to call useState() on the top of the component.
    - Never call the useState() inside an condition/loops/functions.

  - useEffect()
    - If no dependency array is present, then useEffect() is called on every render.
    - If a dependency array is present but empty, then useEffect() is called on the initial render only. (i.e just once)
    - If the dependency array is [buttonName], then useEffect() is called every time "buttonName" is updated.

# Routing

- Client Side Routing
- Server Side Routing
