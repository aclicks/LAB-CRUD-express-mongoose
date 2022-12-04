import { Schema, model } from "mongoose";

const purchaseSchema = new Schema({
	shippingAdress: {
		type: String,
	},
	album: [
		{
			albumID: { type: Schema.Types.ObjectId, ref: "Album" },
		},
	],
});
const PurchaseModel = model("Purchase", purchaseSchema);

export default PurchaseModel;
