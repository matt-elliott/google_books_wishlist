# The Problem
People love browsing Google books but have no way to store books in an easy to access Wishlist. Well no more!
Thanks to…

# The Solution
The Google Books Wishlist App allows you to easily save books for later purchases.

### Directions
Just search the book title and save the book.


# Outline

##	Routes
1. /search/

	// render react search component
	
	• show results of user search
	• user can view (to google) and
		 save to our db

2. /saved/

	// render all saved books in mongodb
		
	User can…
	
	• view books
	• delete book from wishlist
	
3. /api/savebook/
	• save book data to mongodb
	
		{
			"title"
			
			"author"
			
			"description"
			
			"image"
			
			"link"
			
		}
		
4. /api/books
	get all saved books

5. /api/books/:id

	delete book by id from database
	
5. /*/
	will load up the static react 	directory
	
	
## APIs Utilized
1. Google Books API

## Packages Used
• Express
• mongoose

## Frameworks Used
• React
• Bootstrap







