---
layout: project
logo: '/assets/img/projects/personal/teesnapped.svg'
logo-alt: "TeeSnapped Logo"
date: December 2021
website: "https://joebabbitt.com/TeeSnapped/"

name: TeeSnapped
project-type: Personal Project
status: Maintained

section: "/#AProgrammer"
title: TeeSnapped
backgroundColor: '#93C5FD'
text-color: '#000'
emailReplacement: '<b>If you have any questions about TeeSnapped or work for TeeSnapped and would like to chat, <a style="color: inherit!important;" target="_blank" href="mailto:hi@joebabbitt.com?subject=About TeeSnapped">reach out</a></b>'
---

TeeSnapped is less of a full on project then it was an excuse to get back to my hackathon roots. I noticed one day while helping someone book a tee-time that the network requests TeeSnap uses to set up reservations seemed a bit wonky. I did some digging and realized that while the UI may have stopped you from placing a reservation before a certain time, there was nothing in the AJAX request being made to stop you. Hence, TeeSnapped was born. The site takes some basic info about the course you play to generate a AJAX request and then leverages the javascript execution available in Bookmarks to get around CORS and take you to the booking page. It's pretty simple all said and done. 

If you work at TeeSnapped and want to chat about this for any reason (including maybe talking about how to fix these and other issues), just drop me a line below. No harm intended here (nor really done), just a guy poking around at some code.