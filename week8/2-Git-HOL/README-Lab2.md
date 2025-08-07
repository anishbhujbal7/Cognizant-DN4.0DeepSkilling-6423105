# Lab 2: Using .gitignore

[🔗 View Repository on GitLab](https://gitlab.com/demo-group2124432/demo-project)

## Objectives
- Create `.gitignore` file to ignore unwanted files

## Key Tasks
- Ignore `*.log` files and `log/` directory
- Stage and commit `.gitignore`

## Key Commands
```bash
echo "*.log" >> .gitignore
echo "log/" >> .gitignore
git add .gitignore
git commit -m "Add .gitignore to ignore log files and folder"
git push
```
