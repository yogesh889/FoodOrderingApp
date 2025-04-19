export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL = "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg";

export const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";
/* this is api is hardcoded lat and lng but still it is showing correct menu for different 
users or restaurant in my webapp because, Even though our MENU_API is hardcoded with a lat
and lng, what actuall determines the menu is the restaurantID we pass to the URL
⚫ Swiggy still serves the correct menu for restaurantID 12345, even if the location from banglore why?
➡️ Swiggy locaiton-specific info (like delivery time, distance, availability)
    Personal offers, avalibility, etc */