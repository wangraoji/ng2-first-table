export class LocalFilter {
  // protected grid: any;

  // grid: any;
  protected static FILTER = (value: string, search: string) => {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
  }

  static filter(data: Array<any>, field: string, search: string, customFilter?: Function): Array<any> {
    // 

    // console.info(this);
    // console.info(field[1]);
    // console.info(data);
    // const columns = field[1]["dataSet"].columns;

    // console.info(columns);
    // columns.forEach( (el1:any)=> {
    //     console.info(el1.id);
    // });
    // data.forEach( (el:any, i: any)=>{
      // console.info(i);
      // console.info(el.chuban1.rowspan);
      // if(el.chuban1.rowspan !== ""){
      //     // console.info(i);
      //     // console.info(el.chuban1.rowspan);
      //     for( let j = i; j < el.chuban1.rowspan; j++) {
      //       // console.info(data[j]);
      //       data[j].chuban1.text = data[i].chuban1.text;
      //       // 
      //     }
      // }
      // console.info(data[i]);
      // grid.dataSet.columns
      // console.info(grid);
    // })
  
    // console.info(data);

    const filter: Function = customFilter ? customFilter : this.FILTER;
    
    
    return data.filter((el) => {
      
      // console.info(11);
      // console.info();
      // el.chuban1.rowspan = "";
      const value = typeof el[field[0]] === 'undefined' || el[field[0]] === null ? '' : el[field[0]];
      // const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
  
      // const value = typeof el[field[0]].text === 'undefined' || el[field[0]].text === null ? '' : el[field[0]].text;
      // console.info(value);
      return filter.call(null, value, search);
    });
  }
}
