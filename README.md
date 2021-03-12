# Go Fetch!
## Play fetch and find some A+ pups

Take an api that returns a random dog picture along with a built in function that returns a random name, and create a toy app that lets you save your favorite pics.
You should present your user with a randomly generated dog pic and name with the click of a button. The user can then either save that dog to their favorites or load another dog. Dogs saved in favorites should persist on the screen. Below is a simple example of what you could create.

Heres is an example of what you might create:
![Example application](example.png)

---------------------------------------------

# Requirements
- The page should load with a single, named dog
- There should be a button that lets users load a new, named dog
- There should be a button that lets users save the given dog to their list of favorites
- When saved, the name and photo of the dog must remain the same

## Stretch goals
- *Every dog is one of a kind*
  - There are so many good dogs, we have no room for duplicates. Make it so your app can't save duplicate images (two dogs with identical names is fine).

- *Super Star your FAVORITE dog*
  - Add a button that lets you highlight absolute favorite. Only one dog should be your favorite at a time,

- *Love is forever (until you clear your cache)*
  - Save your dogs for another time. Your favorites should persist across page reloads by living in your `localStorage`.

- *Give those dogs a nickname*
  - No one calls dogs by their real name, why should you? Make it so that your users can give their favorite dogs a nickname that displays below their real name.