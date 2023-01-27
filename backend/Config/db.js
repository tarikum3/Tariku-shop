import mongoose from 'mongoose'
//mongodb+srv://ecommerce:<password>@cluster0.vukghhc.mongodb.net/?retryWrites=true&w=majority
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://ecommerce:5247@cluster0.vukghhc.mongodb.net/?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
