import request from "supertest";
import app from "../../app";
import connect, { MockDb } from "../fixtures/mockdb";

let mockdb: MockDb;
