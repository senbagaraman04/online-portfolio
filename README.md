# Introduction:
Online Portfolio is an Angular-based application that collects the data from the user and internally pulls up statistics from GitHub and Stackoverflow and presents a sharable URL with a bio for the user.

#appwrite #AppwriteHackathon

![Online Portfolio.](https://cdn.hashnode.com/res/hashnode/image/upload/v1684655118743/5210134e-eae4-4e65-8403-c136f393f664.png?auto=compress,format&format=webp)

# Team Members:

Senbagaraman M : https://hashnode.com/@senbagaraman04


# Use case:
There are various options for the developers to create a portfolio, while most of them require an account creation on their site or privacy at its bite, so this application will not ask you to create an account or collects your email id. The application generates a valid URL for all the profiles and, if the user needs to update something (which a developer rarely will do :P ), he/she can create a new profile and share the link across.

# Links:
Public Repo: https://github.com/senbagaraman04/online-portfolio

Public Hosted Link: https://senbagaraman04.github.io/online-portfolio/

# Technology:
Angular v14.3.0 - The base application.

Git - version control.

GitHub - Version Control Repository.

Boostrap v5.2.3 - Powerful, extensible, and feature-packed frontend toolkit.

Appwrite -v11.0 - Appwrite to store and rewrite the data.

# Behind the Scenes:
The app is created using Angular v14.3 and using Bootstrap v5.2.3. The application allows the user to create a profile (Did we say the user dont need to create an account. :) .

![Online Portfolio.](https://cdn.hashnode.com/res/hashnode/image/upload/v1684655118743/5210134e-eae4-4e65-8403-c136f393f664.png?auto=compress,format&format=webp)


The user should click on the Create your skill button and will be greeted with a form and a preview page on the right side content,

![Online Portfolio.](https://cdn.hashnode.com/res/hashnode/image/upload/v1684655185311/bab5550a-8962-4183-9897-d47cfd31814e.png?auto=compress,format&format=webp)

Update the contents of the form and the same can be viewed as the user types. The application does have some restrictions like, the profile and the cover photo are static and can't be changed. (We are working on it..)

While editing the screen will be looking as follows,

![Online Portfolio.](https://cdn.hashnode.com/res/hashnode/image/upload/v1684656853116/dd5e4a8e-d842-44a6-a357-158d94df0638.png?auto=compress,format&format=webp)


After hitting the button, the data hits the Appwrite database and store the data in their respective database and collections. The communication between the application and the appwrite serves is governed by the API-keys and client secrets.

If the saving encounters a error, then a popup window shows on the screen,

![Online Portfolio.](https://cdn.hashnode.com/res/hashnode/image/upload/v1684657355842/fedc40fb-3517-47d1-8dfc-6783cc8d3bac.png?auto=compress,format&format=webp)

Once the data gets saved correctly, the application will redirect the user to the listing page, where they can see the list of users created on the site,



![Online Portfolio.](https://cdn.hashnode.com/res/hashnode/image/upload/v1684657408466/76e2d6ef-eb2e-484c-9e4a-21a018d7677b.png?auto=compress,format&format=webp)


The search button on the left, will act as a filter,


![Online Portfolio.](https://cdn.hashnode.com/res/hashnode/image/upload/v1684657408466/76e2d6ef-eb2e-484c-9e4a-21a018d7677b.png?auto=compress,format&format=webp)


The view more button leads to a details section with a unique URL.


![Online Portfolio.](https://cdn.hashnode.com/res/hashnode/image/upload/v1684657493450/4a378aaa-12fc-479c-ba68-fb9d101a3069.png)



The details page will pull the Stackoverflow and GitHub data from their respective api's and populate the data such as followers, repositories from GitHub and medals from Stackoverflow.


![Online Portfolio.](https://cdn.hashnode.com/res/hashnode/image/upload/v1684657698075/bab7922c-5fcc-4e7f-b6d1-ef219edb4798.png?auto=compress,format&format=webp)

The above-mentioned page is permanently accessible to anyone and the user can share the profile with their potential employers. About me section will have links to their GitHub, stackoverflow and LinkedIn pages.

#appwrite #AppwriteHackathon #portfolio

