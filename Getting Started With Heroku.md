---
title: Getting Started With Heroku
layout: post
author: Rupesh Tiwari
permalink: /getting-started-with-heroku/
tags:
- heroku,cloud, build, deploy, scale, container, dyno
source-id: 1D8JcXfR5JcKGUD1_RB-xqkmWHWmbFvDVrA2Xndnh9F0
published: true
---
Heroku Setup for Beginners

Table of  Contents

[[TOC]]

# Environment Setup

Node , Npm and Git must be installed 

`Node -v`

`npm -v`

`git --version` 

![image alt text]({{ site.url }}/public/BNKTvc9bJk6pnE5j7uNDPw_img_0.png)![image alt text]({{ site.url }}/public/BNKTvc9bJk6pnE5j7uNDPw_img_1.png)

# Heroku Guide

Go to url [https://devcenter.heroku.com/articles/heroku-cli#download-and-install](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

# Download Heroku CLI

![image alt text]({{ site.url }}/public/BNKTvc9bJk6pnE5j7uNDPw_img_2.png)

# Install Heroku CLI

![image alt text]({{ site.url }}/public/BNKTvc9bJk6pnE5j7uNDPw_img_3.png)

![image alt text]({{ site.url }}/public/BNKTvc9bJk6pnE5j7uNDPw_img_4.png)

# Confirm Installation

Run below command in cmd `heroku --version`

![image alt text]({{ site.url }}/public/BNKTvc9bJk6pnE5j7uNDPw_img_5.png)

# Login To Heroku

Run below command in cmd

`heroku login -i`               

![image alt text]({{ site.url }}/public/BNKTvc9bJk6pnE5j7uNDPw_img_6.png)

# Create an App on Local

git clone https://github.com/heroku/node-js-getting-started.git

$ cd node-js-getting-started

# Create the same App on Heroku

Create an app in heroku with below command

`herou create my-app`

OR 

`heroku create` 

![image alt text]({{ site.url }}/public/BNKTvc9bJk6pnE5j7uNDPw_img_7.png)

# Deploy the app on Heroku

git push heroku master

![image alt text]({{ site.url }}/public/BNKTvc9bJk6pnE5j7uNDPw_img_8.png)

# Scale your deployed app 

 Ensure that at least one instance of the app is running

heroku ps:scale web=1

![image alt text]({{ site.url }}/public/BNKTvc9bJk6pnE5j7uNDPw_img_9.png)

# Open your app

heroku open

# What is container

lightweight, isolated environments that provide compute, memory, an OS, and an ephemeral filesystem. Containers are typically run on a shared host, yet are completely isolated from each other.

# What is Dyno

The containers used at Heroku are called "dynos." Dynos are isolated, virtualized Linux containers that are designed to execute code based on a user-specified command. Your app can scale to any specified number of dynos based on its resource demands. Heroku's container management capabilities provide you with an easy way to scale and manage the number, size, and type of dynos your app may need at any given time.

