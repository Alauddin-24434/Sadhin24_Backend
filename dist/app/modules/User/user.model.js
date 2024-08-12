"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true, },
    password: { type: String, required: true },
    role: { type: String, enum: ['guest', 'admin', 'receptionist', 'manager', 'housekeeper'] },
    status: { type: String, enum: ['in-progress', 'blocked'], default: 'in-progress' },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });
exports.User = (0, mongoose_1.model)('User', userSchema);
