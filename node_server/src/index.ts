// const express = require("express");
import express from "express";

const app = express();

app.get("/api/hello", (req, res) => {
  res.send("hello world");
});

app.listen(1818, () => {
  console.log("TypeScript server is listening 1818");
});
