export class LocalSorter {

  protected static COMPARE = (direction: any, a: any, b: any) => {
    if (a < b) {
      return -1 * direction;
    }
    if (a > b) {
      return direction;
    }
    return 0;
  }

  // 重构数据
  static resData(data: any, setCol: any) {
    let colArr = [];
    for (let k in setCol.columns) {
      colArr.push(k);
    }
    let newData = data.reverse();
    for (let i1 = 0; i1 < colArr.length; i1++) {
      for (let i = 0; i < newData.length; i++) {
        if (newData[i + 1]) {
          if (newData[i][colArr[i1]].text == newData[i + 1][colArr[i1]].text) {
            newData[i][colArr[i1]].text = null;
            newData[i + 1][colArr[i1]].rowspan += newData[i][colArr[i1]].rowspan;
            newData[i][colArr[i1]].rowspan = 1;
          }
        }
      }
    }
    data = newData.reverse();
    return data;
  }

  static sort(data: Array<any>, field: string, direction: string, customCompare?: any): Array<any> {

    // const dir: number = (direction === 'asc') ? 1 : -1;
    // const compare: Function = customCompare ? customCompare : this.COMPARE;

    // return data.sort((a, b) => {
    //   return compare.call(null, dir, a[field], b[field]);
    // });

    let paiXudata = JSON.parse(JSON.stringify(data));

    const dir: number = (direction === 'asc') ? 1 : -1;
    const compare: Function = customCompare[0] ? customCompare[0] : this.COMPARE;

    let grid = customCompare[1];

    paiXudata.sort((a: any, b: any) => {

      if (grid.settings.isCellMerge) {
        return compare.call(null, dir, a[field].text, b[field].text);
      } else {
        return compare.call(null, dir, a[field], b[field]);
      }

    });

    // for (let i = 0; i < paiXudata.length; i++) {

    // console.info(paiXudata[i].chuban1.text);
    // if ((i + 1) < paiXudata.length) {
    // console.info(paiXudata[i+1].chuban1.text);
    // if (paiXudata[i].chuban1.text === paiXudata[i + 1].chuban1.text) {
    //   paiXudata[i + 1].chuban1.text = null;
    //   paiXudata[i].chuban1.rowspan += 1;
    // }
    // }
    // }

    // console.info(paiXudata);
    // console.info(this.resData(paiXudata));
    // data = this.resData(paiXudata);

    data = paiXudata;


    return data;
  }
}
