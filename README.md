# Project 5 — Dragon's Hoard

> Phase 1 · Consolidation · Difficulty: ⭐⭐ (only skills you already have)

You're a treasure hunter raiding a dragon's hoard. Each roll grabs some gold into your
**pot** — but the longer you stay, the greedier it gets. After each roll you choose:
**Bank** the pot (it's safely yours), or **Push** your luck and roll again. Roll a
**dragon** and you lose the whole pot. How rich can you get before you bottle it?

This is a **consolidation project** — its job is *not* to teach you something new. It's to
prove to yourself that you can take the things you've already nailed — state, a render
function, `if/else`, random, parameters — and **combine them into a working game on your
own**. That's the exact muscle the next rungs need.

---

## The deal (the new format)

- **MVP = only skills you already know.** Shipping the MVP = **done**. Aim to build it **solo**.
- **Bonus = ONE new concept.** Optional. That's where you grow by one and where I help.
- **Rhythm:** build a *whole feature* before showing me — bring *"here's my attempt and
  where it broke,"* not *"what's step 2?"* I'm your reviewer, not your steering wheel.
- **Last step:** deploy it + put the live link in this README.

---

## Learning goals (consolidation — all stuff you've done before)

By the end you should have, **on your own**:

- Held the game's state in variables (`pot`, `totalGold`, `bestRun`, maybe `inRun`)
- Branched the flow with `if / else` (roll result, bank vs push, bust)
- Used `Math.random()` for the roll
- Written **one `render()`** function and called it after every change
- Reused parameters / small helper functions where it keeps you from repeating yourself

---

## Requirements (the "what" — the "how" is yours)

Build it as a small web page (`index.html` + `style.css` + `main.js`), same shape as always.

- [ ] A **"Roll"** button that adds a random amount of gold to your **pot** and shows it.
- [ ] After a roll, the player can **Bank** (pot is added to **total gold**, pot resets to 0)
      **or** keep rolling.
- [ ] Some rolls are a **dragon** — rolling one **busts the pot** (pot → 0, run over), but
      your already-banked total is safe.
- [ ] Show **pot**, **total gold**, and **best single run** on the page, always accurate.
- [ ] A **"New Run / Reset"** that clears the pot and lets you play again (your call whether
      reset also wipes total gold or just the current run).

### Definition of done
You can play run after run: roll, decide to bank or push, sometimes bust, and the pot /
total / best numbers are always right. Then it's deployed with a live link below.

---

## Plan it in plain English first

Before any code, write your steps as comments (this habit saves you every time):
1. What happens when I click **Roll**? (random number → add to pot → render)
2. What decides a **bust**? (e.g. a roll of 1 = dragon, or a random chance)
3. What does **Bank** do to the numbers?
4. When does **best run** update?
Then build it **one piece at a time** — get Roll working before you touch Bank.

---

## The ONE new concept (optional bonus)

Add a **run history log** on the page — a list that records each round, like
*"Rolled 7 (pot 7)"*, *"Banked 24!"*, *"🐉 Busted!"*.

The new skill: instead of building HTML with `innerHTML = "..."` strings, build each line
with **`document.createElement`** and **`append`**. You make an element in JS, set its text,
and attach it to the list. It feels clunky at first, but it's the *clean* way to build the
DOM — and it's exactly the technique the next project (and Quest Log) is built on. So this
bonus is a real head start.

- **MDN — `document.createElement`**
  <https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement>
- **MDN — `Element.append`**
  <https://developer.mozilla.org/en-US/docs/Web/API/Element/append>

---

## Other stretch goals (only if you're having fun)

- [ ] **Suspense:** a short delay before the roll result shows (`setTimeout`).
- [ ] **Rising danger:** the more you push without banking, the higher the dragon chance.
- [ ] **Juice:** flash the screen red on a bust by toggling a CSS class.

---

## How to get help

Try the whole feature first. Then come to me with logic, not "give me the code":

- "Here's my plan in plain English for the roll → bank flow — is it sound?"
- "I built Roll + Bank, but the pot doesn't reset after banking — here's my code."
- "How should I decide when a roll is a dragon?"

I'll respond with questions and the smallest hint to get you unstuck — not the answer.

---

## Ship it 🚀
When the MVP works, deploy it (see `../git-manual/README.md`) and drop the link here:

**Live:** _(add your GitHub Pages link)_

```
Reminder: this one is meant to be doable ALONE. Getting stuck and pushing through is the
training — that's the whole point of the consolidation phase. Don't write it all at once.
```
