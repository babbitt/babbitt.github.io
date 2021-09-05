---
layout: employer
cover-photo: '/assets/img/employers/slugs/background.jpg'
logo: '/assets/img/employers/slugs/logo.svg'
logo-alt: "S.L.U.G.S Logo"
empId: slugs
company-name: SLUGS
date: April 2020
dates: Spring 2020 - Present
job: Sole Developer

section: "/#AProgrammer"
title: S.L.U.G.S
backgroundColor: '#000'
---

S.L.U.G.S (or if you're in need of an acronym; the SeLective User Grouping System) is now the online home for BSSL employees. It allows managers to book, manage, staff, process, and bill shows. Employees also benefit from a streamlined timeclock, availability schedule, and a day of show view. All are available on their mobile device.

From a software perspective, I created this project to get a little more leverage on understanding full-stack applications and building out systems that work to maximize efficiency and minimize hassle. My interests lie in improving life with software, and this is a very real example of that in action.

The web app is built using Django, with integrations to Quickbooks, Google Calendar. The source is available on [Github](https://github.com/Binghamton-SSL/SLUGS).

## V1 (2020)
During the beginning of the pandemic I had some extra time on my hands (when I wasn't attending school or working at [Fairly]({% link _employers/fairly.md  %})) so I got to work on the original S.L.U.G.S. It was just a "simple" Django project that I pitched to the company and the big-wigs at the SA. (Un)luckily, 2020-21 turned out to be a huge flop event wise (no clue why...) and all of the little bugs in S.L.U.G.S bothered me enough that I got to work on a V2. We used the V1 for employee training and other internal function, but it was more of a proving ground than anything.

{::nomarkdown}
<div class="photo-group">
    {% picture jpt-webp "/assets/img/employers/slugs/gig-old.png" --alt "'Gig' page" %}
    {% picture jpt-webp "/assets/img/employers/slugs/homepage-old.png" --alt "Homepage" %}
</div>
{:/nomarkdown}

## V2 (2021+)
Moving onto V2 the obvious immediate change is in the design style. Now with some better UI under my belt and the magic of Tailwind, I embarked on really making S.L.U.G.S something that our employees wanted to use, not something they had to use. I also adopted a mobile-first design workflow given the userbase will most likely do 90% of their work on the web app from their devices. This update also brought lots of user and manager friendly features like:
* A better signup page (no duplicates)
* Clock in/out for employees
* Employees can request training via S.L.U.G.S
* Online training signup/notification
* Auto email-notification of work assignment
* Ability to upload paperwork
* See all your shifts worked / money earned
* Open and close functionality (manager side) with one tap
* Book shows through slugs
* Auto-generate and print out estimates
* Auto generate financial paperwork for SA office
* Slicker UI/UX overall

{::nomarkdown}
<div class="photo-group">
    {% picture jpt-webp "/assets/img/employers/slugs/gig.png" --alt "'Gig' page" %}
    {% picture jpt-webp "/assets/img/employers/slugs/homepage.png" --alt "Homepage" %}
    {% picture jpt-webp "/assets/img/employers/slugs/user.png" --alt "User Page" %}
</div>
{:/nomarkdown}