export class LocalFilter {
  // protected grid: any;

  // grid: any;
  protected static FILTER = (value: string, search: string) => {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
  }
  // Array<any>
  static filter(data: Array<any>, field: string, search: string, customFilter?: Function): Array<any> {
 
    let fn = customFilter['fn'];
    let grid = customFilter['data'] ? customFilter['data'] : null;
    const filter: Function = fn ? fn : this.FILTER;
    return data.filter((el) => {   
      const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
      if (grid['settings'].isCellMerge) {
        return filter.call(null, value.text, search[0]);
      } else {
        return filter.call(null, value, search);
      }
    });
  }
}
