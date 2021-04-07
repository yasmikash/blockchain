const sha256 = require("crypto-js/sha256");
const Block = require("./Block");

const {
  addData,
  getSingleData,
  getAllData,
  getDataCount,
  getDataByKeyVal,
} = require("./db-config");

class Blockchain {
  static async addBlock(block) {
    const blockHeight = await this.getBlockHeight();

    const previousBlockHash = JSON.parse(
      await this.getBlockByHeight(blockHeight - 1)
    ).hash;

    block.previousBlockHash = previousBlockHash;

    block.height = blockHeight;
    block.time = new Date().getTime().toString().slice(0, -3);
    const hash = sha256(JSON.stringify(block)).toString();
    block.hash = hash;

    return await addData(block.height, JSON.stringify(block));
  }

  static getBlockByHeight(height) {
    return getSingleData(height);
  }

  static getBlockByHash(hash) {
    return getDataByKeyVal("hash", hash);
  }

  static getBlockHeight() {
    return getDataCount();
  }

  static getAllBlocks() {
    return getAllData();
  }
}

module.exports = Blockchain;
