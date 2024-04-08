const express = require("express");
const axios = require("axios");
const Products = require("../models/index");
const app = express();

function getRandomRegion(regions) {
  const randomIndex = Math.floor(Math.random() * regions.length);
  return regions[randomIndex];
}

app.get("/getData", async (req, res) => {
  try {
    const regions = [
      "동대문구",
      "노원구",
      "구로구",
      "종로구",
      "성북구",
      "광진구",
      "용산구",
      "동작구",
      "서대문구",
      "송파구",
      "성동구",
      "마포구",
      "서초구",
      "은평구",
      "관악구",
      "강서구",
      "도봉구",
      "중구",
    ];

    const response = await axios.get(
      `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${process.env.TTBKey}&QueryType=ItemNewAll&MaxResults=50&start=1&SearchTarget=Book&CategoryId=8257&output=js&Version=20131101`
    );
    const data = response.data.item;

    const newData = data.map((item) => ({
      name: item.title,
      author: item.author,
      price: item.priceStandard,
      imgUrls: item.cover,
      publisher: publisher,
      region: getRandomRegion(regions), // 무작위로 region 선택하여 추가
    }));

    await Products.insertMany(newData);
    res.status(200).send("데이터 추가 성공");
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

module.exports = app;

To;
