---
layout: post
title: "Perch CMS + Hammer for Mac + XAMPP"
date: 2013-09-18 14:22
comments: true
categories: [Design]
description: "Perch CMS, Hammer for Mac and XAMPP, SASS, workflow"
keywords: "Perch CMS, Hammer for Mac, Perch, Hammer, CMS, SASS, SCSS, XAMPP, local development"  
---
When a client came to me recently asking for a small site where they needed to update content themselves, I had to delve back into the CMS world and choose something appropriate. Whilst there are many options both hosted and self-hosted these days, I decided to settle on [Perch](http://www.grabaperch.com). Simply put, it does exactly what was needed and gave me a strong sense of control in terms of development whilst being light, user and client friendly, and well supported.

<!-- more -->

Nowadays, my days are filled with Design and UX responsibilities so getting my hands back into the front-end was exciting, especially utilising the power of [SCSS](http://www.sass-lang.com). I built this site using SCSS but hadn't really grasped the power of it until I started working on a small client site.

The following is how I managed to get set up with Perch, a fantastic Mac-only tool called [Hammer for Mac](http://www.hammerformac.com) and [XAMPP](http://www.apachefriends.org/en/xampp.html) for local development. I'm interested in better workflows or improvements all the time, so by all means, please comment away. I should also note that I'm not 100% confident with the command line automation processes a developer would be at ease with so if anyone out there would like to outline their workflow, please make a comment below:

<hr>

<p class="extra-medium center"><img class="cols-eight no-shadow" src="{{ site.baseurl }}assets/img/journal/xampp.png" alt="xampp"></p>

## XAMPP
I use XAMPP for simple local PHP and MySQL management. [Grab it here](http://www.apachefriends.org/en/xampp.html).

<hr>

<p class="extra-medium center"><img class="cols-eight" src="{{ site.baseurl }}assets/img/journal/perch-cms.jpg" alt="Perch CMS"></p>

## Perch
I needed a simple CMS and [Perch](http://www.grabaperch.com) was it. A few friends recommended it and have had great success with it. $79 for a license, you download it locally, setting up a local domain url for local work in the Perch website admin and off you go. [Read the docs](http://docs.grabaperch.com/docs/) for more info on getting started.

To get Perch working with XAMPP, the people at Perch have a [simple, step-by-step guide already prepared](http://docs.grabaperch.com/solutions/development-guides/xampp-install). However, in order to get Perch working nice with Hammer for Mac, I had to make a change to the Apache Configuration file within XAMPP.

    <VirtualHost *:80>
        DocumentRoot "/Applications/XAMPP/xamppfiles/htdocs/sitename/Build"
        ServerName sitename.local
        ServerAlias www.sitename.local
        <Directory "/Applications/XAMPP/xamppfiles/htdocs/sitename/Build">
        Options Indexes FollowSymLinks Includes execCGI
            AllowOverride All
            Allow From All
            Order Allow,Deny
        </Directory>
    </VirtualHost>

Note the directory structure with the 'Build' folder. That's due to how Hammer for Mac works. More on that later.

<hr>

<p class="extra-medium center"><img class="cols-six" src="{{ site.baseurl }}assets/img/journal/hammer-for-mac.jpg" alt="Hammer for Mac"></p>

## Hammer for Mac
Essentially, [Hammer for Mac](http://hammerformac.com) is a brilliant tool for developing sites locally. Due to its fantastic [tags functionalities](http://hammerformac.com/docs/tags), you get some of the powerful functionality usually reserved for PHP with just plain HTML!

I've started using it for rapid local development for things such as in-browser style guides (an awesome resource for teams and devs) and even simple basic prototypes for larger projects. 

However, I need PHP installed for Perch to run so I'm using the best of both worlds.

Hammer for Mac also has a few decent [templates](http://hammerformac.com/gallery) to get you started. I ended up using the [Rock Hammer](http://malarkey.github.io/Rock-Hammer) template which is the work of Andy Clarke and his team at [Stuff and Nonsense](http://stuffandnonsense.co.uk). It's a solid framework to get started with, supports SCSS and although it might be considered overkill for a very basic site, you can turn things on and off and add anything if needed. So far, I've found it quite solid and getting updates regularly via GitHub.

<hr>

## Hammer for Mac and the 'Build' folder

So after setting up Perch and XAMPP for local development, and using the Rock Hammer template as a starting point, I was ready to go!

Hammer for Mac essentially creates a 'Build' folder for you inside your project folder. It takes everything outside the Build folder, the SCSS, imagery, Hammer tags, CoffeeScript, HTML, HAML and Markdown and compiles them for you. 

So your project folder structure might look like this:

    Build
    perch
    css
    fonts
    img
    js
    partials
    .htaccess
    index.html
    about.html
    humans.txt

Hammer for Mac does allow you to ignore files and folders that would be complied into the 'Build' folder. Essentially, to get things working, I needed to ignore the 'perch' folder (which contains the Perch CMS and its associated files) because it would build the perch folder each time and I didn't want that.  So now my folder structure would be:

    Build
    css
    fonts
    img
    js
    partials
    .htaccess
    index.html
    about.html
    humans.txt

However, I ran into issues because I needed the 'perch' folder to be inside the 'Build' folder for things to work smoothly (especially when I deploy the 'Build' folder to a live site later on). So I searched around and found [this article by Greg Cooper](http://gre.gs/article/hammer-github.html) and how he handled the hidden .git folder he needed in his 'Build' folder. A nifty little trick with standard Mac file and folder permissions (which he said could be solved easier in the command line).

I tried this but couldn't get it to work so I had to set the 'Perch' folder permissions on my local machine to 'Read Only':

<p class="extra-medium center"><img class="cols-six" src="{{ site.baseurl }}assets/img/journal/permissions-hammer.png" alt="Folder File Permissions Mac"></p>

So now, the 'perch' folder lives inside the 'Build' folder but because I set the folder to 'Read Only', Hammer for Mac won't override it each time it 'builds'.

So now my final project folder structure is like this:

    Build
        css
        fonts
        img
        js
        perch
        .htaccess
        index.html
        about.html
        humans.txt
    css
    fonts
    img
    js
    partials
    .htaccess
    index.html
    about.html
    humans.txt

<hr>

##Moving it all to a live site

Now that the local development flow seems pretty smooth, I just followed [this Perch guide](http://docs.grabaperch.com/solutions/development-guides/moving-a-perch-site/) to get the files live.

<hr>

So that's my workflow with Perch CMS, Hammer for Mac and XAMPP. If anyone has any improvements or point out things I could have done better/easier, I'd love to hear your thoughts below.

I'd also love to know your local workflow for simple CMS driven sites for small clients with minimal hassle (preferably from those who can do it all themselves - ie front-end and implementation).

*Note: This is NOT an endorsed post. Just me using what I find best at the time for me and my client needs.*






