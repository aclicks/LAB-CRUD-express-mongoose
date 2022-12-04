import express from "express";
import AlbumModel from "../models/album.model.js";

const albumRoute = express.Router();

albumRoute.post("/albums", async (req, res) => {
	try {
		const form = req.body;

		const newAlbum = await AlbumModel.create(form);

		return res.status(201).json(newAlbum);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: "Não foi possível criar o Álbum" });
	}
});

albumRoute.get("/albums", async (req, res) => {
	try {
		const albums = await AlbumModel.find({});

		return res.status(201).json(albums);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: "Não foi possível buscar o conteúdo" });
	}
});

albumRoute.get("/albums/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const albumFound = await AlbumModel.findById(id);

		return res.status(200).json(albumFound);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: "Álbum não encontrado" });
	}
});

albumRoute.put("/albums/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const updatedAlbum = await AlbumModel.findByIdAndUpdate(id, { ...req.body });

		return res.status(200).json(updatedAlbum);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: "Álbum não encontrado" });
	}
});

albumRoute.delete("/albums/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const deletedAlbum = await AlbumModel.findByIdAndDelete(id);

		if (!deletedAlbum) {
			return res.status(400).json({ msg: "Álbum não encontrado!" });
		}

		return res.status(204).json();
	} catch (error) {
		console.log(error);
		return res.status(500).json();
	}
});