# Code Reviews

From zero to FullStack - an unofficial course led by [Pedro Soares](https://github.com/pncsoares) with the aim of guiding and helping two friends to learn programming and become software developers.

# Introduction

This repository will contain the exercises that [Mariana](https://github.com/ma-oliveiramarques) needs in her studies and courses.
Mariana will write the code and Pedro will review and give his opinion.

# Technologies

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node](https://nodejs.org/en/docs/)
- [Jest](https://jestjs.io/docs/getting-started)

# Exercises

| Exercise name | Go to detail |
| -- | -- |
| Palindrome | 📄 [Documentation](./exercises/palindrome/README.md) |

## How to create a new exercise

1. Create a new folder inside `exercises` folder
1. Create a new file with the code

### If you need to create a package.json

1. Open terminal and execute `npm init -y`
1. Create a new script to execute the code
   ```bash
     {
         "scripts": {
           "execute": "node {filename}.js"
         }
     }
     ```

### If you need to create tests:

1. Open terminal and execute `npm i --save-dev jest`
1. Create a new file with the same name as the main file + `.test.js`
   example: `main.test.js`
1. Create a new script to execute the tests:
   ```bash
   {
       "scripts": {
         ...
         "test": "jest"
       }
   }
   ```

# Setup

## Run locally

Create and go to the directory where you want to place the repository

```bash
  cd my-directory
```

Clone the project

```bash
  git clone https://github.com/from-zero-to-fullstack/code-reviews.git
```

Go to the project directory

```bash
  cd code-reviews
```

Open in Visual Studio Code

```bash
  code .
```

Install dependencies

```bash
  npm i
```

# License

MIT
