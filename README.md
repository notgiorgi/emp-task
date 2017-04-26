You can also present your skills in the following:

- [x] Source code management - we use Git (Github, Bitbucket etc) - in case of using one, please provide an applicable URL where the solved task can be seen
> You're looking at one right now
- [ ] Styling tools (styled-components, SASS, CSS, etc)
- [x] State management (Redux/Flux, Mobx, HOCs, recompose..)
> I used Redux and HOCs
- [x] ES6 & ES7

## The task

Develop an application displaying dynamic tabular datasets using React.js and fetching data using the Github public api.

The app should render an `<input />` that is used to [search](https://developer.github.com/v3/search/) repositories. Consider:

- [x] On input change, make an API request to the Github API and get details of the user,
> Using redux thunk for async actions. If it was a big project, I'd prefer redux-saga

- [x] Do not make an API request if results are already stored
- [x] Do not fire requests as long as user is typing. Typically you should throttle requests so that when user types quickly, we fire one request with the latest input value instead of many.
> debounced using lodash

The table itself should be of the following structure:

| ID        | Repo Title         | Owner        | Stars | Created at |
| ---------:| ------------------ | ------------ | ----: | :--------: |
| 69101782  | react-native-fbads | callstack-io |   88  | 2016-09-24 |

The resulting table should show maximum 5 rows at once. 

Apart from that, please implement the following: (locally, not using API queries):
- [x] Pagination
- [x] Ability to control number of rows rendered (5/10/15/20)
- [x] Asc/desc sorting by every column
- [x] A persistence mechanism using e.g. localStorage is required (so it remembers last search and settings when we go back to the page)
> using redux-persist
- [ ] The row of the currently authenticated user (if any) should be highlighed. An user should be able to log in using a "Log in with GitHub" button
> I didn't quite get this. Rows are repositories, how can there be row of the current user?
> Also I didn't do "Login with github" button, as it required hooking up nodejs api and I think it was out of the scope of this task.
> I only did some dummy layout for this.

## Bonus points

Those are the tools and patterns we use on daily bases.

- [x] Using `eslint`. Please refer to the Airbnb [configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) that our team uses on daily basis.
- [ ] Using a type checker. We recommend `Flow` (or `TypeScript` if you prefer)
> I configured flow but didn't really use it very much. I like it though.
- [x] Testing your code. We recommend `Jest JS`
> I wrote tests for some components and reducers only, It was just matter of time.

- [x] Good README in terms of instructions for reviewers
- [x] It is better if you do not use a huge boilerplate so the reviewer can focus exclusively in your code. We recommend `create-react-app` or similar
