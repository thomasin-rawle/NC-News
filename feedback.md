# Checklist for Northcoders News - Front End

## Tommys' list (in order)

- [x] style user profile page for mobile
- [x] cut off article length on home page at 100-150 chars
- [ ] error handling
- [x] add button to article page to view authors profile
- [ ] cut off comment/article history at 20 on user profile
- [ ] add some pie charts into user profile page e.g. topics contributed to 

## README

- [ ] provides general info about app
- [ ] clear instructions on how to run locally
- [ ] link to API & back end repo
- [ ] specifies minimum versions
- [ ] `package.json` includes dependencies
- [ x] deployed

## UX

- [x] Basic styling added
- [x] Responsive design - ish. There is overlap between date/topic on the homepage in mobile view. Article page unreadable in mobile view
- [x] Items aligned
- [x] Content legible (not too wide, obstructed, etc) - not on mobile view
- [x] Refreshing doesn’t cause an issue on sub-pages - refreshing on any page takes me back to the login page. Recommend storing the login details in local storage! This is especially annoying when trying to manually change pages through the URL.
- [x] No errors in the console - on the articles page I am getting ‘articles mounted’/‘articles updated’
- [x] Login / Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

- [?] Some way to log in (should be very obvious to hiring partners) - perhaps not obvious you don’t need a password! Perhaps autofill this? Or remove the password box entirely.
- [x] Some indication of who is logged in
- [x] A way to log out
- [x] Serves all articles / top articles
- [x] Can vote on articles
- [x] Can vote a maximum of once in either direction per page load - can only vote up (like) - this is less of a problem than a different implementation.
- [x] Votes are persistent when page is refreshed
- [x] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [x] Individual articles are served with comments
- [x] Can vote on comments
- [x] New comments are persistent
- [x] Can only delete comments of logged in user
- [x] Deleted comments don’t re-appear on re-render/refresh
- [x] Can post an article
- [x] User page
- [x] User page - to view other users profiles
- [ ] Users page - No page for all users - DESIGNED THIS WAY

## Error Handling

- [x ] Error pages
- [ ?] All errors handled - not working for invalid topic slug. No error for invalid username.
 - Navigation: (Bad url / Bad topic slug in url / Bad article id in url / Bad username in url)
 - Login: (Bad username / No username)
 - Post comment: (No text in comment body / Can you post without logging in?)
 - Post article: (No text in article body / No title / No topic selected / Can you post without logging in?)

## Code
- [x ] Well named components
- [ x] Functional components used where possible
- [ x] `node_modules` git ignored
- [ x] Components reused where possible (`Articles` / `Voter`...)
- [ x ] Functions are DRY (`handleChange` for controlled components / api calls)
- [ ] Uses object destructuring where possible - see notes
- [ ] prop-types - no use of prop types for validation
- [x] No `console.log`s / comments - see notes
- [x ] If untidy recommend ESLint & Prettier - tidy, but might be worth bringing in eslint/prettier to help other developers in future!

Notes

Quite a few console.logs to remove. A find all and delete might be worthwhile.
Destructure from props to avoid `this.props.something` or `props.something` cluttering your code
Destructure from state to avoid this.state cluttering your code.

Overall, excellent. A clear pass with great demonstration of React understanding. The most ‘must fix’ error is your responsiveness. Also, you need a Readme! Well done!