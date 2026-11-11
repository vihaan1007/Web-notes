/*
track history and collaborate
global means github
local means this PC

            Config git
        use git config --global user.name "userName used in github"
        use git config --global user.email "eMail used in github"
        use git config --global --list to see your configuration

    use git clone to get a file from your github
    use cd to change folder working on
    git status tells the status
    git init and git add .
    git commit -m "Message" Commits the changes
    git push origin main pushes it to gitHUB
    git init helps a repo maked using mkdir get the .git folder

    git branch -M main changes the main branch name from Master to branch
    git branch gives the branch name
    git remote add origin <-link-> will change remote name to origin
    git remote -V to verify
    git push -u origin main done once than next times write git push

    using github to make repo is better than git
    We make branches then merge code to merge wih main

    git checkout -b <-new branch name-> to create new branches
    git checkout <-branch name-> to navigate in branches
    git branch -d <-to be deleted branch name-> to delete beanches

    you cant delete the branch you are at or the checked one
                Merging branches
            Way 1; Git

        git diff <-branch name-> for the changes
        git merge <-branch name->

:             Way 2: gitHub        
        push your code to github and send a pull request(PR)
        git pull origin <-branch name-> will bring code from the main to editor

    When two branches change the same line and try to merge it git cant do anything so we have to resolve it ourselves so sometimes PR is better

                Undoing
            Case 1; staged
          added but not commited

        git reset for many files 
        git reset <-file name-> for 1
        then add it and commit
*/