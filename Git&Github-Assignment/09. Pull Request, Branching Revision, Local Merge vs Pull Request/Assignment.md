### Assignment 1: Branching Commands & Naming

**Objective:** Revise branching commands and naming conventions.

**Tasks:**
1. Write the modern and older command for the following:

| Action                         | Modern Command | Older Command |
|--------------------------------|----------------|---------------|
| Switch to a branch             |                |               |
| Create + Switch to new branch  |                |               |
| Merge a feature branch         |                |               |
| Delete a merged branch         |                |               |

2. Write 4 **good** branch names and 4 **bad** branch names.
3. What is the recommended naming convention for feature branches?

**Submission:** Written answers

**Answer**:

<img width="3072" height="4096" alt="IMG_20260825_200704776_HDR" src="https://github.com/user-attachments/assets/aceab879-8d3b-4ae9-9a30-2e75ce15c9fd" />

### Assignment 2: Local Merge vs Pull Request

**Objective:** Understand the difference between the two methods.

**Tasks:**
1. Create a comparison table between **Local Merge** and **GitHub Pull Request** (at least 5 points).
2. When should you use Local Merge?
3. When should you use a Pull Request?
4. Why is Pull Request preferred in team/professional projects?

**Submission:** Written answers

**Answer**:
<img width="3072" height="4096" alt="IMG_20260825_200715983_HDR" src="https://github.com/user-attachments/assets/cd6b7945-0bb8-490b-9c50-a3a35a17c74a" />


### Assignment 3: Practical Local Merge

**Objective:** Practice the complete local merge workflow.

**Tasks:**
1. Make sure you are on `main`.
2. Create a branch named `feature/about-page`.
3. Create a file `about.txt` and add some content.
4. Stage and commit with a meaningful message.
5. Switch to `main` and merge the branch.
6. Delete the feature branch.
7. Verify with `git branch` and `git log --oneline`.

**Submission:**  
- Screenshot of `git branch` (final)  
- Screenshot of `git log --oneline`  
- Screenshot showing `about.txt` is present on main

  **Answer**:

  <img width="2876" height="1584" alt="Screenshot 2026-08-24 181917" src="https://github.com/user-attachments/assets/e39718b9-81bb-4c11-b5c9-5a3a1eeccb87" />
<img width="2880" height="1772" alt="Screenshot 2026-08-24 181847" src="https://github.com/user-attachments/assets/974883e0-294d-40c3-8369-e3d59dbb8d1c" />

<img width="2850" height="1692" alt="Screenshot 2026-08-24 180915" src="https://github.com/user-attachments/assets/6b57f7c5-55dc-40d6-bfe4-b716687d779c" />

### Assignment 4:  Create & Merge Pull Request

**Objective:** Perform the professional Pull Request workflow.

**Tasks:**
1. Create a new branch `feature/services-page`.
2. Add a file `services.txt` with any content.
3. Commit the changes.
4. Push the branch using:
   ```bash
   git push -u origin feature/services-page
   ```
5. Go to GitHub and create a Pull Request.
6. Merge the Pull Request.
7. Delete the branch on GitHub.
8. Update your local main:
   ```bash
   git switch main
   git pull origin main
   git branch -d feature/services-page
   ```

**Submission:**  
- Screenshot of the created Pull Request  
- Screenshot after merging the PR  
- Screenshot of final `git log --oneline` on main

  **Answer**:

  <img width="2860" height="1752" alt="Screenshot 2026-08-25 171820" src="https://github.com/user-attachments/assets/b502d41c-ee76-49da-83fb-06eef1838c68" />
  <img width="2880" height="1774" alt="Screenshot 2026-08-25 171902" src="https://github.com/user-attachments/assets/cab6b683-e0af-4719-8d91-47e5ca52d3e8" />
<img width="2850" height="1742" alt="Screenshot 2026-08-25 172149" src="https://github.com/user-attachments/assets/76f9c8e5-6cbd-45a6-b5d0-58101310b413" />


### Assignment 5: Complete Understanding + Reflection

**Objective:** Test deep understanding of Day 9 concepts.

**Tasks:**
1. Write the complete **Local Merge** workflow (step-by-step commands).
2. Write the complete **Pull Request** workflow (step-by-step).
3. Answer the following:
   - Why should we always run `git pull` on main before creating a new feature branch?
   - What happens if you merge a PR on GitHub but forget to run `git pull` locally?
   - Why should feature branches be deleted after merging?
4. Write 4 key takeaways from Day 9.

**Submission:** Written answers
**Answer**:

<img width="3072" height="4096" alt="IMG_20260825_200723187_HDR" src="https://github.com/user-attachments/assets/52b50adc-2087-476d-9c54-246a68ae127f" />

<img width="3072" height="4096" alt="IMG_20260825_200732047_HDR" src="https://github.com/user-attachments/assets/540406ac-019b-49ab-9cda-5896be00071f" />

