# GitHub Branch Compare Page Branch Switcher

This is a simple Chrome Extension that I wrote. The purpose of this extension is to improve the UX of the GitHub.com branch comparison page. Have you ever compared a branch o GitHub and wondered why doesn't this icon (see fig1) actually switch the branches that I am comparing?!!

It annoys me so much, I took the time to write this Chrome Extension to add that functionality.

![Fig1](https://glenhughes.me/projects/github-branch-switcher/screen1.jpg)

## Dev Setup

Project uses Gulp to minify source file to extension.min.js and Yarn to manage packages. To install:

```bash
yarn
```

To compile:

```bash
yarn build
```

## Installation

https://chrome.google.com/webstore/detail/github-compare-branch-swi/fjlmkbgkecelphjcapljnhiebbcbimjh

Standard extension installation steps. The extension will only kick in when viewing the GitHub website.