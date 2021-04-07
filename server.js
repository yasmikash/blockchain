const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const BlockRoutes = require("./routes/block.route");

const app = new Koa();

app.use(bodyParser());

app.use(BlockRoutes.routes()).use(BlockRoutes.allowedMethods());

app.listen(8000);
