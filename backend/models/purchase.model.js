import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product', 
    },
});

export const Purchase = mongoose.model('Purchase', purchaseSchema);