import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            required: true
        }
    }, {timestamps: true})


export const Tweet = mongoose.model("Tweet", tweetSchema)