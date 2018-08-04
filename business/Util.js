class Util {

  static adjustData(array, bookmarkArr) {
    let finalArray = []
    for (let count = 0; count < array.length; count++) {
      let item = array[count]

      // BOOKMARK
      let checkExist = 
          bookmarkArr.find(
            function (obj) { return obj.webUrl === item.webUrl })
      if (checkExist === undefined)
      {
        item.bookmark = false
      } else {
        item.bookmark = true
      }

      // PUBLISH DATE FORMAT
      let publishDate = item.webPublicationDate
      item.webPublicationDate = formatPublishDate(publishDate)

      finalArray.push(item)
    }
    return finalArray
  }
}

function formatPublishDate(dateText) {
    let arr = dateText.split('T')
    if (arr.length != 2) return dateText
    arr = arr[0].split('-')
    if (arr.length != 3) return dateText
    let newDate = arr[2] + '-' + arr[1] + '-' + arr[0]
    return newDate
  }

module.exports = Util