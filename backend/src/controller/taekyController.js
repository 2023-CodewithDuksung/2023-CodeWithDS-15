const useService = require("../service/taekyService");
const useProvider = require("../provider/taekyProvider");
const baseResponse = require("../../config/baseResponseStatus");
const { response, errResponse } = require("../../config/response");

exports.getRepairRecords = async function (req, res) {
  const userId = req.query.userId;
  const getRepairRecordResult = await useProvider.getRepairRecords(userId);

  return res.send(response(baseResponse.SUCCESS, getRepairRecordResult));
};

exports.usegetRepairDetail = async function (req, res) {
  const userId = req.query.userId;
  const getRepairRecordResult = await useProvider.getRepairRecordDetail(userId);

  return res.send(response(baseResponse.SUCCESS, getRepairRecordResult));
};

exports.usepostRepair = async function (req, res) {
  const { userId, building, room, content } = req.body;
  const postRepairResult = await useService.postRepair(
    userId,
    building,
    room,
    content
  );

  return res.send(postRepairResult);
};

exports.patchRepairConfirm = async function (req, res) {
  const repairId = req.body.repairId;
  const patchRepairConfirmResult = await useService.updateRepairConfirm(
    repairId
  );

  return res.send(patchRepairConfirmResult);
};

exports.patchRepairState = async function (req, res) {
  const repairId = req.body.repairId;
  const patchRepairConfirmResult = await useService.updateRepairState(repairId);

  return res.send(patchRepairConfirmResult);
};
/*exports.usedelRepair = async function (req, res) {
  const {userId} = req.query;
  const delRepairResult = await useService.delRepair(userId);

  return res.send(delRepairResult);
}*/

exports.usepostApply = async function (req, res) {
  //외박 신청
  const { userId, startDate, endDate, days, address, reason } = req.body;
  const postApplyResult = await useService.postApply(
    userId,
    startDate,
    endDate,
    days,
    address,
    reason
  );

  return res.send(postApplyResult);
};

/*//나중에 관리자 페이지를 만든다면..
async function usegetTitleApply() {
=======
//수리요청
async function usegetTitleRepair(_, res) {
  await res.send(useProvider.getTitleRepair());
}

//수리요청 본문 요청
async function usegetRepair(req, res) {
  const repair_id = req.query.repairid;

  await res.send(useProvider.getRepair(repair_id));
}
async function usepostRepair() {
  async (req, res) => {
    const { repair_id, buildname, room, name, fixcontent, state, title } =
      req.body;
    await useService.postRepair(
      repair_id,
      buildname,
      room,
      name,
      fixcontent,
      state,
      title
    );
    await res.send("수리요청 글 작성 완료");
  };
}
/*async function usedelRepair() {
  async (req, res) => {
    const repair_id = req.params.id;
    await useService.delRepair(repair_id);
    await res.send("수리요청 글 삭제 완료");
  };
}*/

//외박신청
/*async function usegetTitleApply() {
>>>>>>> Stashed changes
  async (req, res) => {
    await res.send(useProvider.getTitleApply());
  };
}
*/
/*async function usegetApply() {
  async (req, res) => {
    const apply_id = req.body;
    await res.send(useProvider.getApply());
  };
}*/

/*//신청 취소 기능을 추가한다면..
async function usedelApply() {
=======
/*async function usedelApply() {
>>>>>>> Stashed changes
  async (req, res) => {
    const apply_id = req.params.id;
    await useService.delApply(apply_id);
    await res.send("외박신청 삭제 완료");
  };
}*/

//커뮤니티 (일상,장터) 글 저장
exports.usepostCommu = async function (req, res) {
  const { topic, title, content, writerId } = req.body;
  const result = await useService.postCommu(title, topic, content, writerId);
  return res.send(result);
}
//커뮤니티 (일상,장터) 글 리스트 조회
exports.usegetCommu = async function(req, res) {
  const topic = req.query.topic;
  const result = await useProvider.getCommu(topic);
  await res.send(response(baseResponse.SUCCESS, result));
}
//커뮤니티 (일상,장터) 글 본문 조회
exports.usegetCommuContent = async function(req, res) {
  const topic = req.query.topic;
  const title = req.query.title;
  const result = await useProvider.getCommuContent(topic, title);
  return res.send(response(baseResponse.SUCCESS, result));
}
//커뮤니티 배달팟 글 리스트 조회
exports.usegetDelivery = async function (req, res) {
  const result = await useProvider.getDelivery();
  return res.send(response(baseResponse.SUCCESS, result));
}
//커뮤니티 배달팟 글 본문 조회
exports.usegetDeliveryContent = async function (req, res) {
  const title = req.query.title;
  const result = await useProvider.getDeliveryContent(title);
  return res.send(response(baseResponse.SUCCESS, result));
}
//커뮤니티 배달팟 글 저장
exports.usepostDelivery = async function (req, res) {
  const { title, description, eto, pplLimit, slot } = req.body;
  const result = await useService.postDelivery(title, description, eto, pplLimit, slot);
  return res.send(result);
}
//커뮤니티 배달팟 글 수정(현재 인원)
/*exports.useupdateDelivery = async function (req, res) {
  const { title, slot } = req.body;
  if (currentPeople > maxPeople) {
    throw error;
  } else {
    const result = await useService.updateDelivery(title, currentPeople);
    return res.send(result);
  }
}*/
//점호방송 조회
exports.usegetBroadcast = async function (req, res) {
  const date = req.query.date;
  const building = req.query.building;
  const result = await useProvider.getBroadcast(date, building);
  return res.send(result);
}