import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const PetSchema = new mongoose.Schema({
  title: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  author: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide the author's name"],
    maxlength: [20, "Author's Name cannot be more than 60 characters"],
  },
  age: {
    /* Pet's age, if applicable */

    type: Number,
  },
  poddy_trained: {
    /* Boolean poddy_trained value, if applicable */

    type: Boolean,
  },
  diet: {
    /* List of dietary needs, if applicable */

    type: Array,
  },
  image_url: {
    /* Url to memo image */
    type: String,
  },
  likes: {
    /* List of things your pet likes to do */

    type: Array,
  },
  dislikes: {
    /* List of things your pet does not like to do */

    type: Array,
  },
})

export default mongoose.models.Pet || mongoose.model('Pet', PetSchema)
