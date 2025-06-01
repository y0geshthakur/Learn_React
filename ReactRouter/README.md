1. If you are rendering page App.jsx in your application, firstly wrap the `<App>` with BrowserRouter.

Routes, Route
1. Import Routes, Route in your App.jsx.
2. Create Route specifying path (link) and element (component).
3. Wrap all the routes with the Routes Tag.

Link
1. If you want to add a navbar like to redirect when clicked on a text, add a link tag with to attribute specifying the path.
2. On clicking the text, the page with the path will be rendered.

NavLink
1. It receives a class with active.
2. Tells weather the component is active or not. 
3. Can be used to style if a component is active.
4. Just replace Link with NavLink.
5. isActive ? bold : normal.

Navigate programmaticallys
1. If we want to go to a page on form submission or after some task is done, we can do this using useNavigate.
2. Import useNavigate from react-router-dom.
3. It returns a function which takes the path to go, as an argument.
4. <button onClick={() => navigate(-1)}>Home</button>
5. You can either pass the path or -1 to go directly back to the last page.

No Match
1. If a path does not match any known paths, we must display a warning page that will tell the user that this is incorrect path.
2. To do that make a component.
3. Create a Route with the path '*' meaning that if not path is matched this path will me rendered. Specify the NoMatch component in the element attribute.

Nested Routes
1. If we want that on clicking from a nav bar, some more nav links appear and we want only a portion of the UI should change and not the complete UI, but the path should change, we can do this using the nested routes.
2. Create a Route inside of a route. Suppose you add featured and new inside products, then Products component can and must import Outlet which allows this.
3. Specify Outlet Component where you want to render the sub components(featured and new).

Index Route
1. if we want that a sub component should be rendered at the parent level then we make use of the index route.
2. Instead of path, we write index.
3. Nested Routes
4. <Route index element={<FeaturedProducts/>}></Route>

Dynamic Routes
1. If we want that if the path is /1, /2, /3 ,... a particular page should be rendered, we won't manually add routes for all because there could be 100 such routes to be configured.
2. Instead what we will do is that we will make use of the Route Parameter.
3. If we want /users should display list of users and /users/1 should display user details, we will write inside the path='users/:userId'. Now whatever the userId we input, same page will be rendered. 
4. Strings are also allowed.
5. Also, if we have route defined or /admin, and we put parameter as admin, then the page will be loaded where we explicitly defined the route, not the dynamic route.

URL Params or useParams
1. If we want to extract the URL param, we make use of the useParams react router hook.
2. We import the useParam from react router dom.
3. It returns an object with the key value pairs of the parameters.
4. extract the userId (we mentioned this in the path='users/:userId').
5. Then we can use this userId based on our needs. Here we just display it.

useSearchParams
1. This is used to add an optional query string in the url.
2. Suppose we have to add filters in our application, we have two buttons 'Add Filter' and 'Reset Filter'.
3. On clicking Add Filter, only the active users should be visible and on clicking the reset filter, the filter should be removed and all the users should be displayed.
4. For this we make use of the useSearchParams hook. 
5. It is very similar to useState hook, it returns a variable storing the value of the filter and a function used to set the variable.
6. We make use of the get function to get the value of a filter and display content accordingly.

Relative Links
1. we have observed that use specify to='users' and not '/users', this is because if we use relative links, it will add the path to the nearest parent component. But if we use '/users' then it will add the path from the root of the page.
2. Hence we have to mention '/products/users', this can be very tedeious, so we make use of the Relative Links.

Lazy Loading
1. Import Dynamically => const LazyAbout = React.lazy(() => import('path')) (About should be exported default)
2. inside element={<Suspense fallback='Loading...'><LazyAbout/></Suspense>}
3. Fallback is the content that will be displayed till the function is getting loaded.

Authentication in React Router
1. 
