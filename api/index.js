import express from "express";
import mongoose from "mongoose";

// const express = require("express");

mongoose.connect("");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
