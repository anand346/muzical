# Muzical contributing guidelines

Thank you for taking the time to contribute to our project. Please take a moment to read the following guidelines before contributing:

> ⚠️IMPORTANT **Note**
>
> **Pull Requests having no issue associated with them will not be accepted. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**


## Prerequisites

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.

- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them

- [Node.js](https://nodejs.org/) is installed.

---

## How to Contribute 🤔

We believe in the power of collaboration, and your contributions can help make Muzical even more amazing. Whether you\`re a developer, designer, tester, or just enthusiastic about improving Muzical, there are several ways you can contribute:

#### 1. Code Contributions

- **Bug Fixes:** Help us squash bugs by submitting detailed bug reports or fixing them yourself and opening a pull request.

- **Feature Development:** If you have ideas for new features or improvements, let us know or dive right in and start coding.

- **Enhancements:** Help us optimize and enhance existing features to make Muzical smoother and more user-friendly.

#### 2. Documentation

- **Improvements:** Contribute to our documentation by suggesting edits, adding missing information, or writing new guides.

#### 3. Testing

- **Quality Assurance:** Help us ensure Muzical is robust and reliable by testing new features and reporting any issues you find.

#### 4. Spread the Word

- **Tell Others:** If you enjoy using Muzical, spread the word to your friends and on social media. The more, the merrier!

#### Getting Started

To start contributing, follow these steps:

1. Fork the Muzical repository to your GitHub account.

2. Clone the forked repository to your local machine.
`git clone https://github.com/<your_github_username>/muzical`

3. Get into the root directory
`cd muzical`

4. Install all dependencies by running
`npm install`

5.  Make `.env.local` file and put these variables:
```
ABLY_API_KEY=<Your Ably API key>
NEXT_PUBLIC_API_ROOT="http://localhost:3000"
```
To get your Ably API key, create your account [here](https://ably.com/sign-up "here") and go through [this guide](https://faqs.ably.com/setting-up-and-managing-api-keys "here") .

6. Run the project in your local machine
`npm run dev`

7. Create a new branch for your contribution: 
`git checkout -b <your-branch-name>`

8. Make your changes, whether it\`s code, documentation, or testing.

9. Stage your changes
`git add <file_name>`

10. Commit your changes: 
`git commit -m "Add your meaningful commit message here"`

11. Push your changes to your fork on GitHub: 
`git push origin <your-branch-name>`

12. Open a pull request from your branch to the main Muzical repository.

13. Our team will review your contribution, provide feedback, and merge it once it meets our standards.

Let's make Muzical even better together! Your contributions are greatly appreciated. 🚀🙌