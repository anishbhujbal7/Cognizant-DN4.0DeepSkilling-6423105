# Lab 1: Git Configuration and First Commit

[🔗 View Repository on GitLab](https://gitlab.com/demo-group2124432/demo-project)

## Objectives
- Configure Git with username and email
- Set Notepad++ as default Git editor
- Create a local Git repository
- Add and commit a file
- Push to a remote GitLab repository

## Key Commands
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git init
echo "Welcome to Git" > welcome.txt
git add welcome.txt
git commit
git remote add origin <repo-url>
git push -u origin main
```
