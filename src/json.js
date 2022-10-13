const { cloneDeep, clone } = require('lodash')

const query = {
    mobileOrName: null,
    pageNo: 0,
    pageSize: 10,
    locationId: 'http://git.youxuepai.com/scrm-fe/yxp-smart-shopping-guide/merge_requests/1/diffs',

    refreshing: false,
    loading: false,
    error: false,
    finished: false,
  }
  console.time('JSON')
  for(let i = 0 ;i < 1e4;i++){
   let a = JSON.parse(JSON.stringify(query))
  }
  console.timeEnd('JSON')

  console.time('...')
  for(let i = 0 ;i < 1e4;i++){
   let a = {...query}
  }
  console.timeEnd('...')

  console.time('clone')
  for(let i = 0 ;i < 1e4;i++){
   let a = clone(query)
  }
  console.timeEnd('clone')

  console.time('cloneDeep')
  for(let i = 0 ;i < 1e4;i++){
   let a = cloneDeep(query)
  }
  console.timeEnd('cloneDeep')