import mongoose from 'mongoose'

let isConnected = false


export const connectToDb = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('Database is already connected')
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)

    isConnected = true

    console.log('Connected to Db')
  } catch (error) {
    console.log('Error occured - ', error)
  }
}
