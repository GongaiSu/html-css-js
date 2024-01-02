function lyricsReg(lyricString){
  const lyricStringList = lyricString.split("\n")
  const contentList = []
  const lyricStringRep = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/i
  for (const item of lyricStringList) {
    if(!item) continue
    const lyrictime= item.match(lyricStringRep)
    const minutes = lyrictime[1] * 60 * 1000
    const seconds = lyrictime[2] * 1000
    const milliseconds = lyrictime[3].length ===3?lyrictime[3] *1 :lyrictime[3] *10
    const time = minutes+seconds+milliseconds
    const content = item.replace(lyrictime[0],"")
    contentList.push({time,content})
  }
  return contentList
}