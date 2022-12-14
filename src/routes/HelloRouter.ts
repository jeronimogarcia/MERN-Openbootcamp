import { BasicResponse } from "@/controller/types";
import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

// Router from express
let helloRouter = express.Router();

// GET -> http://localhost:8000/api/hello?name=Martin/
helloRouter.route("/")
    //Get:
    .get(async (req: Request, res: Response) => {
         // Obstain a Query Param
        let name: any = req?.query?.name;
        LogInfo(`Query Param: ${name}`);

        // Controller Instance to execute method
        const controller: HelloController = new HelloController();

        // Obtain Response
        const response: BasicResponse = await controller.getMessage(name);

        // Send the client the response
        return res.send(response);
});

export default helloRouter;
