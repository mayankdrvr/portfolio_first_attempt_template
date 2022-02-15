# React Portfolio

My first attempt at my web development responsive portfolio website in React JS. The objective of this project was to learn React JS. This project is hosted live on https://react-portfolio-mayank.netlify.app/

Project Specifications-
- Fully responsive web application using media queries.
- Displays Home, About, Projects, Resume and Contact sections.
- Projects section has information on technologies used and links to source code and deployed URL.
- Contact section has github & linkedin profiles link along with link to directly open the compose email section of the site administrator's gmail account.
- About section has links to various online programming profiles.

# Demo

![react-portfolio-mayank](https://user-images.githubusercontent.com/87348490/149490187-69ccd48c-9871-4fd0-8a6d-ad8babcd04bd.gif)

## Technologies Used

<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>

## Google Lighthouse webpage perfomance report 

The full report can be accessed at https://drive.google.com/file/d/18R8RN0lhhP77NQzVeVURn5bFSIUpJjR0/view?usp=sharing

![react-portfolio-mayank](https://user-images.githubusercontent.com/87348490/149520217-e1309919-56a3-4c52-83df-787ad0b15fc4.png)

## Lessons Learned

- Making website responsive using media queries & CSS Grid properties like flex. 
- Creating single page application & deployment on Netlify.

## Authors

[@mayankdrvr](https://www.github.com/mayankdrvr)

## Run on Local System

- Go to Code->Download ZIP to download the .zip file. Just extract the .zip file and open the extracted folder in VS Code editor.
- Open a new terminal in the root(../../portfolio_first_attempt_template-main/) folder.
- To install libraries & dependencies 
```bash
  npm install
```
- To run the project on http://localhost:3000/
```bash
  npm start
```
## Deployment on Netlify

- After installing libraries & dependencies using the above commands, run this command in the terminal from the root folder of the project in your local system
```bash
  npm run build
```
- A folder titled 'build' will be created in your root folder
- Login to your netlify account(https://netlify.com) and go to https://app.netlify.com/drop
- Drag & drop the build folder and wait for a few seconds for deployment to complete and live URL to be generated.

## License

[MIT](https://choosealicense.com/licenses/mit/)






