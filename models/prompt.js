import mongoose, {Schema, model, models} from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt:{
        type: Strong,
        requird:[true, 'Prompt is requird.'],
    },
    tag:{
        type: String,
        required: [true, 'Tag is required.'],
    }
})

const Prompt = models.Prompt || model('prompt', PromptSchema)

export default Prompt