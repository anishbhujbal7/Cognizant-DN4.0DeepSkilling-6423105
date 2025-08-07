# Lab 3: Branching and Merging

[🔗 View Repository on GitLab](https://gitlab.com/demo-group2124432/demo-project)

## Objectives
- Create and switch branches
- Commit in a feature branch
- Merge changes into main

## Key Commands
```bash
git checkout -b GitNewBranch
echo "Branch content" > branchfile.txt
git add branchfile.txt
git commit -m "Add branchfile.txt"
git checkout main
git merge GitNewBranch
git push
```
