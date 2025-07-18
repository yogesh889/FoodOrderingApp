
/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -RestaurantContainer
 *      -RestaurantCard
 *          -img
 *          -name of res, star rating, cuisine, delevery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 *
 */

/**
#Redux Toolkit 
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- slice (cartSlice)
- dispatch(action)
- selector
*/

# Types of testing(developer)
 - Unit testing
 - Integration testing
 - End to End testing = e2e testing

# Setting up testing in out app
 - Install React Testing Library
 - Installed jest
 - Install Babel Dependencies
 - config Babel
 - config pacel config file to disable default Babel transpilation
    - parcel also use Babel and we are trying to config Babel according to us. so, ther
      there will be conflict between Babel and parcel
 - jest configuration  ---  npx jest --inti
 - Install jsdom library
 - Install @babel/preset-react - to make jsx work in test cases
 - Include @babel/preset-react inside the Babel config
 - Install @testing-library/jest-dom