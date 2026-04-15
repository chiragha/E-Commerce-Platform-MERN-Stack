import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    createdBy: {   // ✅ FIXED POSITION
        type: mongoose.Types.ObjectId,
        ref: 'Admin',
        required: true
    }
});
export const Product = mongoose.model('Product', productSchema);