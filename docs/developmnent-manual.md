# Development manual

This is the development manual for our project of Tic Tac Toe. The classic paper game of a 3x3 grid, where each player takes turn in marking open spaces with an 'X' or an 'O'. This project was done by the group Stöðuvælamerðir for a course in Software Engineering at Reykjavik University. The source control client is Github.

Everyone can enjoy the game on their browser [here](https://glacial-inlet-92555.herokuapp.com/)

### Build Enviroment
To run the game locally you have to download a zip of the [github repository](https://github.com/Stoduvaelamerdir/TicTacToe) or clone the directory to your own computer with any compatible github tool. 

Then you have to install Node from https://nodejs.org/en/
- Here is additional information on how to install node for [Windows](https://blog.teamtreehouse.com/install-node-js-npm-windows) or [Mac](https://blog.teamtreehouse.com/install-node-js-npm-mac).

Finally to be able to run the game you need to go to the root of the folder in a command tool and execute these commands:
```sh
    $ npm install
    $ npm run build
```

More info is available in the [Administrator Manual](https://github.com/Stoduvaelamerdir/TicTacToe/blob/master/docs/admin-manual.md)

### Tests
The whole project was built around tests and then making work on it as a part of continuous integration. Therefore there are multiple test enviroments built within the program. Jest and Supertest are used for testing for CircleCI. That way test are done everytime a new version is pushed to Github. It then publishes all the test on the [site](https://circleci.com/gh/Stoduvaelamerdir/TicTacToe)