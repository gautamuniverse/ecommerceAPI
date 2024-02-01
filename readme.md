# E-Commerce API

This is an API for an ecommerce platform admin to manage product inventory.

## Technologies Used

- NodeJS
- Express
- MongoDB (mongoose)

## Features

- User can create a product
- User can get all the products
- User can delete a product by its id (mongoDB ID)
- User can update a product's quantity (increase or decrease)

## API Routes

- Post route to create a new product: `/products/create`
- Get route to fetch all the products: `/products/`
- Delete route to remove a product using their ID: `/products/:id`
- Post route to update the quantity of an existing product using their id: `/:id/update_quantity/`

## Other Features

1. Application level error handler to handle all the custom thrown errors and the unhandled errors.
2. Dotenv library used to separate the sensitive keys from the user.


## Folder Structure
```
│
├── node_modules
│
├── src
│  │ 
│  ├── config
│  │    ├── mongoDb.config.js 
│  │ 
│  ├── errorHandler 
│  │   ├── errorHandler.js 
│  │ 
│  ├── product 
│      ├── product.controller.js 
│      ├── product.repository.js 
│      ├── product.routes.js  
│      └── product.schema.js  
│   
├── env.config.js  
│   
├── index.js  
│    
└── package.json    
```

## Getting Started

To get started with Habit Forge:

1. Clone the repository: `git clone https://github.com/gautamuniverse/ecommerceAPI.git`
2. Create a .env file in the root directory and make the following key entries:
- DB_URL (mongoDB)
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Open your browser and navigate to `http://localhost:3542`


## Contact Information
- **Author:** Gautam
- **GitHub:** [gautamuniverse](https://github.com/gautamuniverse)
- **LinkedIn:** [Gautam](https://www.linkedin.com/in/gautam-116307bb/)
- **Instagram:** [@gautamuniverse.in](https://www.instagram.com/gautamuniverse.in/)