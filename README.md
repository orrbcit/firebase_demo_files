# firebase_demo_code

This folder contains a collection of demo projects.
To see the database in action, you must insert your firebase project's API snippet (which you get from firebase console), and paste it into the file *setup_firebase_yourname.js*, to connect to your live database。

#### demo_data.json
- This file is a sample json file with collections that are used in the demo examples. 

#### db_read_write_demo    
- This mini-project shows how to do basic read/writes into the database (techmini1)

#### login_quick_demo      
- This mini-project shows use of the firebase authentication UI widget (techmini2)

#### login_app_demo        
- This mini-project is a "Quote of the Day" App.  The landing page has no quote, 
and a general greeting.  Once logged in (via AuthUI widget), the user gets a personal greeting
and a random quote of the day.   The user can update profile info, which consequently updates a previously created user
object in firebase.  The user who is logged in can also logout. 
                      
#### display_collection_demo 
- This mini-project is similar to techmini3.  When a DOM element is clicked, the script 
reads from the database to get a collection of objects, and then uses a for loop to display 
all the items in the collection.  The objects are displayed in DOM elements that are 
created dynamically ("on the fly").  An image is also displayed.  The image filename is read from the database object, and a "img" element is created dynamically.  The images are all located in a "/images" folder in the project directory.  There is no styling. 

#### water_finder_example  
- This example includes a DOM element listener, which initiates a read from the database,
to return a list that is dislayed as simple text (no style).
  
#### misc_relevant_bits
- Files from lecture slides. Demonstrates asynch calls, use of promise, localStorage, and URI redirection with appended data

#### chat_demo
- A live chat mini-project.

  
  
