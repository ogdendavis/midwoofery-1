To set up new project:

* Git clone this repo into a new folder
* Change the origin url to a new repo using `git remote set-url origin [new remote]`
* Commit and push to the new repo
* Change Netlify CMS backend repo in static/admin/config.yml
* ON NETLIFY: Set up the new project with build command `gatsby build`
* ON NETLIFY: Enable Identity
* ON NETLIFY: Under Identity > Services, enable Git Gateway
* ON NETLIFY: Edit Git Gateway settings and generate new GitHub API access token
* Update siteUrl in gatsby-config to Netlify url
* Commit and push the changes
* Install packages in new project root folder using `npm install`

Note that with this setup, the local admin (localhost:8000/admin) will still modify the data on THIS repo, instead of the new one. I'm not sure why, and therefore I'm not sure how to fix it. The workarorund for now is to update content from the Netlify site instead of local. This issue does **not** affect code changes -- those are properly attached to the new repo created and attached in the process above.

Once set up, dev by running `gatsby develop` from project root folder
