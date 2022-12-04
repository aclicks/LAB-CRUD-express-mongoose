import express from "express";
import PurchaseModel from "../models/purchase.model.js";

purchaseRoute.post("/purchases", async (req, res) => {
	try {
		const form = req.body;

		const newPurchase = await PurchaseModel.create(form);

		return res.status(201).json(newPurchase);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: "Não foi possível criar o pedido" });
	}
});

purchaseRoute.get("/purchases/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const purchaseFound = await PurchaseModel.findById(id).populate({
            path: "albumID",
            model: "Album",
        });

		return res.status(200).json(purchaseFound);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: "Conteúdo não encontrado" });
	}
});