//const db = require('./db')

import  prod from '../models/productModel.js'
//import Order from '../models/orderModel.js'
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  } from '../controllers/productController.js'
  import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
 } from '../controllers/userController.js'
 import {
  addOrderItems,
 getOrderById,
 updateOrderToPaid,
 updateOrderToDelivered,
 getMyOrders,
 getOrders,
 } from '../controllers/orderController.js'

const Query = {
//resolver function for students returns list
greeting: (root,args,context,info)=>{
    //check if the context.user is null
    if (!context.user) {
        return "noooooooooooooooo "
   // throw new Error('Unauthorized');
    }
    return context.user
   
    } ,
//products:()=>prod.find({}),
products:(root,args,context,info)=>getProducts({query:args,params:args}),
productById:(root,args,context,info)=>getProductById({params:args,query:args}),
topProducts:()=>getTopProducts(),
users:(root,args,context,info)=>getUsers({query:args,params:args}),
userById:(root,args,context,info)=>getUserById({params:args,query:args}),
orders:(root,args,context,info)=>getOrders({query:args,params:args}),
orderById:(root,args,context,info)=>getOrderById({params:args,query:args}),
myOrders:(root,args,context,info)=>getMyOrders({params:args,query:args}),
//order:()=>Order.find({})
}

const Mutation ={
  deleteProduct:(root,args,context,info)=>{
  return deleteProduct({params:args,body:args});
  },
  createProduct:(root,args,context,info)=>{
    return createProduct({params:args,body:args});
   },
  updateProduct:(root,args,context,info)=>{
      return updateProduct({params:args,body:args});
     },
     createProductReview:(root,args,context,info)=>{
        return createProductReview({params:args,body:args});
   },
        deleteUser:(root,args,context,info)=>{
          return deleteUser({params:args,body:args});
   },
   createUser:(root,args,context,info)=>{
            return registerUser({params:args,body:args});
     },
            updateUser:(root,args,context,info)=>{
              return updateUser({params:args,body:args});
     },
     createOrder:(root,args,context,info)=>{
      return addOrderItems({params:args,body:args});
},   
     updateOrderToPaid:(root,args,context,info)=>{
      return updateOrderToPaid({params:args,body:args});
},
     updateOrderToDelivered:(root,args,context,info)=>{
      return updateOrderToDelivered({params:args,body:args});
},
  }

const Product={
reviews:(root)=>{
return root.reviews;
}
}

//module.exports = {Query}
export {
Query,Product,Mutation
}

// {
//   productById(id:"63baa7a882c5c929249c683e"){
//   id
//   firstName
//   lastName
//   }
//   }