# AI usage

## 1. How I used AI

At least six entries. One per real use. Every entry needs a commit link.

### 2026-09-17 - Initial React and Supabase Setup
-  Claude
- I asked for help setting up the initial React project with Supabase authentication, database integration, dashboard, and basic styling.
- It provided the initial project structure, Supabase integration, authentication pages, protected routes, database schema, Dashboard, Navbar, InfoCards, Recent Sessions, and the initial styling.
- I kept the main project structure, authentication, Supabase integration, Dashboard, Navbar, and database setup because they were needed for my application, but I later changed the Dashboard content and styling to match my original design and removed features that were not part of my design, such as the weekly words learned count.
- https://github.com/rdAlva/Haneul-Hangye-Final-Project-2215Apsi/commit/2a020f79c1a2c06ad27d118cf31d507752d64fc6

### 2026-09-24 - Fixing the Total Sessions Info Card
- GPT
- I asked for the error towards the totalSessions info card
- It wants to keep the wordsLearnedThisWeek
- I removed it as my original design does not show a words learned for the week, in the dashboard only the total amount of words are shown. It is replaced with Total Sessions since the programs tracks the total amount of sessions the user has.
- https://github.com/rdAlva/Haneul-Hangye-Final-Project-2215Apsi/commit/1e94378362cdfbc95a074fdf161d07237a3918cd

### 2026-09-24 - Fixing the Sessions Page
- GPT
- I asked for help fixing the Sessions page because the page was not showing properly.
- It helped identify and fix the issue that was preventing the Sessions page and its session items from displaying.
- I kept the Sessions page and SessionItems component because they were part of my original design, but I changed the parts that were causing the page not to display so the sessions could appear correctly.
- https://github.com/rdAlva/Haneul-Hangye-Final-Project-2215Apsi/commit/b014710dc213f4b8d2e5fa3b9114d4bec52f24e6

### 2026-09-25 - Removing Unnecessary Session States
- GPT
- I asked which session states were unnecessary and could be removed.
- It identified the session states that were not being used in the Sessions page.
- I removed the unnecessary session states and calculations to make my code cleaner and easier to read.
- https://github.com/rdAlva/Haneul-Hangye-Final-Project-2215Apsi/commit/5d0325e11537af3a4075a6aaed3d2cf7478bf375

### 2026-09-25 - Aligning the Log Sessions Header
- GPT
- I asked for help making the Log sessions text appear inline and properly aligned with the plus icon.
- It suggested using display: flex, align-items: center, and adjusting the spacing, font size, margin, and line height of the session header.
- I kept the existing Sessions header structure and the plus icon because they matched my design. I changed the CSS alignment, spacing, font size, margin, and line height so that the Log sessions text would be smaller and properly aligned with the icon.
- https://github.com/rdAlva/Haneul-Hangye-Final-Project-2215Apsi/commit/0178e1b1b55d8df5b7092b5ed032fcbdb390580c

### 2026-09-25 - aligning the delete/bin icon with each SessionItems
- GPT
- I asked for help aligning the delete/bin icon with each SessionItems.
- The AI suggested changing the flex layout and sizing of the session list, but the changes caused the SessionItems to contract.
- I checked the layout myself and changed the CSS so the session items kept their original size while the bin icon stayed aligned beside them.
- https://github.com/rdAlva/Haneul-Hangye/commit/b6a384449d636d63fe461dcb66d3202b86303697

## 2. Where the AI got it wrong

- The AI kept suggesting wordsLearnedThisWeek, but my program does not track words learned per week. My program tracks the total number of sessions instead, so I removed that code and changed it to use totalSessions based on my original design.
- The AI gave me several CSS changes for .log-sessions, but some of them did not fix the alignment with the plus icon. I kept the same header setup and adjusted the CSS little by little until the Log sessions text was finally aligned with the plus sign.
- The AI suggested flex changes that caused the session items to contract, so I fixed the layout myself to make them expand properly.

## 3. Who wrote what

### Written by me

- HangulCharacter.jsx
- https://github.com/rdAlva/Haneul-Hangye/commit/4d8d7a5b143eb284bd1ff55f54d0b063cb3628fb
- HangulCharacter shows one Hangul letter and its romanized sound in a small card. It takes two props: label (the letter) and value (the sound). It is a separate component so the same card can be used for every consonant and vowel on the Vocabulary page.

- HangulCharacter.css
- https://github.com/rdAlva/Haneul-Hangye/commit/4d8d7a5b143eb284bd1ff55f54d0b063cb3628fb
- This file styles the Hangul card: a fixed width of 100px, a border, rounded corners and a light shadow. The letter is large and bold, and the sound is smaller. There are two media queries (700px and 400px) that make the card, padding and text smaller on small screens.

- VocabCateg.jsx
- https://github.com/rdAlva/Haneul-Hangye/commit/a7fe9a0d60b08fb9808696813a0990d534fc0732
- VocabCategory shows one category as a clickable box with a text label. It takes label for the text and onClick for what happens on click. It is a separate component so the same box can be reused for every category. On the Vocabulary page, the click sets the selected category, and the word list is filtered by it. Except for the category filter function

- VocabCateg.css
- https://github.com/rdAlva/Haneul-Hangye/commit/a7fe9a0d60b08fb9808696813a0990d534fc0732
- This file styles the category box with a border, rounded corners and a shadow. On hover, the background becomes light grey, the shadow gets a little darker, and the cursor changes to a pointer, so the user can see the box is clickable. Padding, margin and text size get smaller on small screens.

- Vocabulary.jsx
- https://github.com/rdAlva/Haneul-Hangye/commit/f3200035f3f8035e9cba8e2f230fff2512ef4c9c
- This is the Vocabulary page. It gets the logged-in user and loads that user's words from the vocabulary_words table in Supabase. It shows the Hangul consonants and vowels, the category boxes, and the table of the user's words. The page can also delete a word and open the Add Word window. After a word is added or deleted, the list is loaded again, so the page always matches the database. The consonants, vowels and categories are stored as arrays and shown with map, so the page does not repeat the same code for each item. I did not write the category filter, the Edit Word part of this page, or the words table (VocabTable), which are listed below.
- Vocabulary.css
- https://github.com/rdAlva/Haneul-Hangye/commit/b6a384449d636d63fe461dcb66d3202b86303697
- This file styles the Vocabulary page: the page padding, the header with the "Add Word" button, and the light blue box that holds everything. The consonant, vowel and category rows are flex rows with a gap between items. At 700px and 400px, the padding and text get smaller and the rows can wrap onto a new line, so the page fits on a phone.

- AddVocab.jsx
- https://github.com/rdAlva/Haneul-Hangye/commit/b15da1e82d0606884904259c69542b55a7cd22ba
- AddVocab is the pop-up window for adding a new word. It has fields for the Korean word, romanization, meaning, category and status. Each field is stored in state. When the user clicks Confirm, it checks that the word, romanization and meaning are filled in. If not, it shows an alert. If they are, it saves the word to the vocabulary_words table with the user's id, closes the window, and calls onConfirm so the page loads the list again. The default category is "Other" and the default status is "Learning". The parent passes onClose, onConfirm and userId as props, so this component only handles the form.

- Sessions.css
- https://github.com/rdAlva/Haneul-Hangye/commit/b6a384449d636d63fe461dcb66d3202b86303697
- This file styles the Sessions page, which imports it. It sets the page padding, the header with the "Log Session" button, the light blue box, the list of sessions, the delete (bin) icon, and the group titles such as "This Week" and "Earlier". The bin icon gets a little bigger on hover. At 700px and 400px, spacing and sizes get smaller for phones. Only a portion of it

- Sessions.jsx (the Log sessions pop-up and the bin icon on each session)
- https://github.com/rdAlva/Haneul-Hangye/commit/d53aed44eafc947167c1b99d4fc51ddf41d12f97
  https://github.com/rdAlva/Haneul-Hangye/commit/b6a384449d636d63fe461dcb66d3202b86303697
- This part of the Sessions page lets the user add and delete study sessions. The page keeps isAddSessionOpen in state. When the user clicks "Log sessions" (the plus icon and text), it becomes true and the AddSession pop-up opens. The pop-up is a separate component, so the page does not hold the form code. It receives onClose to close itself and onConfirm so the page loads the sessions again after a new one is saved.
Each session is shown in a session-row, with the session item and a bin icon side by side, so every session has its own delete icon in the same place. Clicking the bin calls handleDelete with the session id. This deletes the session from Supabase for the logged-in user and loads the list again, so the page always matches the database.

### The AI-written part I understand best

- VocabTable.jsx and VocabTable.css
- https://github.com/rdAlva/Haneul-Hangye/commit/b15da1e82d0606884904259c69542b55a7cd22ba
- VocabularyTable shows the user's words in a table. The columns are Korean, Romanization, Meaning, Category and Status, and the last column has a delete (bin) icon. It takes two props: words, the list to show, and onDelete, which runs with the word's id when the user clicks the bin. It does not load or delete data itself. The Vocabulary page does that, and then it loads the list again. Because of this, the same table also works with the filtered list when the user picks a category.
In the CSS, table-layout: fixed and set column widths keep the columns the same size, and long words wrap onto a new line. Media queries at 700px and 400px make the text, padding and bin icon smaller on phones. We kept it because it shows my words in a clear way, it fits my UI design, and it was easy to connect to the delete function.
