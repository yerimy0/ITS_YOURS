const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');
const Products = require('./models');
const app = express();

app.get('/getData', async(req, res) => {
    try {
        const response = await axios.get(`https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${process.env.TTBKey}&QueryType=ItemNewAll&MaxResults=50&start=1&SearchTarget=Book&CategoryId=8257&output=js&Version=20131101`)
        const data = response.data;

        await Products.create(data);
        res.status(200).send('데이터 추가 성공');
    } catch (error) {
        res.status(500).send('SERVER ERROR');
    }
});
    



