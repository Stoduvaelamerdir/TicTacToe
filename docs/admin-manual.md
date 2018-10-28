# Administration manual
In this manual we will be covering systems used, required dependencies and common commands for administrative purposes. Before starting ensure you have accounts for the following systems; Github, CircleCI and Heroku and have installed NodeJS, Heroku and Npm on your local machine.

## Github

#### Cloning the repository
First you need to clone the Github repository to your local machine. This is most easily done through your operating systems relative CLI (Command Line Interface), Terminal for Mac/Linux and Git Bash or CommandPrompt for Windows.
Start by navigating to your desired storage directory. Documents will be used as an example.
```sh
    $ cd Documents/TicTacToe/
```

The git clone <repository-link> command will then clone the project into your local directory.
```sh
    $ git clone git@github.com:Stoduvaelamerdir/TicTacToe.git
```

#### Useful commands
Display all changes made since the last git commit.
```sh
    $ git status
```

Displays your current working branch
```sh
    $ git branch
```

Change current working branch
```sh
    $ git checkout <branch_name>
```

Add files to your planned commit. Using . in place of a filename will add all changed files.
```sh
    $ git add <filename>
```

Discard files from the planned commit.
```sh
    $ git checkout <filename>
```


Commit your changes to the local repository.
```sh
    $ git commit -m "<COMMIT_EXPLANATION>"
```

Push the commit to the current working branch of the Github repository.
```sh
    $ git push
```

Pull changes from Github to your local repository.
```sh
    $ git pull
```

### Node.JS
#### Setup
The Node.js installer can be downloaded from the Nodejs website. https://nodejs.org/en/
Confirm your installation with the following command.
```sh
    $ node --version
```

### NPM
NPM should come installed with NodeJS so if you've got NodeJS you should have NPM. If not please refer to the Node.js section.
Confirm your installation with the following command.
```sh
    $ npm --version
```

This command installs and updates all required dependencies for the program.
```sh
    $ npm install
```

### Heroku
#### Setup

Installing heroku can be simply done through npm. If you dont have NPM installed please refer to the sections above.
```sh
    $ npm install heroku
```

Confirm your installation with the following command.
```sh
    $ heroku --version
```

### CircleCI
CircleCI handles continuous integration. For every commit pushed to the github repo CircleCI will run tests and confirm whether it builds and functionality-tests made by the user. If and only if the commit passes those tests is it then pushed to the github repository.
#### Setup
CircleCI is linked with Github, sign up to the CircleCI website with your github account.

