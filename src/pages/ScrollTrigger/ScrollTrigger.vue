<template>
  <div class="print">
    <div class="printCon" id="printCon">
      <div class="printTop">
        <!-- row -->
        UWELL 深圳市优维尔科技有限公司 表单编号：UW-GS-FD-001-01 版本：A2 费用报销单
        相关审批号
        <br />
        <!-- row -->
        报销部门： 填报日期： 年月日 单据及附件先关
      </div>

      <table class="printBottom">
        <tbody>
          <tr>
            <td span="2">费用开支项目</td>
            <td>金额（元）</td>
            <td rowspan="3">备注</td>
            <td rowspan="3" colspan="3"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td rowspan="2">部门主管/部门长审核</td>
            <td rowspan="2"></td>
            <td rowspan="2">部门中心长审核</td>
            <td rowspan="2"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td rowspan="2">财务中心长审批</td>
            <td rowspan="2"></td>
            <td rowspan="2">CEO审批</td>
            <td rowspan="2"></td>
          </tr>
          <tr>
            <td>合计</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">金额（大写）：</td>
            <td colspan="2">原借款： 元</td>
            <td colspan="2">应退余额： 元</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="printButtom" v-show="printStatus" @click="printChange()">发起打印</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      printStatus: true,
    };
  },
  methods: {
    printChange() {
      window.print();
    },
  },
};
</script>

<style lang="less" scoped>
.print {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .printCon {
    padding: 50px;
    box-sizing: content-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    height: 583px;
    width: 826px;

    .printTop {
      height: 25%;
      width: 100%;
    }
    .printBottom {
      height: 75%;
      width: 100%;
      border-top: 1px solid black;
      border-left: 1px solid black;
      td {
        height: 12.5%;
        width: 16.667%;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
      }
    }
  }

  .printButtom {
    margin: 10px;
    cursor: pointer;
    height: 48px;
    line-height: 48px;
    text-align: center;
    width: 120px;
    background-color: rgba(204, 204, 204, 0.8);
  }
}

@media print {
  @page {
    /* 纵向展示（高度展示内容更多） */
    //  size: portrait
    /* 横向（宽度展示内容更大） */
    size: landscape !important;
    /* 打印的边距 上右下左 */
    // margin: 1cm;
  }
  .printButtom {
    display: none !important;
  }
  body {
    page-break-after: always !important;
  }
}
</style>
