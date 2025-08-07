# Lab 4: Merge Conflict Resolution

[🔗 View Repository on GitLab](https://gitlab.com/demo-group2124432/demo-project)

## Objectives
- Simulate and resolve a merge conflict

## Key Steps
- Add conflicting changes in `main` and `GitWork`
- Merge branches and resolve conflict in `hello.xml`
- Clean up conflict markers and commit

## Key Commands
```bash
git checkout -b GitWork
echo "<msg>Branch version</msg>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml from GitWork"

git checkout main
echo "<msg>Main version</msg>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml from main"

git merge GitWork
# Resolve conflict in editor
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml"
```
