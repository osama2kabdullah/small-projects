# Jogging Tracker App
This is a calendar-based tracking app that allows you to keep track of your tasks and events. The app uses the `dyCalendar` package, which has been modified to suit the app's requirements. The app uses the filesystem for database storage, which eliminates the need for any third-party authentication. Simply clone the repository and run it locally. This approach is more secure than online apps, as the app runs only on your local development environment.

## Installation
1. Download this zip file- `Jogging-app.zip` or `Jogging-app.tar.gz` from this github package link https://github.com/osama2kabdullah/small-projects/releases/tag/v0.1.0
Install dependencies: npm install
2. Archive these file. This genarate a folder called `Calander`.
3. Navigate to the file. Invoke `npm install` from the root. It will install all the dependancies for client side and server side.

## Usage
1. Invoke `npm start`. It will start serve the app on http://localhost:3000. and the server api run on http://localhost:8080
2. You can click only today date in the calander. After click, the date replace with a tick mark.
3. And the click date will save in a file. So, you can see your previus day, that you clicked before.
4. The click cannot by undone. But you can undone by call API manually.
The API-
```
http://localhost:8080/data/<year>/<month>/<date>
```
5. In the API, You just need to specify the desired `date`.

## Dependencies
List any dependencies your app has, along with their versions.
```
Express.js v4.18.2
mongoDB v4.13.0
```

## File Structure
```
Calander/
  api/
    .data/
      *[date].json
    express.js
    package.json
  css/
    custom.css
    dycalendar.min.css
  js/
    deafult.js
    dycalendar.min.js
  assets/
    *icons
  index.js
  index.html
  package.json
  README.md
  .gitignore
  service-worker.js
  manifest.json
```

## Contributing
1. Fork the repository - https://github.com/osama2kabdullah/small-projects
2. Navigate to the `Jogging-tracker` folder from the root directory of cloned repo.
3. Invoke in the terminal `npm install`.
4. Make changes
4. Submit a pull request

## License
MIT License. Read the `LICENSE` file.
