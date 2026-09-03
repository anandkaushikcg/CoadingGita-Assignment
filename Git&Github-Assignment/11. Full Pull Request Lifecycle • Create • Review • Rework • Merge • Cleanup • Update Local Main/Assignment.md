### Assignment 1 – Complete PR Lifecycle with `feature/contact-form` (Mandatory)

**Goal:** Practice the full cycle: branch → file → commit → push → PR → merge → cleanup.

1. Update main:  
   `git checkout main && git pull origin main`
2. Create branch:  
   `git checkout -b feature/contact-form`
3. Create file `contact.html` with a simple heading and a short paragraph about a contact form.
4. Stage, commit and push:  
   ```bash
   git add contact.html
   git commit -m "Add contact form page"
   git push -u origin feature/contact-form
   ```
5. On GitHub: Open a Pull Request (base = `main`, compare = `feature/contact-form`). Write a clear title and description.
6. Merge the Pull Request using **“Create a merge commit”**.
7. Delete the remote branch (GitHub “Delete branch” button or `git push origin --delete feature/contact-form`).
8. Update local main using the two-command method:  
   ```bash
   git checkout main
   git fetch origin main
   git merge origin/main
   ```
9. Delete local branch:  
   `git branch -d feature/contact-form`
10. Take screenshots of:  
    (a) the merged PR  
    (b) terminal after fetch + merge  
    (c) `git branch` showing the branch is gone

**Submit:** Merged PR link + the 3 screenshots listed above.

**Answer**
[https://github.com/anandkaushikcg/Local-Merge-Pull-Requests-git-pul/pull/2]
<img width="2576" height="1590" alt="Screenshot 2026-09-02 204053" src="https://github.com/user-attachments/assets/85df3b96-cd23-4fc7-86fc-e87c39f8871c" />
<img width="2143" height="1050" alt="Screenshot 2026-09-02 204425" src="https://github.com/user-attachments/assets/a7e95251-89ec-4b1e-bf5e-431b5be9cc74" />
<img width="2100" height="1066" alt="Screenshot 2026-09-02 204452" src="https://github.com/user-attachments/assets/e9338cb7-85e8-4b14-bc97-cd14ea758c6f" />



### Assignment 2 – `feature/about-page` with Review & Rework (Mandatory)

**Goal:** Practice receiving a review comment, reworking the **same** branch, and updating the PR.

1. Create branch:  
   `git checkout -b feature/about-page`
2. Create `about.html` with only a basic heading (intentionally incomplete).
3. Commit and push:  
   ```bash
   git add .
   git commit -m "Add about page skeleton"
   git push -u origin feature/about-page
   ```
4. Open a Pull Request on GitHub.
5. **Simulate review:** Add a comment on the PR yourself (or ask a classmate/mentor) requesting:  
   *“Please add a short paragraph about the purpose of the about page and a simple team section placeholder.”*
6. Rework on the **same branch**:  
   ```bash
   git checkout feature/about-page
   # edit about.html as requested
   git add .
   git commit -m "Address review: add description and team section"
   git push origin feature/about-page
   ```
7. Confirm the PR on GitHub now shows the new commit.
8. Merge the PR, delete remote branch, update local main (`git fetch` + `git merge` or `git pull`), delete local branch.
9. Screenshot:  
   (a) PR conversation showing the review comment + your new commit  
   (b) merged PR

**Submit:** PR link showing review comment + rework commit, plus merged PR screenshot.

**Answer**
