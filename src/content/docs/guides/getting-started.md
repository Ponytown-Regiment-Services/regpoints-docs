---
title: Getting started
description: get started on regpoints.
---
# *Regiment Registration & Discord Bot Setup*

Welcome to RegPoints! This guide will walk you through registering your regiment and setting up the Discord bot integration step by step.

As an example, pictures will represent a fictional regiment being built.
`WIP - Work In Progress`, a construction themed regiscout.

:::caution
**Before you start:**

- RegPoints is currently in an **invite-only** system.
- You need an invitation from PRS staff to create a new regiment.
- You must be the owner or administrator of the Discord server you want to link.

:::

---

## Step 1: Getting an Invitation

To register your regiment, you'll first need to receive an invitation from Ponytown Regiment Services (PRS) staff.  
Note: You do not need an actual invitation to create an account on this site, but it will be required to register your regiment.

### 1.1: How to Request an Invitation

1. Join the [PRS Discord server](https://discord.gg/KXbynmjjfX).
2. Open a **Support Ticket.**
3. Provide information about your regiment. (Regi name, theme, etc…)
4. Wait for approval and receive your ***Regpoints Starter Kit***.

![The Owner of WIP is asking for an inviting link](/imgs/Pasted%20image%2020251204075246.png)
> *The Owner of `WIP` is asking for an inviting link!*

:::note
Registration are currently closed.
:::
---

## Step 2: Creating Your Account

Once you have your invitation link, you can create your RegPoints account.

:::note[Note to: Old Regpoints users]
We will ask you to create a new account, as the old database hasn't been given to us.

***This note only applies to users who had an account before the shutdown in 2023.***
:::

:::note[Note to: Users already using Regpoints]
You do not need another account if you already have one, for exemple, if you are staff in another regiment already using Regpoints.
:::

**Create an account**:

1. Open your invitation link or [create a new account](https://alpha.regpoints.fr/newuser.php).

2. Fill out the registration form with:

- Email address
- **Strong** password
- Name or username

3. Submit the form and check your email.
4. Click the verification link to activate your account.

![WhatIsMyRealName is using a very strong password](/imgs/Pasted%20image%2020251204075534.png)
> *WhatIsMyRealName is using a **very strong password. You better do it too, and not only on Regpoints!***

<br>

:::tip{icon="approve-check"}
**Quick tips from cybersecurity student:**

Use an email you can access and choose a ***strong, unique*** password.

Keep your login details ***Private*** — ***never share your password, dating or not***.
:::

---

## Step 3: Registering Your Regiment

After creating your account and verifying your email, you can register your regiment.
For this, you will use the invite link provided in the `Regpoints dashboard link (for your owner):` part of your *regpoints starter kit*.

:::note[Info]
>Invite links has this syntax:
>`https://alpha.regpoints.fr/newreg.php?invite=INVITE_ID`
:::

**Regiment Information Required:**

- **Regiment Name:** Full name of your regiment;
- **Short Description:** Brief overview (1-2 sentences, including your theme for example)
- **Leader Name:** Primary leader/commander name
- **Prefix:** Short abbreviation (for example “WIP”,“PRS”, “AVU”)
- **Long Description:** Detailed information about your regiment

![WhatIsMyRealName has created WIP dashboard](/imgs/Pasted%20image%2020251204080804.png)
> *WhatIsMyRealName entering all info about WIP.*

:::note[Info]
Tips for Regiment Registration:

- Choose a unique regiment name and prefix
- Make your descriptions detailed and informative
- Ensure all information is accurate before submitting

:::

---

# Step 4: Setting Up the Discord Bot

Now comes the exciting part — linking your regiment with the Discord bot for seamless integration!

## 4.1: Inviting the Bot to Your Server

1. Log into your RegPoints dashboard
2. Go to **Manage Regiment** → **Discord Tab**
3. Click the `Click to invite Bot` button
4. You'll be redirected to Discord's authorization page
5. Select your server from the dropdown
6. Review the requested permissions  
    (<span style="color:rgb(255, 192, 0)">note:</span> Administration perms aren't necessary. Feel free to remove them if you feel uncomfortable with the bot having them)
7. Click **Authorize**.

![Discord authorization page in French](/imgs/Pasted%20image%2020251204081029.png)
> *Omg, why is this French...*

:::note[Reminder - Required permissions]
You must have **Manage Server** permissions to invite bots to your Discord server.
:::

## 4.2: Linking Your Regiment

1. In the Discord tab of Manage Regiment, find the **"Command to link regiment with server"** section
2. Copy the command that looks like: `/reglink [unique_code]`
3. Go to your Discord server
4. In any channel where the bot can read messages, paste and send the command
5. The bot will confirm the successful link

> If the bot linking is successful, the dashboard will indicate " `Discord server has already been linked.` ” and the bot will send " `Server successfully linked to [Regiment Name]!` ”.

:::danger[Security Warning]
Never share your reglink code with anyone! This code gives full access to link servers to your regiment.
:::

### Common issues

**Bot doesn't respond:** ⇾ You should check if the bot has the correct permissions. If you are sure you may also check if the bot is online!

**Invalid code** ⇾ Maybe you didn't copy the right code. Make sure you have copied the entire code on the dashboard.

**Already linked** ⇾ Your regiment dashboard may be already linked to another discord server.

---

# Step 5: Testing Your Setup

Let's make sure everything is working correctly!

One quick way to see if the bot is linked is to run the `/reginfo` command.
If the bot is correctly linked, the bot will display a message such as this one!

# Step 6: Configuring Bot Permissions

After linking, you'll want to set up admin roles, so your staff can use administrative bot commands.

## Setting Up Admin Roles

Use these commands in your Discord server. Replace our examples with your own roles.

- `/admin add @Staff` - Adds the @Staff role to admin list
- `/admin add @Officers` - Adds the @Officers role to admin list
- `/reginfo` - Shows current server configuration and admin roles
