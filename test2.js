  let edited = []
  for (let x in this.chunks) {
    for (let z in this.chunks[x]) {
      let chunk = this.chunks[x][z]
      if (chunk.edited) {
        for (let y = 0; y < chunk.sections.length; y++) {
          if (chunk.sections[y].edited) {
            edited.push([chunk.sections[y], chunk.cleanSections[y]])
          }
        }
      }
    }
  }

  let pallete = {}
  for (let chunks of edited) {
    let changes = false
    chunks[0].blocks.forEach((id, i) => {
      if (id !== chunks[1][i]) {
        pallete[id] = true
        changes = true
      }
    })
    if (!changes) {
      chunks[0].edited = false
    }
  }

  let blocks = Object.keys(pallete).map(n => Number(n))
  pallete = {}
  blocks.forEach((block, index) => pallete[block] = index)

  let rnd = Math.round
  let options = p.flying | superflat << 1 | p.spectator << 2 | caves << 3 | trees << 4

  let str = world.name + ";" + worldSeed.toString(36) + ";" +
    rnd(p.x).toString(36) + "," + rnd(p.y).toString(36) + "," + rnd(p.z).toString(36) + "," +
    (p.rx * 100 | 0).toString(36) + "," + (p.ry * 100 | 0).toString(36) + "," + options.toString(36) + ";" +
    version + ";" +
    blocks.map(b => b.toString(36)).join(",") + ";"

  for (let i = 0; i < edited.length; i++) {
    if (!edited[i][0].edited) {
      continue
    }
    let real = edited[i][0]
    let blocks = real.blocks
    let original = edited[i][1]
    str += (real.x / 16).toString(36) + "," + (real.y / 16).toString(36) + "," + (real.z / 16).toString(36) + ","
    for (let j = 0; j < original.length; j++) {
      if (blocks[j] !== original[j]) {
        str += (pallete[blocks[j]] << 12 | j).toString(36) + ","
      }
    }
    str = str.substr(0, str.length - 1); //Remove trailing comma
    str += ";"
  }
  if (str.match(/;$/)) str = str.substr(0, str.length - 1)
  return str
  document.write(str)
