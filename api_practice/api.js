import express from 'express';
import Database from 'better-sqlite3';
import Joi from 'joi';

// Create instance of express function
app = new express();

// Serve static files using express
app.use(express.static("public"));