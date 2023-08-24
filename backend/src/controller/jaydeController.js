const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");
const mealObj = [];
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const jaydeProvider = require('../provider/jaydeProvider');
const jaydeService = require('../service/jaydeService');
const dotenv = require('dotenv');
const moment = require("moment-timezone");

dotenv.config();
async function getDietSchedule() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.goto('http://www.duksung.ac.kr/diet/schedule.do');
        const content = await page.content();
        const $ = cheerio.load(content);

        const dayList = $("#schedule-table > thead > tr > th");
        dayList.each((index, list) => {
            if ($(list).find('br').length) {
                $(list).find('br').replaceWith('\n');
            }
            const day = $(list).text();
            mealObj.push({ day });
        })
        mealObj.shift();

        const mealList = $("#schedule-table > tbody > tr > td");
        mealList.each((index, list) => {
            if ($(list).find('br').length) {
                $(list).find('br').replaceWith('\n');
            }
            const meal = $(list).text();
            if(index < 5) {
                mealObj[index].omeal = meal;
            }
        });

        console.log(new Date());
        console.log(mealObj);
        return response(baseResponse.SUCCESS, mealObj);

    } catch (err) {
        console.error(err);
        return errResponse(baseResponse.TABLE_NOT_EXIST);
    } finally {
        await browser.close();
    }
}

function getWeekRange() { //주차의 날짜를 구하는 함수
    const KST = moment().tz('Asia/Seoul');
    const day = KST.day(); // 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
    const diff = KST.date() - day + (day === 0 ? -6 : 1); // 해당 주의 첫 날짜

    const startOfWeek = KST.date(diff).format('YYYY-MM-DD');
    const endOfWeek = KST.date(diff+6).format('YYYY-MM-DD'); // 해당 주의 마지막 날짜

    return { start: startOfWeek, end: endOfWeek };
}

exports.getMenu = async function (req, res) {
    const todayMeal = await getDietSchedule();

    return res.send(todayMeal);
}

exports.getCleaningData = async function(req, res) {
    const userId = req.query.userId;
    const {start, end} = getWeekRange();
    const cleaningDataList = await jaydeProvider.getCleaningData(userId, start, end);

    return res.send(response(baseResponse.SUCCESS, cleaningDataList));
}

exports.getCleaningRecords = async function(req, res) {
    const userId = req.query.userId;
    const cleaningRecordsList = await jaydeProvider.getCleaningRecords(userId);

    return res.send(response(baseResponse.SUCCESS, cleaningRecordsList));
}

exports.patchCleaningComplete = async function(req, res) {
    const {userId, date} = req.body;
    const updateCompleteResult = await jaydeService.updateCleaningComplete(userId, date);

    return res.send(updateCompleteResult);
}

exports.patchCleaningConfirm = async function(req, res) {
    const {userId, date} = req.body;
    const updateCompleteResult = await jaydeService.updateCleaningConfirm(userId, date);

    return res.send(updateCompleteResult);
}

exports.getUnitMemberName = async function(req, res) {
    const userId = req.query.userId;
    const getUnitMemberName = await jaydeProvider.findUnitMemberName(userId);

    return res.send(response(baseResponse.SUCCESS, getUnitMemberName));
}

exports.getMemberSche = async function(req, res) {
    const memberName = req.query.memberName;
    const getUnitMemberSche = await jaydeProvider.findUnitMemberSche(memberName);

    return res.send(response(baseResponse.SUCCESS, getUnitMemberSche));
}

exports.postChangeReq = async function(req, res) {
    const { userId, substitueMem, date, changeDateList, reason } = req.body;
    const getUnitMemberName = await jaydeService.insertChangeReq(userId, substitueMem, date, changeDateList, reason);

    return res.send(getUnitMemberName);
}

exports.test = async function(req, res) {
    const dbtest = await jaydeProvider.test();
    return res.send(response(baseResponse.SUCCESS, dbtest));
}