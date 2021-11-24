# github-summary
github contributions summary calculation

## Motivation
This repository was created to gather concrete data to show on my personal website
 so that people can have a perceptual intuition on what I have done in my career.  
It was intended to make general summary for any GitHub account.  
The summary data includes how may repos an account owns and how many changes have made
to those repos.

## Simple Usage
If you want to use it for any reason, just fork this repo and set a github PAT
in the repository secrets page and name it PAT.   
Then modify the github actions yaml config. Change the environment variable for running 
the program to your desire github account login name.  
The result will appear inside the output once it is done calculating.  
Copy it and use it whereever you want.

## FAQ
- Are you claiming others work as your own?

The answer is YES, but I did not intent to do it.  
Here's the reason. If I want to really count how mamy changes I have made to a repo, 
I will have to clone alllllll of them and traverse every single commit and look into 
those changes and call git blame. It would be a lot of work for the computer and it is actually 
just a waste of computational power because there could be thousands of commits and thousands of 
lines of code made to that repo. It is just really time consuming and it does not worth.  
Therefore I did just count all changes made to the repo instead.
