### Assignment 1: Understanding Concepts

**Objective:** Check basic understanding of branching.

**Tasks:**
1. What is a **branch** in Git? Explain in your own words.
2. Why should we **not** work directly on the `main` branch?
3. Explain the road analogy of branching (main road vs side road).
4. What is the difference between `git branch` and `git switch`?

**Submission:** Written answers in your notebook.

**Answer**:
<img width="3072" height="4096" alt="IMG_20260824_182222014" src="https://github.com/user-attachments/assets/abf9af1d-f963-47fa-96c3-242ec0c02e4c" />


### Assignment 2: Commands Identification

**Objective:** Identify the correct commands.

**Tasks:**
1. Write the command for the following actions:

| Action                              | Command |
|-------------------------------------|---------|
| List all branches                   |         |
| Create a new branch named `feature-home` |    |
| Switch to `feature-home`            |         |
| Create + Switch in one command      |         |
| Merge `feature-home` into main      |         |
| Delete `feature-home` after merge   |         |

2. Write both the **modern** and **older** command for:
   - Switching to a branch
   - Creating + switching to a new branch

**Submission:** Filled table + answers

**Answer**:
<img width="3072" height="4096" alt="IMG_20260824_182333024" src="https://github.com/user-attachments/assets/94e01ce7-bf8f-4a1c-a99c-025de3ce28c7" />
<img width="3072" height="4096" alt="IMG_20260824_182346323_HDR" src="https://github.com/user-attachments/assets/60b08198-f4ab-49fa-a000-e58c39ff1087" />


### Assignment 3: Practical Branching Workflow

**Objective:** Perform the complete branching cycle.

**Tasks:**
1. Make sure you are on the `main` branch.
2. Create a new branch named `feature-contact`.
3. Create a file `contact.txt` and write your name + any message.
4. Stage and commit the file with a meaningful message.
5. Switch back to `main`.
6. Merge `feature-contact` into `main`.
7. Delete the `feature-contact` branch.
8. Verify using:
   - `git branch`
   - `git log --oneline`

**Submission:**  
- Screenshot of `git branch` (before and after)  
- Screenshot of `git log --oneline`  
- Screenshot showing `contact.txt` is present on `main`

  **Answer**:
  <img width="2878" height="1800" alt="Screenshot 2026-08-24 180358" src="https://github.com/user-attachments/assets/f79bcfe3-747e-4f3a-be70-4f4d5ef8939d" />
<img width="2874" height="1800" alt="Screenshot 2026-08-24 180449" src="https://github.com/user-attachments/assets/c7be10f3-7f0a-4ed6-a8a9-9b5cb2e4f55a" />
<img width="2880" height="1800" alt="Screenshot 2026-08-24 180818" src="https://github.com/user-attachments/assets/f39cee74-5552-4c18-a7da-61aa65b5469f" />
<img width="2850" height="1692" alt="Screenshot 2026-08-24 180915" src="https://github.com/user-attachments/assets/5c9dbbdf-24d9-47e3-836c-c31221a46102" />

### Assignment 4: Conceptual + Error Handling

**Objective:** Understand rules and common mistakes.

**Tasks:**
1. What will happen if you try to delete a branch that is not yet merged?  
   Write the error and how to fix it.
2. Why should you always **commit** before switching branches?
3. Fill in the correct flow:

```
______ → Work → ______ → ______ → Switch to main → ______ → Delete branch
```

4. Explain the difference between:
   - `git branch -d branch-name`
   - `git branch -D branch-name`

**Submission:** Written answers

**Answer**:
<img width="3072" height="4096" alt="IMG_20260824_182821076" src="https://github.com/user-attachments/assets/065496e7-9110-4db4-8ebb-f654f002f245" />
<img width="3072" height="4096" alt="IMG_20260824_182831204_HDR" src="https://github.com/user-attachments/assets/07753e4a-b23f-4db0-ae92-a31f47e02e33" />

### Assignment 5: Complete Real Scenario

**Objective:** Apply branching in a realistic situation.

**Scenario:**  
You are working on a website project. Currently you are on the `main` branch. You need to add two new pages: **About** and **Services**.

**Tasks:**
1. Create a branch `feature-about`, add a file `about.txt`, commit it, merge it into `main`, and delete the branch.
2. Create another branch `feature-services`, add a file `services.txt`, commit it, merge it into `main`, and delete the branch.
3. After completing both, show:
   - Final list of branches (`git branch`)
   - Final commit history (`git log --oneline`)
4. Answer:
   - Why did we create two separate branches instead of doing both features on one branch?
   - What is the advantage of merging only after the feature is complete?

**Submission:**  
- Screenshots of both merges  
- Final `git branch` and `git log --oneline`  
- Written answers for the two questions

- **Answer**:
- <img width="2832" height="1780" alt="Screenshot 2026-08-24 181559" src="https://github.com/user-attachments/assets/5bb315bd-2bf3-43e5-a096-f55b9b1e1bd1" />
- <img width="2778" height="1798" alt="Screenshot 2026-08-24 181614" src="https://github.com/user-attachments/assets/5530ef19-4aa3-41a6-a4cb-89eb51742ebe" />
<img width="2880" height="1772" alt="Screenshot 2026-08-24 181847" src="https://github.com/user-attachments/assets/8bea8c48-461d-4042-b916-5c379d157109" />
<img width="2876" height="1584" alt="Screenshot 2026-08-24 181917" src="https://github.com/user-attachments/assets/4e11ed42-a3c0-4568-a202-9e3cf61dc33f" />
<img width="3072" height="4096" alt="IMG_20260824_182835937_HDR" src="https://github.com/user-attachments/assets/d708221c-b9fe-4cfc-9d34-b90a00eece3a" />



