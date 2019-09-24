/*
对于导出数据而言,返回二进制流文件是最常见的, 而前端打开链接下载excel文件一般有三种方式,
第一种是form表单方式 , 也是同步下载方式,直接下载. 这种方式的优点在于不需要对返回数据进行转换操作, 浏览器会自动同步解析.
但缺点是无法对返回结果进行操作, 如:一般工作中需要对请求进行鉴权, 这个时候,form表单方式下载是无法在请求头中带上token的, 后端只能通过从cookie中获取.

第二种是a标签下载方式, 将返回结果处理成一个新链接, 通过创建a标签打开, 这种方式的优点在于内部请求不需要对鉴权做多余处理, 也可以拿到返回结果进行操作,
缺点在于不注意之间会产生乱码,及数据量太大导致网络失败.
使用blob容器可以解决数据量大导致网络失败的问题,
而乱码问题在二进制流前拼接字符串'\ufeff'即可
 */
function a() {
  let blob = 'haha'
}
 this.$axios({
      method: params.method,
      url: params.url,
      data: params.data,
      responseType: 'blob'  // 指明返回格式,
 }).then(res => {
   console.log(res) // 返回结果
   // 这里尤其需要注意, '\ufeff' 用于解决乱码问题, blob可以解决数据量大导致网络失败.
   const blob = new Blob(['\ufeff' + res.data], { type: 'text/csv;charset=utf-8' })
      const url = window.URL.createObjectURL(blob)
      // 通过创建a标签实现
      const link = document.createElement('a')
      link.href = url
      // 对下载的文件命名
      link.download = decodeURI(res.headers['content-disposition'].split('=')[1]) || '发货单导出数据表.csv'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
