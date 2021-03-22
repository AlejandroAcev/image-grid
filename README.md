# Introduction

This project is a simple example of how to load a list of images using an external API.

For this case, the frontend part is created using [React](https://reactjs.org/) and as backend we are using [Picsum](https://picsum.photos/) as image provider.

You can find the project here: [repository](https://github.com/AlejandroAcev/image-grid)

You can see the result here: [project result](https://image-grid-deploy-op1iyu7kyce1.herokuapp.com/)

## How to use it

The main page is composed by a little form with a `Limit` field, a `Page` counter and a `Load` button.

- `Limit`: This field represents the number of images to be displayed per page
- `Page`: This number represents the current page in the pagination. Each page will return a different list of images. Every time you press the `+/-` button the page will load automatically without having to use the `Load` button
- `Load`: This button send the current pagination information to load the specified values

## Inconveniences

Currently the [Picsum API](https://picsum.photos/) does not return an url with a preview or low quality image when you call the list, so the `download_url` returns the path for the **full quality** image which decrease the performance for long image list. For this reason we recommended not to use more than 25 images per page.

## Technologies

This proyect was created using the following techonologies:

- [Create React App](https://github.com/facebook/create-react-app) as tool for the project creation
- [Node](https://nodejs.org/es/) as package manager
- [Yarn](https://yarnpkg.com/) as package manager
- [Heroku](https://heroku.com) as deploy service
- [Typescript](https://www.typescriptlang.org/) as main language for development
- [MaterialUI](https://material-ui.com/) as framework for the basic design and components
- [React Router](https://reactrouter.com/) as navigational component manager
- [i18next](https://react.i18next.com/) for use different languages
- [Git](https://git-scm.com/) as distributed control version
- [Github](https://github.com/) as hosting platform

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
