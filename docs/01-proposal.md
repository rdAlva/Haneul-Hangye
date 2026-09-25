Rafael Allan D.Alvarado
CS-403

App Proposal

Title: Haneul Hangye (Sky is the limit)

What the app is for, in one sentence
Haneul Hangye is a personalized Korean learning tracker that helps users record their learned vocabulary, track study sessions, and view their learning progress through a dashboard summary.

Who is it for
Haneul Hangye is for Korean language learners who want to track the Korean words they have learned and record their study sessions.

What are they trying to get done in the moment they open it?
They want to check their learning progress through the dashboard and add the vocabulary and study sessions they completed that day.

Sections or routes this app needs

#	Section / route	What it is for
1	Dashboard	Shows a summary of the user's learning progress, including learned vocabulary and completed study sessions.
2	Sessions	Allows users to record and manage their Korean study sessions based on what they studied each day.
3	Vocabulary	Allows users to add, view, and manage the Korean words they have learned.
State: what data does the app hold?

Data	Shape (rough)	Who owns it (which component)	Changes when...
Words Learned	45 (number)	Dashboard	The user adds or updates vocabulary.
Hours Studied	20 (number)	Dashboard	The user records a new study session.
Weekly Progress	{ words, hours } (object)	Dashboard	The user adds vocabulary or completes a study session.
Recent Sessions	[{ activity, duration, date }] (array)	Dashboard	The user adds or updates a study session.
What each screen contains
For your most important screen, list the blocks of content it needs (a heading, an input row, a list of cards, a footer...). These become the components you break it into on the next worksheet.

Block 1: Navigation Bar - Contains the app logo and navigation links.
Block 2: Greeting Section - Displays a personalized greeting.
Block 3: Learning Summary Cards - Shows words learned, hours studied, and weekly progress.
Block 4: Recent Sessions - Displays recent study activities with their duration and date.
Block 5: Encouragement Message - Shows a Korean message to motivate the learner.
Content you need to gather

Vocabulary Data: Korean words, romanization, English meanings, categories, and learning status.
Study Session Data: Activity type, study duration, date, and notes.
Dashboard Statistics: Total words learned, hours studied, and weekly learning progress.
Recent Sessions: Sample study activities with their duration and dates.
App Logo: Haneul Hangye logo for the navigation bar.
Encouragement Messages: Korean phrases with English translations, such as "잘했어요!” (Good job!).
Supabase Database: Tables for user profiles, vocabulary, and study sessions.
One risk
I am least sure about implementing the forgot password and reset password features because I experienced problems with the same features during the development of our thesis.
