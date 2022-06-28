# PHASE 1

## STEP 1

```
I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
```

1. How long is the password? Make this show up on the screen
   Should the user be able to type whatever they want? YES
   1a. Check if less than 8. This would bad.
   1b. Check if greater than 128. This would bad.
   1c. Needs to be in between to be valid.

## STEP 2

```
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
```

Should the user be able to type whatever they want? No
Only acceptable answers are yes or no...so boolean should suffice. Think of confirms.

1. Ask for lowercase
1. Ask for uppercase
1. Ask for numberic
1. Ask for special characters

## Step 3

```
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
```

1. Make sure user selects at least one of the four confirms. Otherwise you don't know what characters to use to make their password. Can't have a empty password.

# PHASE 3

```
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
```

1.  Guarentee we at least 1 character of each required type
1.  If any of the confirms are true...add a character to your password. Just one
1.  After you have one of each criteria...you can freely/randomly select a character from any character type
    1a. After we have one character of every type fulfilled, we can can merge all valid characters into a single giant character pool. Then we can randomly select from the giant character pool to fill the password until it is the proper length.
