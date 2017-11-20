export class LocalFilter {
  // protected grid: any;

  // grid: any;
  protected static FILTER = (value: string, search: string) => {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
  }

  static filter(data: Array<any>, field: string, search: string, customFilter?: Function): Array<any> {

    const filter: Function = customFilter ? customFilter : this.FILTER;
    
    return data.filter((el) => {
      const value = typeof el[field[0]] === 'undefined' || el[field[0]] === null ? '' : el[field[0]];
      if(field[1]['settings'].isCellMerge){
        return filter.call(null, value.text, search);
      }else {
        return filter.call(null, value, search);
      }
      
    });
  }
}
