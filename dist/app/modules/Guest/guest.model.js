"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest = void 0;
const mongoose_1 = require("mongoose");
const user_model_1 = require("../User/user.model");
// Define the schema
const guestSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true, unique: true, ref: user_model_1.User },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true }
});
exports.Guest = (0, mongoose_1.model)('Guest', guestSchema);
