const useService = require("../service/taekyService");
const useProvider = require("../provider/taekyProvider");
const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");

exports.getRepairRecords = async function (req, res) {
  const userId = req.query.userId;
  const getRepairRecordResult = await useProvider.getRepairRecords(userId);

  return res.send(response(baseResponse.SUCCESS, getRepairRecordResult));
}

exports.usegetRepairDetail = async function (req, res) {
  const userId = req.query.userId;
  const getRepairRecordResult = await useProvider.getRepairRecordDetail(userId);

  return res.send(response(baseResponse.SUCCESS, getRepairRecordResult));
}

exports.usepostRepair = async function (req, res) {
  const { userId, building, room, content } = req.body;
  const postRepairResult = await useService.postRepair(userId, building, room, content);

  return res.send(postRepairResult);
}

exports.patchRepairConfirm = async function (req, res) {
  const repairId = req.body.repairId;
  const patchRepairConfirmResult = await useService.updateRepairConfirm(repairId);

  return res.send(patchRepairConfirmResult);
}

exports.patchRepairState = async function (req, res) {
  const repairId = req.body.repairId;
  const patchRepairConfirmResult = await useService.updateRepairState(repairId);

  return res.send(patchRepairConfirmResult);
}
/*exports.usedelRepair = async function (req, res) {
  const {userId} = req.query;
  const delRepairResult = await useService.delRepair(userId);

  return res.send(delRepairResult);
}*/

exports.usepostApply = async function (req, res) { //외박 신청
  const { userId, startDate, endDate, days, address, reason } = req.body;
  const postApplyResult = await useService.postApply(userId, startDate, endDate, days, address, reason);

  return res.send(postApplyResult);
}

/*//나중에 관리자 페이지를 만든다면..
async function usegetTitleApply() {
  async (req, res) => {
    await res.send(useProvider.getTitleApply());
  };
}

async function usegetApply() {
  async (req, res) => {
    const apply_id = req.body;
    await res.send(useProvider.getApply());
  };
}*/

/*//신청 취소 기능을 추가한다면..
async function usedelApply() {
  async (req, res) => {
    const apply_id = req.params.id;
    await useService.delApply(apply_id);
    await res.send("외박신청 삭제 완료");
  };
}*/
