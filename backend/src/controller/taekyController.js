const useService = require("../service/taekyService");
const useProvider = require("../provider/taekyProvider");

async function usegetTitleRepair() {
  async (_, res) => {
    await res.send(useProvider.getTitleRepair());
  };
}
async function usegetRepair() {
  async (req, res) => {
    const repair_id = req.body;
    await res.send(useProvider.getRepair(repair_id));
  };
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
async function usedelRepair() {
  async (req, res) => {
    const repair_id = req.params.id;
    await useService.delRepair(repair_id);
    await res.send("수리요청 글 삭제 완료");
  };
}

async function usegetTitleNotice() {
  async (req, res) => {
    await res.send(useProvider.getTitleNotice());
  };
}
async function usegetNotice() {
  async (req, res) => {
    const notice_id = req.body;
    await res.send(useProvider.getNotice(notice_id));
  };
}

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
}

async function usepostApply() {
  async (req, res) => {
    const { apply_id, stuno, name, startDate, endDate, days, address, reason } =
      req.body;
    await useProvider.postApply(
      apply_id,
      stuno,
      name,
      startDate,
      endDate,
      days,
      address,
      reason
    );
    await res.send("외박신청 작성 완료");
  };
}

async function usedelApply() {
  async (req, res) => {
    const apply_id = req.params.id;
    await useService.delApply(apply_id);
    await res.send("외박신청 삭제 완료");
  };
}

module.exports = {
  usepostRepair,
  usedelRepair,
  usepostApply,
  usedelApply,
  usegetTitleRepair,
  usegetRepair,
  usegetTitleNotice,
  usegetNotice,
  usegetTitleApply,
  usegetApply,
};
