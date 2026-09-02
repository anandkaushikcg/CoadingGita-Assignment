**Goal:** Practice merging a feature branch into `main` locally.

1. Create a new branch:  
   `git checkout -b feature-local-merge`
2. Create a file named `local-merge.txt` and write 3–4 lines about what you learned today about local merge.
3. Stage and commit:  
   `git add .`  
   `git commit -m "Add local-merge notes"`
4. Switch back to main:  
   `git checkout main`
5. Merge the feature branch:  
   `git merge feature-local-merge`
6. Push main:  
   `git push origin main`
7. Run `git log --oneline -5` and take a screenshot of the history.

**Submit:** Screenshot of `git log --oneline` after the merge + confirmation that the file is on GitHub `main`.

**Answer**

<img width="2828" height="1722" alt="Screenshot 2026-08-31 165959" src="https://github.com/user-attachments/assets/65093b61-3d3c-41f1-b3a3-6ab7a5e532ea" />
<img width="2748" height="1622" alt="Screenshot 2026-08-31 170016" src="https://github.com/user-attachments/assets/b174f638-f818-44fd-9e67-869c21ae6164" />


### Assignment 2 – Pull Request Workflow (Mandatory)

**Goal:** Create a Pull Request, merge it on GitHub, then update local main with `git pull`.

1. Create a new branch:  
   `git checkout -b feature-pr-practice`
2. Create a file named `pr-practice.txt`. Write what a Pull Request is and why teams use it (4–5 lines).
3. Commit:  
   `git add .`  
   `git commit -m "Add PR practice notes"`
4. Push the branch:  
   `git push -u origin feature-pr-practice`
5. On GitHub: Open a Pull Request from `feature-pr-practice` into `main`. Write a clear PR title and description.
6. Merge the Pull Request on GitHub (use **“Create a merge commit”** option).
7. Delete the feature branch on GitHub (optional but recommended).
8. Locally:  
   `git checkout main`  
   `git pull origin main`
9. Confirm `pr-practice.txt` is now present on local main. Take a screenshot of the terminal after pull and of the merged PR on GitHub.

**Submit:** Link to the merged PR + screenshot of successful `git pull` + screenshot of GitHub PR (merged state)

**Answer**
{https://github.com/anandkaushikcg/Local-Merge-Pull-Requests-git-pul/pull/1}
<img width="2767" height="1637" alt="Screenshot 2026-09-02 200338" src="https://github.com/user-attachments/assets/7aaf9e96-afbb-4db2-81d8-5a5a2c196286" />
<img width="2194" height="1035" alt="Screenshot 2026-09-02 200522" src="https://github.com/user-attachments/assets/4d942065-91d1-4acd-998d-ab56c5b06ac4" />

### Assignment 3 – Compare Both Workflows (Mandatory)

**Goal:** Experience both methods side-by-side and write a short comparison.

1. You already did one local merge (Assignment 1) and one PR merge (Assignment 2).
2. Create a short file named `comparison.txt` (on a new branch or directly on main).
3. In that file answer these questions **in your own words**:
   - What is the main difference between local merge and PR merge?
   - When would you prefer a local merge?
   - When is a Pull Request better?
   - After merging a PR on GitHub, which command brings the changes to your computer?
   - What does `git pull` actually do (two steps)?
4. Commit and push `comparison.txt` (either via local merge or via a new PR).

**Submit:** Content of `comparison.txt` (or screenshot) + link to the commit/PR.

**Answer**
[https://github.com/anandkaushikcg/Local-Merge-Pull-Requests-git-pul/blob/main/comparison.txt%60]
<img width="2258" height="1430" alt="Screenshot 2026-09-02 201217" src="https://github.com/user-attachments/assets/03e36170-581f-4f63-a538-5392281ceae3" />

### Assignment 4 – git pull Practice (Mandatory)

**Goal:** Practice updating local branches safely with `git pull`.

1. Make sure you are on `main`:  
   `git checkout main`
2. Run `git pull origin main` and observe the output.
3. Create a small change on GitHub itself (edit any file using the GitHub web editor on `main` and commit).
4. Back in your terminal, run `git pull origin main` again.
5. Confirm the web change is now in your local files.
6. Take a screenshot of the terminal showing the pull that brought the web change.

**Submit:** Screenshot of the successful `git pull` that received the GitHub web edit.

**Answer**
<img width="2186" height="1027" alt="Screenshot 2026-09-02 201734" src="https://github.com/user-attachments/assets/f9e161b0-f563-4f14-9f73-1e8c5af1423d" />


