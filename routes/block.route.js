const Router = require("@koa/router");

const Blockchain = require("../Blockchain");
const Block = require("../Block");

const router = new Router({
  prefix: "/block",
});

router.get("/", async (ctx) => {
  const blocks = await Blockchain.getAllBlocks();
  ctx.body = blocks;
});

router.get("/:hash", async (ctx) => {
  const { hash } = ctx.params;
  const block = await Blockchain.getBlockByHash(hash);
  if (block) ctx.body = block;
  else ctx.body = { error: "not found." };
});

router.post("/", async (ctx) => {
  const { data } = ctx.request.body;
  const block = await Blockchain.addBlock(new Block(data));
  ctx.body = JSON.parse(block);
});

module.exports = router;
