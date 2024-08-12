"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const uuid_1 = require("uuid"); // Import UUID function
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("./user.model");
const guest_model_1 = require("../Guest/guest.model");
const createGuestIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // create a userDta object
    const userData = {};
    // add password 
    userData.password = password;
    // set guestRole
    userData.role = 'guest';
    userData.id = (0, uuid_1.v4)();
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        // create a user (transaction-1)
        const newUser = yield user_model_1.User.create([userData], { session });
        // check newUser
        if (!newUser) {
            throw new Error('Failed to create user');
        }
        // set id, _id as user
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;
        // create a guest (transaction-2)
        const newGuest = yield guest_model_1.Guest.create([payload], { session });
        //  check newGuest 
        if (!newGuest) {
            throw new Error('Failed to create guest');
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newGuest;
    }
    catch (err) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(err);
    }
});
exports.userService = {
    createGuestIntoDB,
};
