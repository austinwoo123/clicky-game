# Clicky Game

## Table of Contents
1. [Description](#description)
2. [Deployed Link](#deployed-link)
3. [How to Start](#how-to-start)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Acknowledgements](#acknowledgements)

-----------------------
## Description
For this project, I created a memory game with React. This project required me to break up the application's UI into components, manage component state, and respond to user events.

-----------------------
## Deployed Link
[Link to Deployed Site](https://austinwoo123.github.io/clicky-game/)

## How to Start
1. Copy the repo from GitLab using your ssh key
2. Run Git bash
3. Type in "code ." to open Visual Studios Code
4. Run npm start in the terminal

## Code Snippets
```
render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.randoms.map(randoms => (
          <Card

            id={randoms.id}
            key={randoms.id}
            name={randoms.name}
            image={randoms.image}

          />
        ))}
      </Wrapper>
    );
  }
```
This code shows what I am rendering onto the page with react. Starting with the wrapper, this is the basic component that holds the data stored in my random.json file. The card component is the blueprint for each of the blueprints.

## Built With
- React
- Axios
- NodeJS
- Bootstrap
- JavaScript
- HTML5
- CSS


-----------------------
## Licenses
MIT

-----------------------
## Authors
- Austin Woo


-----------------------
## Acknowledgments
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp

