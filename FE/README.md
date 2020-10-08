# README

## Bugs
- styling
    - Mantra oiption has different styles
    - re format so options are in top left of screen, alligned left 
    - cound down buttons different sizes
    - dropdown for countdown is off

## Other TODOs, Feats to add
- localStorage hook
    - deconstruct object?
- how best to save user information
- theme change
- weather call

### Pre Login
- logo & name
- some artwork or pictures to use
- refactor so all on one page?


### Logged-In
    After login, send post request for current day to dates table, that way all other tables can be populated with respective daily tasks.
    - try / catch based on state (turns true after initial post request, thereby all other requests are PUT not POST) ?

- Dashboard
    - BE API Calls
    - show chores scores?
    - graphs... 😱


- Rules
    - need a BE or local storage?

- Mantra
    - need a BE or local storage?

- STOs
    - BE API Calls

- LTOs
    - BE API Calls

- Schedule
    - Daily
        - BE API Calls
    - Chores
        - BE API Calls?
        - delete
        - remove

## Ideas

- ___need to get Date_id every day, store it so it can be used for api calls___

other features to work on:
- user account (topright?)
    - details
    - update
    - logout

- todo app for random chores, use state not BE

- login / register
    - login / register component ✅
    - private route for logged in user ✅
    - logout button ✅
    - api calls ✅
- actions
    - handle all the BE calls and state
- schedule
 - daily routine (checkbox) ✅
    - CRUD activities 
 - chores / things to do (checkbox) <---------- 3

- include context ✅
- Date ✅

- header
    - logo / icon
    - weather
    - restyle ✅

 - navbar
    - restyle ✅

- timer that will calculate productivity for the day ✅
    - include miliseconds
    - resets local storage at end of day (after 24 hours) <---------- 1 ✅
    - need count down <---------- ✅
        - alarm ✅

- fitness 
    - tracker
    - stats
        - personal bests
            ```
            weight        date
            189.0 lbs    last week

            exercise    variation    reps      date
            push up       normal      25        9/17/20
            pullup      natural       4         9/17/20

            ```
        - weight (190.4lbs)
           ```
            weight date
            190.4   9/18/2020
           ```

- dashboard
    - basic styling and functionality ✅
    - needs BE get request
    - graphs 😃









